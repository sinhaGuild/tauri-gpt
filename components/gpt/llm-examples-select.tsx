import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "components/ui/select"

import { LLMExampleSelectProps } from "@/types/gpt"
import { LLMExamples, examples } from "@/lib/constants/presets"

export const LLMExamplesSelect = ({ setPrompt }: LLMExampleSelectProps) => {
  const handleValueChange = (value: any) => {
    // notify(`${value}`);
    setPrompt(`${value}`)
  }

  return (
    <Select onValueChange={(value) => handleValueChange(value)}>
      {/* <Select onValueChange={(value) => setCurrentModel(`${value}`)}> */}
      <SelectTrigger className="w-[240px] flex-1 justify-between">
        <SelectValue
          placeholder="Load from sample presets.."
          aria-label="Load Presets"
        />
      </SelectTrigger>
      {/* <SelectSeparator /> */}
      <ExampleSelectComponent llmExamples={examples} />
    </Select>
  )
}

const ExampleSelectComponent = ({
  llmExamples,
}: {
  llmExamples: LLMExamples[]
}) => {
  return (
    <SelectContent>
      {llmExamples.map(({ label, items }) => {
        return (
          <div key={label}>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel key={label}>{label}</SelectLabel>
              {items.map(({ id, name, disabled, value }) => {
                if (!disabled) {
                  return (
                    <div key={`${id}-${name}`}>
                      <SelectItem value={value} key={`${id}`}>
                        {name}
                      </SelectItem>
                    </div>
                  )
                } else {
                  return (
                    <>
                      <SelectItem value={value} key={`${id}`} disabled>
                        {name}
                      </SelectItem>
                    </>
                  )
                }
              })}
            </SelectGroup>
          </div>
        )
      })}
    </SelectContent>
  )
}
