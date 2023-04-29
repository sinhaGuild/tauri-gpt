"use client"

import { SliderProps } from "@radix-ui/react-slider"

import { OpenAIHyperparameters } from "@/types/gpt"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

interface TopPSelectorProps extends OpenAIHyperparameters {
  defaultValue: SliderProps["defaultValue"]
}

export function TopPSelector({
  defaultValue,
  setState,
  value,
}: TopPSelectorProps) {
  // const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="top-p">Top P</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-slate-600 hover:border-slate-100 dark:text-slate-400 dark:hover:border-slate-800">
                {value}
              </span>
            </div>
            <Slider
              id="top-p"
              max={1}
              defaultValue={value}
              step={0.01}
              onValueChange={setState}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Top P"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Control diversity via nucleus sampling: 0.5 means half of all
          likelihood-weighted options are considered.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
