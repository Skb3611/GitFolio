import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";

export default function HomeLayout({children}:{children:React.ReactNode}){
return(
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
)
}