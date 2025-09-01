import HeroSection from "@/components/Home/Herosection"
import GridView from "@/components/Home/GridView"
import DevicesSection from "@/components/Home/DevicesSection"
import CTASection from "@/components/Home/CTASection"
import ContactSection from "@/components/Home/ContactSection"
import Pricing from "@/components/Home/Pricing"
export default function Page() {
  return (
    <div className="flex flex-col">
    <HeroSection/>
    <GridView/>
    <DevicesSection/>
    <Pricing/>
    <ContactSection/>
    <CTASection/>
    </div>
  )
}
