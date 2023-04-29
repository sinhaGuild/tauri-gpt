"use client"

import { SliderProps } from "@radix-ui/react-slider"

import { OpenAIHyperparameters } from "@/types/gpt"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

interface FrequencyPenaltyProps extends OpenAIHyperparameters {
  defaultValue: SliderProps["defaultValue"]
}

export function FrequencyPenalty({
  defaultValue,
  setState,
  value,
}: FrequencyPenaltyProps) {
  // const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Frequency Penalty</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-slate-600 hover:border-slate-100 dark:text-slate-400 dark:hover:border-slate-800">
                {value}
              </span>
            </div>
            <Slider
              id="frequency_penalty"
              max={2}
              min={-2}
              defaultValue={value}
              step={0.1}
              onValueChange={setState}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Frequency-Penalty"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Number between -2.0 and 2.0. Positive values penalize new tokens based
          on their existing frequency in the text so far, decreasing the
          model&apos;s likelihood to repeat the same line verbatim.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
