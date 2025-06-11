import Footer from "@/components/Footer/Footer";
import React from "react";

export default async function LegalsLayout({children}:{children:React.ReactNode}){
    return(
        <>
        {children}
        <Footer/>
        </>
    )
}