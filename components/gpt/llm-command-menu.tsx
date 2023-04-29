"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function LLMCommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-100 bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-600 opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <div className="border rounded-lg shadow-md border-slate-100 dark:border-slate-800">
        <div cmdk-root="" className="framer">
          <CommandDialog open={open} onOpenChange={setOpen}>
            <div cmdk-framer-header="">
              <CommandInput
                autoFocus
                placeholder="Type a command or search..."
              />
            </div>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <div cmdk-framer-items="">
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="w-4 h-4 mr-2" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="w-4 h-4 mr-2" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="w-4 h-4 mr-2" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="w-4 h-4 mr-2" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </div>
            </CommandList>
          </CommandDialog>
        </div>
      </div>
    </>
  )
}
