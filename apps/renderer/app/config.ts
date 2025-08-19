const SERVER_ENDPOOINT = process.env.NEXT_PUBLIC_SERVER_ENDPOINT?? "http://localhost:8080";

export const USERDATA_ENDPOINT =  `${SERVER_ENDPOOINT}/api/v1/renderer`
export const USER_IMAGE_ENDPOINT =`${SERVER_ENDPOOINT}/api/v1/renderer/image`
export const SITE_URL = "https://gitfolio.in";
export const BASE_URL ="https://portfolio.gitfolio.in"
