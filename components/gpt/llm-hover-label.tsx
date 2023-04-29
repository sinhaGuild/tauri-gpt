import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Separator } from "../ui/separator"

export const LLMHoverLabel = ({
  title,
  description,
}: {
  title: string
  description: React.ReactNode
}) => {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <span className="py-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {title}
        </span>
      </HoverCardTrigger>
      <Separator className="mb-4" />
      <HoverCardContent className="w-[320px] text-sm" side="left">
        {description}
      </HoverCardContent>
    </HoverCard>
  )
}
