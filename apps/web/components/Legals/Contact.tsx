"use client"
import React from "react";
import { motion } from "motion/react";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { config } from "@/config";

const Contact = () => {
  return (
    <div className="flex w-full gap-5 items-center justify-center my-5">
      <motion.div
        variants={ButtonVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link target="_blank" href={config.links.X}>
          <Button
            className="h-18 w-18 rounded-full cursor-pointer p-0"
            variant={"outline"}
            size={"default"}
          >
            <div className="bg-white rounded-2xl">
              <Image
                src={"/icons/x.png"}
                height={50}
                width={50}
                alt="X"
                className=""
              />
            </div>
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={ButtonVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link target="_blank" href={config.links.LINKEDIN}>
          <Button
            className="h-18 w-18 rounded-full cursor-pointer"
            variant={"outline"}
            size={"default"}
          >
            <Linkedin className="size-10 " />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
const ButtonVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};
