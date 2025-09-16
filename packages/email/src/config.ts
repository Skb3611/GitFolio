import dotnev from "dotenv"

dotnev.config()
export const config = {
    social_links:{
        x:"https://x.com/SKB3611",
        linkedin:"https://www.linkedin.com/in/shubham-bhilare-0a694a309/",
        github:"https://github.com/skb3611",
        peerlist:"https://peerlist.io/skb3611"
    },
    URLS:{
        site_url:"https://gitfolio.in",
        renderer_url:"https://portfolio.gitfolio.in"
    },
    RESEND_API_KEY:process.env.RESEND_API_KEY
}