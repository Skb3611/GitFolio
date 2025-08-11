"use client"
import { getIconComponent, Icons } from "@workspace/ui/icons"

import { Badge } from "@workspace/ui/components/badge"
import { motion } from "motion/react"

interface SkillProps {
  label: string
  animate?: boolean
}

const Skill = ({ label, animate = true }: SkillProps) => {
  const Icon = getIconComponent(label)
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
  
  // Static version without animation
  if (!animate) {
    return (
      <div className="flex gap-2 items-center cursor-pointer">
        <Badge 
          variant={"outline"} 
          className="rounded-sm flex items-center justify-center py-1.5 [&>svg]:size-6 gap-2"
        >
          {Icon && <Icon />}
          <span className="text-xs sm:text-sm">{label}</span>
        </Badge>
      </div>
    )
  }
  
  // Animated version with hover effects
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
          {Icon && <Icon />}
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