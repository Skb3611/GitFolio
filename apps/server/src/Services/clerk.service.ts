import prisma from "@workspace/db";
import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({secretKey:process.env.CLERK_SECRET_KEY});

export const processClerkWebhook = async (event: any):Promise<boolean> => {
  const { data, type } = event;
  switch (type) {
    case "user.created":
      const token = await getUserAccessToken(data.id)
      const user = await prisma.user.create({
        data: {
          id: data.id,
          email: data.email_addresses[0].email_address,
          firstname: data.first_name,
          lastname: data.last_name,
          username: data.username,
          profileImg: data.profile_image_url,
        },
      });
      return user?true:false;
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
      return updatedUser?true:false;
  }
  return false;
};

export const getUserAccessToken =async (userId: string):Promise<false|string|undefined> =>{
  try{
    const token = clerkClient.users.getUserOauthAccessToken(userId,"github")
    return (await token).data[0]?.token
  }catch(e){
    console.log(e)
    return false
  }
}

