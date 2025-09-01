import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import Maintenance from "@workspace/ui/components/ui/Maintenance";
export default function HomeLayout({children}:{children:React.ReactNode}){
return(
    <>
    {/* <Maintenance/> */}
    <Navbar/>
    {children}
    <Footer/>
    </>
)
}