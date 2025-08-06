"use client"
import { Icons } from "../../icons/index"
import { Badge } from "@workspace/ui/components/badge"
import { motion } from "motion/react"

const Skill = ({ label }: { label: string }) => {
  const Icon = Icons[label.toLowerCase() as keyof typeof Icons]
  const hasIcon = Icon !== undefined
  
  // If no icon exists, render simple text badge
  if (!hasIcon) {
    return (
      <div className="flex gap-2 items-center">
        <Badge 
          variant={"outline"} 
          className="rounded-sm flex items-center justify-center py-1.5"
        >
          <span className="text-sm px-2">{label}</span>
        </Badge>
      </div>
    )
  }
  
  // If icon exists, render with hover animation
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <motion.div
        className="relative"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <Badge 
          variant={"outline"} 
          className="rounded-sm flex items-center justify-center overflow-hidden py-1.5 [&>svg]:size-6 "
        >
          <Icon />
          <motion.div
            className="overflow-hidden"
            variants={{
              rest: { width: 0 },
              hover: { width: "auto" }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.span
              className="whitespace-nowrap text-sm pr-2"
              variants={{
                rest: { opacity: 0, width: 0 },
                hover: { opacity: 1, width: 100 }
              }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              {label}
            </motion.span>
          </motion.div>
        </Badge>
      </motion.div>
    </div>
  )
}

export default Skill