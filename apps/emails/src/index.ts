import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Resend } from "resend"
import {rednerWelcomeEmail,renderOnBoardingEmail,renderTemplateActivationReminderEmail} from "@workspace/email"
dotenv.config()
const resend = new Resend(process.env.RESEND_API_KEY)
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
    let a = await resend.emails.send({
        from:"GitFolio <notify@updates.gitfolio.in>",
        to:"dhumalomkar233@gmail.com",
        subject:"Welcome Email",
        html: await renderTemplateActivationReminderEmail("Omkar")
    })
res.send(a)
})

app.listen(8000,()=>console.log("App running"))