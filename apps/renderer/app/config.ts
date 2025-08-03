const SERVER_ENDPOOINT = process.env.NEXT_PUBLIC_SERVER_ENDPOINT?? "http://localhost:8080";

export const USERDATA_ENDPOINT =  `${SERVER_ENDPOOINT}/api/v1/renderer`
export const SITE_URL = "https://gitfolio-dev.vercel.app";