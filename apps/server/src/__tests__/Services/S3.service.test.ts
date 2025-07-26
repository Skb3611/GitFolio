import { generatePreSignedURL } from "../../Services/S3.service";
describe('S3 Service', () => {
  it("It should get a Pre-SignedURl",async()=>{
    const res = await generatePreSignedURL("123","Personal Information","test.jpg")
    expect(res).toBeDefined()
    expect(res).not.toBeNull()
    console.log(res)
  })
})
