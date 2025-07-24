import prisma, { Education, Experience, Prisma, Repo } from "@workspace/db";
import { deleteObject } from "./S3.service";

export const getUserData = async (userId: string): Promise<any> => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      repos: true,
      experiences: true,
      educations: true,
    },
  });
};

export const updateUserData = async (
  userId: string,
  data: any
): Promise<boolean> => {
  try {
    let res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: data,
    });
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const createOrUpdateRepo = async (
  userId: string,
  data: Repo
): Promise<boolean> => {
  try {
    let res = await prisma.repo.upsert({
      where: {
        // userId: userId,
        id: data.id,
      },
      update: {
        ...data,
        languages: data.languages as Prisma.InputJsonValue,
      },
      create: {
        ...data,
        userId: userId,
        languages: data.languages as Prisma.InputJsonValue,
      },
    });
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const deleteRepo = async (
  userId: string,
  repoId: string
): Promise<boolean> => {
  try {
    let res = await prisma.repo.delete({
      where: {
        userId: userId,
        id: repoId,
      },
    });
    await deleteObject(userId,"Projects",repoId)
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const createOrUpdateExperience = async (
  userId: string,
  data: Experience
): Promise<boolean> => {
  try {
    let res = await prisma.experience.upsert({
      where: {
        // userId: userId,
        id: data.id,
      },
      update: data,
      create: {
        ...data,
        userId: userId,
      },
    });
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteExperience = async (
  userId: string,
  experienceId: string
): Promise<boolean> => {
  try {
    let res = await prisma.experience.delete({
      where: {
        userId: userId,
        id: experienceId,
      },
    });
    await deleteObject(userId,"Experience",experienceId)
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const createOrUpdateEducation = async (
  userId: string,
  data: Education
): Promise<boolean> => {
  try {
    let res = await prisma.education.upsert({
      where: {
        // userId: userId,
        id: data.id,
      },
      update: {...data},
      create: {
        ...data,
        userId: userId,
      },
    });
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const deleteEducation = async (
  userId: string,
  educationId: string
): Promise<boolean> => {
  try {
    let res = await prisma.education.delete({
      where: {
        userId: userId,
        id: educationId,
      },
    });
    await deleteObject(userId,"Education",educationId)
    return res ? true : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};
