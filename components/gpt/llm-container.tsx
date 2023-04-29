import { motion } from "framer-motion"

import {
  motionVariantForStaggerChild,
  motionVariantForStaggerParent,
} from "@/lib/constants/motion-variants"
import { cn } from "@/lib/utils"

interface LLMContainerProps {
  children?: React.ReactNode
  className?: string
  childClassName?: string
}

// w-[80vw] max-w-full grid-cols-1
export const LLMParentContainer = ({
  children,
  className,
}: LLMContainerProps) => {
  return (
    <motion.div
      variants={motionVariantForStaggerParent}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={cn(
        "llm-parent-container",
        "z-40 chat-container grid",
        "gap-4 px-7",
        `${className}`
      )}
    >
      {children}
    </motion.div>
  )
}

//h-[70vh] or h-[10vh]
export const LLMChildContainer = ({
  children,
  className,
  childClassName,
}: LLMContainerProps) => {
  return (
    <motion.section
      variants={motionVariantForStaggerChild}
      className={cn(
        `llm-${childClassName}-container`,
        "w-full px-7 py-4 mb-7",
        `${className}`
      )}
    >
      {children}
    </motion.section>
  )
}
