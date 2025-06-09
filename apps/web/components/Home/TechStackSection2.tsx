"use client";
import React from 'react'
import { AnimatedList,AnimatedListItem } from '@workspace/ui/components/magicui/animated-list'
import Image from 'next/image'
import { cn } from '@workspace/ui/lib/utils';
import { AnimatedShinyText } from '@workspace/ui/components/magicui/animated-shiny-text';
const images = {
        github : <Image src="/icons/github.png"className='invert' alt='github' height={50}  width={50}/ >,
        magicui: <Image src="/icons/magicui.png" alt='magicui' height={50}  width={50}/ >,
        shadcn:<Image src="/icons/shadcn.png" alt='shadcn' height={50}  width={50}/ >,
        turborepo:<Image src="/icons/turborepo.png" alt='turborepo' height={50}  width={50}/ >,
        nextjs:<Image src="/icons/nextjs.png" alt='nextjs' height={50}  width={50}/ >,
        prisma:<Image src="/icons/prisma.png" alt='prisma' height={50}  width={50}/ >,
        clerk:<Image src="/icons/clerk.png" alt='clerk' height={50}  width={50}/ >
}

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  // color: string;
  // time: string;
}

let notifications:Item[] = [
  {
    name: "Github",
    icon: <Image src="/icons/github.png" className="invert" alt="github" height={50} width={50} />,
    description: "User Data",
  },
  {
    name: "Turborepo",
    icon: <Image src="/icons/turborepo.png" alt="turborepo" height={50} width={50} />,
    description: "Monorepo build system",
  },
  {
    name: "NextJs",
    icon: <Image src="/icons/nextjs.png" alt="nextjs" height={50} width={50} />,
    description: "React framework for web apps",
  },
  {
    name: "Clerk",
    icon: <Image src="/icons/clerk.png" alt="clerk" height={50} width={50} />,
    description: "Authentication & user management",
  },
  {
    name: "Prisma",
    icon: <Image src="/icons/prisma.png" alt="prisma" height={50} width={50} />,
    description: "Modern database ORM",
  },
  {
    name: "MagicUi",
    icon: <Image src="/icons/magicui.png" alt="magicui" height={50} width={50} />,
    description: "UI components with animations",
  },
  {
    name: "ShadcnUi",
    icon: <Image src="/icons/shadcn.png" alt="shadcnui" height={50} width={50} />,
    description: "Accessible UI built on Radix",
  },
]
;

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const TechStackSection2=({
  className,
}: {
  className?: string;
})=> {
  return (
    <div
      className={cn(
        "relative p-8 flex flex-col h-90 w-full flex-col overflow-hidden",
        className,
      )}
    > 
    <h2 className='w-full text-left text-2xl z-10 mb-3 '>Powered By</h2>
      {/* <AnimatedShinyText className='z-10'>
      Using industry-standard tools like Next.js, Prisma, and Vercel to ensure speed, reliability, and scalability.
      </AnimatedShinyText> */}

      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
export default TechStackSection2;

