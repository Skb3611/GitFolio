import prisma, { AccountType, Prisma, SigninType } from "@workspace/db";
import { clerkClient } from "./onboarding.service";

export const processClerkWebhook = async (event: any): Promise<boolean> => {
  const { data, type } = event;
  switch (type) {
    case "user.created":
      if (data.external_accounts.length == 0) {
        let res = await clerkClient.users.updateUser(data.id, {
          firstName: data.email_addresses[0].email_address?.split("@")[0],
        });
      }
      const user = await prisma.user.create({
        data: {
          id: data.id,
          firstname:
            data.first_name ||
            data.username ||
            data.email_addresses[0].email_address?.split("@")[0],
          lastname: data.last_name || "",
          email: data.email_addresses[0].email_address,
          profileImg: data.profile_image_url,
          accountType: AccountType.BASIC,
          authType: getProvider(
            data.external_accounts.length !== 0
              ? data.external_accounts[0]?.provider
              : "email"
          ),
          username:
            data.external_accounts.length !== 0
              ? data.external_accounts[0].provider === "oauth_github"
                ? data.username?.toLowerCase()
                : null
              : null,
        },
      });

      await clerkClient.users.updateUserMetadata(user.id, {
        publicMetadata: {
          onBoarding: false,
          accountType:"BASIC",
          purchasedTemplates:[]
        },
      });
      return user ? true : false;
    case "user.updated":
      const updatedUser = await prisma.user.update({
        where: {
          id: data.id,
        },
        data: {
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          username: data.username,
          profileImg: data.profile_image_url,
        },
      });
      return updatedUser ? true : false;
  }
  return false;
};
type AuthType = "oauth_github" | "oauth_google" | "email";
const getProvider = (authType: AuthType): SigninType => {
  switch (authType) {
    case "oauth_github":
      return "GITHUB";
    case "oauth_google":
      return "GOOGLE";
    case "email":
      return "EMAIL";
  }
};
