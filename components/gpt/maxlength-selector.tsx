"use client"

import { SliderProps } from "@radix-ui/react-slider"

import { OpenAIHyperparameters } from "@/types/gpt"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

interface MaxLengthSelectorProps extends OpenAIHyperparameters {
  defaultValue: SliderProps["defaultValue"]
}

export function MaxLengthSelector({
  defaultValue,
  setState,
  value,
}: MaxLengthSelectorProps) {
  // const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxlength">Maximum Length</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-slate-600 hover:border-slate-100 dark:text-slate-400 dark:hover:border-slate-800">
                {value}
              </span>
            </div>
            <Slider
              id="maxlength"
              max={4000}
              defaultValue={value}
              step={10}
              onValueChange={setState}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Maximum Length"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          The maximum number of tokens to generate. Requests can use up to 2,048
          or 4,000 tokens, shared between prompt and completion. The exact limit
          varies by model.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
