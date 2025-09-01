import prisma from "@workspace/db";
import { onBoardingProcess } from "../../Services/onboarding.service";

describe("OnBoarding Process", () => {
  const userId = "user_31BmJvbnF7ZTMuSZg90HCXMzRRx";
  const userId2 = "test_user_2";
  beforeAll(async () => {
    const user2 = await prisma.user.create({
      data: {
        id: userId2,
        firstname: "test",
        lastname: "user",
        authType: "GOOGLE",
        accountType:"BASIC",
        email: "testuser2@gmail.com",
        profileImg: "",
      },
    });
  });
  it("Fetching Data", async () => {
    const res = await onBoardingProcess(
      "https://github.com/Skb3611/",
      userId,
      "GITHUB"
    );
    const res2 = await onBoardingProcess(
      "https://github.com/Skb3611/",
      userId2,
      "GOOGLE"
    );
    console.log(res, res2);
    expect(res).toEqual(res2);
  });
  // afterAll(async () => {
  //   await prisma.user.deleteMany();
  //   await prisma.repo.deleteMany();
  // });
});
