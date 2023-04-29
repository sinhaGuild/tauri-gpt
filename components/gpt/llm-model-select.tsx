import { LLMModelSelectProps, SelectSchema } from "@/types/gpt"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export const LLMModelSelect = ({
  setCurrentModel,
  modelsData,
  defaultValue,
}: LLMModelSelectProps) => {
  const handleValueChange = (value: any) => {
    // notify(`${value}`);
    setCurrentModel(`${value}`)
  }

  return (
    <Select
      onValueChange={(value) => handleValueChange(value)}
      defaultValue={`${defaultValue}`}
    >
      {/* <Select onValueChange={(value) => setCurrentModel(`${value}`)}> */}
      <SelectTrigger>
        <SelectValue placeholder="Select a Model" />
      </SelectTrigger>
      <SelectComponent selectData={modelsData} />
    </Select>
  )
}

const SelectComponent = ({ selectData }: { selectData: SelectSchema[] }) => {
  return (
    <SelectContent
      side={"bottom"}
      avoidCollisions={true}
      style={{ width: "fit" }}
    >
      {selectData.map(({ label, items }) => {
        return (
          <>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel key={label}>{label}</SelectLabel>
              {items.map(
                ({ value, title, description, strengths, disabled }) => {
                  if (!disabled) {
                    return (
                      <div key={`${value}-${title}`}>
                        <SelectItem value={value} key={`${value}-${title}`}>
                          <SelectItemHoverCard
                            title={title}
                            description={description!}
                            strenghts={strengths!}
                          />
                        </SelectItem>
                      </div>
                    )
                  } else {
                    return (
                      <>
                        <SelectItem value={value} key={title} disabled>
                          <SelectItemHoverCard
                            title={title}
                            description={description!}
                            strenghts={strengths!}
                          />
                        </SelectItem>
                      </>
                    )
                  }
                }
              )}
            </SelectGroup>
          </>
        )
      })}
    </SelectContent>
  )
}

const SelectItemHoverCard = ({
  title,
  description,
  strenghts,
}: {
  title: string
  description: string
  strenghts: string
}) => {
  return (
    <HoverCard openDelay={0.3} closeDelay={0.1}>
      <HoverCardTrigger>{title}</HoverCardTrigger>
      <HoverCardContent
        className="bg-white dark:bg-black text-primary-text dark:text-primary-text-dark"
        side={"left"}
        sideOffset={32}
        style={{
          marginTop: 20,
          borderRadius: 12,
          width: "32em",
        }}
      >
        <div className="grid w-auto gap-2 p-4 ml-auto rounded-2xl">
          <p className="px-2 py-1 font-mono text-lg italic shadow-sm bg-slate-50 rounded-xl dark:bg-slate-700">
            {title}
          </p>
          <br />
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {description}
          </div>

          <div className="grid gap-2 py-2">
            <p className="font-bold tracking-widest uppercase">Strengths</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {strenghts}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
