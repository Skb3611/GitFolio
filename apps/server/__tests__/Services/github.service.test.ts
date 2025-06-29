import { getUserContributionsGraph, getUserDetails, getUserRepos } from "../../src/Services/github.service";
import dotenv from "dotenv";
describe("Github Service Tests",()=>{
    let token:string ;
    beforeAll(()=>{
        dotenv.config()
        token = process.env.SAMPLE_TOKEN!
    })
    test("Should return user details",async()=>{
        expect(token).toBeDefined()
        if(token){
           let userdetails = await getUserDetails(token)
           expect(userdetails).toBeDefined()
           expect(userdetails).not.toBeFalsy()
        //    console.log(userdetails)

        }
    })
    test("Should return user repos",async()=>{
        expect(token).toBeDefined()
        if(token){
           let userdetails = await getUserRepos(token)
           expect(userdetails).toBeDefined()
           expect(userdetails).not.toBeFalsy()
        //    console.log(userdetails)
        }
    })
    test("Should return user contibutions",async()=>{
        expect(token).toBeDefined()
        if(token){
          let contributions = await getUserContributionsGraph(token,"Skb3611","2023-07-26T06:04:19Z")
          expect(contributions).toBeDefined()
          expect(contributions).not.toBeFalsy()
          expect(contributions.length).toBeGreaterThan(0)
        //   console.log(contributions)
        }
    })
})