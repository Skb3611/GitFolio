import { JsonValue } from "../../../../../packages/db/dist/generated/prisma/internal/prismaNamespace";
import {
  createOrUpdateEducation,
  createOrUpdateExperience,
  createOrUpdateRepo,
  deleteEducation,
  deleteExperience,
  deleteRepo,
  getUserDataById,
  updateUserData,
} from "../../Services/dashboard.service";
import { Education, Experience, Repo } from "@workspace/db";
describe("Dashboard Service", () => {
  const USERNAME = "bb321443-9c96-4038-8bea-1184d532bc36";
  it("Should return user data", async () => {
    const data = await getUserDataById(USERNAME);
    expect(data).toBeDefined();
  });
  it("Should update user data-name", async () => {
    const data = await updateUserData(USERNAME, {
      firstname: "SKB",
    });
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
  });
  it("Should update user data-languages", async () => {
    const data = await updateUserData(USERNAME, {
      socialAccounts: {
        github: "https://github.com.skb",
      },
    });
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
    console.log(data);
  });
  it("Should update user data-skills", async () => {
    const data = await updateUserData(USERNAME, {
      skills: ["Node.js", "React.js", "Express.js", "TypeScript"],
    });
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
    console.log(data);
  });
  it("Should Add a repo", async () => {
    const repo: Repo = {
      isIncluded: true,
      isPinned: true,
      id: "1",
      name: "Test",
      description: "Test",
      topics: ["Test", "Test2"],
      thumbnail: "",
      repoLink: "",
      liveLink: "",
      languages: {
        "Node.js": 10,
        "React.js": 10,
        "Express.js": 10,
      } as JsonValue,
      stars: 10,
      forks: 10,
      deployments: 0,
      created_at: new Date(),
      updated_at: new Date(),
      pushed_at: new Date(),
      userId: USERNAME,
    };
    const data = await createOrUpdateRepo(USERNAME, repo);
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
    console.log(data);
  });
  it("Should update a repo", async () => {
    const repo: Repo = {
      isIncluded: true,
      isPinned: true,
      id: "1",
      name: "Test Updated",
      description: "Test Updated",
      topics: ["Test", "Test2", "Test3"],
      thumbnail: "",
      repoLink: "",
      liveLink: "",
      languages: {
        "Node.js": 10,
        "React.js": 10,
        "Express.js": 10,
      } as JsonValue,
      stars: 10,
      forks: 10,
      deployments: 0,
      created_at: new Date(),
      updated_at: new Date(),
      pushed_at: new Date(),
      userId: USERNAME,
    };
    const data = await createOrUpdateRepo(USERNAME, repo);
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
    console.log(data);
  });
  it("Should delete a repo", async () => {
    const data = await deleteRepo(
      USERNAME,
      "70b11ec3-ca32-49f0-9833-6d922dc74d07"
    );
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
    console.log(data);
  });
  it("Should create a Education entry", async () => {
    const data: Education = {
      id: "1",
      institution: "Test",
      end_date: "20xx",
      start_date: "20xx",
      title: "Test added",
      logo: "",
      description: "Test",
      userId: USERNAME,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const res = await createOrUpdateEducation(USERNAME, data);
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
  it("Should update a Education entry", async () => {
    const data: Education = {
      id: "1",
      institution: "Test Updated",
      end_date: "20xx",
      start_date: "20xx",
      title: "Test added updated",
      logo: "",
      description: "Test Updated",
      userId: USERNAME,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const res = await createOrUpdateEducation(USERNAME, data);
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
  it("Should delete a Education entry", async () => {
    const res = await deleteEducation(
      USERNAME,
      "292afb23-9de2-48b9-8998-4af57a631001"
    );
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
  it("Should add a Experience entry", async () => {
    const data: Experience = {
      id: "1",
      company: "Test company",
      role: "Test role",
      end_date: "20xx",
      start_date: "20xx",
      logo: "",
      description: "Test",
      userId: USERNAME,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const res = await createOrUpdateExperience(USERNAME, data);
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
  it("Should update a Experience entry", async () => {
    const data: Experience = {
      id: "1",
      company: "Test company updated",
      role: "Test role updated",
      end_date: "20xx",
      start_date: "20xx",
      logo: "",
      description: "Test Updated",
      userId: USERNAME,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const res = await createOrUpdateExperience(USERNAME, data);
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
  it("Should delete a Experience entry", async () => {
    const res = await deleteExperience(
      USERNAME,
      "067097f0-18f1-4494-9bc6-34c2e4d7f1e9"
    );
    expect(res).toBeDefined();
    expect(res).toBeTruthy();
    console.log(res);
  });
});
