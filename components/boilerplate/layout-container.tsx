import { cn } from "@/lib/utils"
import { StarsIllustration } from "./stars-illustration"

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "max-w-[200rem] w-full pb-10 mx-auto",
        className ? className : ""
      )}
    >
      {children}
      <StarsIllustration classname="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
    </div>
    // <div className={`${"w-[140rem] mx-auto"} ${className}`}>{children}</div>
  )
}
