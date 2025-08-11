"use client"
import NavbarComponent from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { DummyData } from "../dummyData";
import { DATA } from "@workspace/types";
const template = ({data=DummyData}:{data?:DATA}) => {
  return (
    <div className="  dark:bg-neutral-950 bg-neutral-100">
      <div className="relative sm:max-w-4xl w-full mx-auto min-h-screen dark:bg-neutral-900 bg-white px-4 sm:px-8">
        <div className="absolute top-0 left-0 h-full w-4 md:w-8 border-x  border-x-[rgba(10,10,10,0.05)]  dark:border-x-[rgba(255,255,255,0.05)] bg-[image:repeating-linear-gradient(315deg,_rgba(10,10,10,0.05)_0,_rgba(10,10,10,0.05)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgba(255,255,255,0.05)_0,_rgba(255,255,255,0.05)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div>
          <NavbarComponent name={data.personalInfo.full_name} links={data.socialLinks} profileImg={data.personalInfo.profileImg}/>
          <Main data={data} />
          <Footer />
        </div>
        <div className="absolute top-0 right-0 h-full w-4 md:w-8  border-x  border-x-[rgba(10,10,10,0.05)]  dark:border-x-[rgba(255,255,255,0.05)]  bg-[image:repeating-linear-gradient(315deg,_rgba(10,10,10,0.05)_0,_rgba(10,10,10,0.05)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgba(255,255,255,0.05)_0,_rgba(255,255,255,0.05)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      </div>
    </div>
  );
};

export default template;
