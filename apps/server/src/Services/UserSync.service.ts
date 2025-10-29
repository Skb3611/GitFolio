import { createClerkClient } from "@clerk/backend";
import { config } from "../config";
import prisma, { SigninType } from "@workspace/db";
import { emailQueue } from "@workspace/email/queue";
import corn from "node-cron";
const client = createClerkClient({
  secretKey: config.CLERK_SECRET_KEY,
});
async function syncUsers() {
  const dbUsers = (await prisma.user.findMany({ select: { id: true } })).map(
    (user) => user.id
  );
  const clerkUsers = await client.users.getUserList({ limit: 200 });
  console.log(
    "Database Users: " + dbUsers.length,
    "Clerk Users: " + clerkUsers.totalCount
  );

  const usersToSync = clerkUsers.data.filter((clerkUser) => {
    return !dbUsers.includes(clerkUser.id);
  });
  console.log("Users to Sync: " + usersToSync.length);
  try {
    await prisma.user.createMany({
      data: [
        ...usersToSync.map((user) => ({
          id: user.id,
          authType: (user?.externalAccounts[0]?.provider === "oauth_google"
            ? "GOOGLE"
            : "GITHUB") as SigninType,
          firstname: user.firstName || user.username || "",
          lastname: user.lastName || "",
          email: user.emailAddresses[0]?.emailAddress || "",
          profileImg: user?.imageUrl,
        })),
      ],
    });
  } catch (e) {
    console.log(e, "Failed to create");
  }
  try {
    const a = await emailQueue.addBulk([
      ...usersToSync.map((user) => ({
        name: "welcome",
        data: {
          name: user.firstName || user.username || "",
          email: user.emailAddresses[0]?.emailAddress || "",
          type: "welcome",
        },
      })),
    ]);
    console.log(a);
  } catch (e) {
    console.log(e, "Failed to send email");
  }
}
corn.schedule("0 0 * * *", syncUsers);
