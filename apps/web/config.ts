const SERVER_ENDPOOINT = process.env.NEXT_PUBLIC_SERVER_ENDPOINT?? "http://localhost:8080";

export const config={
    renderer_endpoint:process.env.RENDERER_ENDPOINT,
    server_endpoints:{
        BASE_URL:SERVER_ENDPOOINT,
        GET_USER_DATA:`${SERVER_ENDPOOINT}/api/v1/dashboard`,
        UPDATE_USER_DATA:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/update`,
        UPDATE_REPO:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/repo/update`,
        DELETE_REPO:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/repo/delete`,
        UPDATE_EDUCATION:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/education/update`,
        DELETE_EDUCATION:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/education/delete`,
        UPDATE_EXPERIENCE:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/experience/update`,
        DELETE_EXPERIENCE:`${SERVER_ENDPOOINT}/api/v1/dashboard/user/experience/delete`,
        GET_PRESIGNED_URL: `${SERVER_ENDPOOINT}/api/v1/s3/generatePreSignedURL`
    },
    links:{
        LINKEDIN:"https://www.linkedin.com/in/shubham-bhilare-0a694a309/",
        X:"https://x.com/SKB3611",
        GITHUB:"https://github.com/Skb3611"
    }
}