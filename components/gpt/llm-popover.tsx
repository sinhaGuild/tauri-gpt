"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"
import { Settings2 } from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function LLMPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size={"lg"} className="w-10 p-0 rounded-full">
          <Settings2 className="w-10 h-10 bg-red-200" />
          <span className="sr-only">Open popover</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid items-center grid-cols-3 gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="h-8 col-span-2"
              />
            </div>
            <div className="grid items-center grid-cols-3 gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="h-8 col-span-2"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
