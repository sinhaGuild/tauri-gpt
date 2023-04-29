"use client"

// import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link"
import {
  Aperture,
  Bot,
  CloudCog,
  Home,
  Laptop,
  LogOut,
  Meh,
  Moon,
  ServerCog,
  Sun,
} from "lucide-react"

import { toDarkMode, toLightMode, toSystemMode } from "@/lib/dark-mode"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

const openai_content = (
  <>
    The OpenAI API can be applied to virtually any task that involves
    understanding or generating natural language, code, or images.{" "}
    <br className="hidden md:block" />
    We offer a spectrum of models with different levels of power suitable for
    different tasks, as well as the ability to fine-tune your own custom models.{" "}
    <br className="hidden md:block" />
    These models can be used for everything from content generation to semantic
    search and classification.
  </>
)

export function LLMMenu() {
  // const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Meh className="transition-all scale-100 rotate-0 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          {/* <Meh className="absolute transition-all scale-0 rotate-90 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" /> */}
          <span className="sr-only">Navigation Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        forceMount
        align="end"
        avoidCollisions={true}
        side="bottom"
        className="px-3 py-4 space-y-4 w-96"
        sideOffset={10}
        // alignOffset={-10}
        style={{
          borderRadius: 14,
          width: "20rem",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <DropdownMenuGroup className="home-group">
          <DropdownMenuLabel>
            <Link href="/">Home</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Home className="w-4 h-4 mr-2" />
            <Link href="/">Homepage</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="w-4 h-4 mr-2" />
            <Link href="/api/auth/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="openai-group">
          <DropdownMenuLabel>
            <DropDownHoverCardItem title="Open AI" content={openai_content} />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Bot className="w-4 h-4 mr-2" />
            <Link href="/gptx">GPT-X</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Aperture className="w-4 h-4 mr-2" />
            <Link href="/imageai">DALL-e</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup className="llm-group">
          <DropdownMenuLabel>
            <DropDownHoverCardItem
              title="LLM Agents"
              content={<>To be filled..</>}
            />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <CloudCog className="w-4 h-4 mr-2" />
            <Link href="#">GPT-J Neo</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ServerCog className="w-4 h-4 mr-2" />
            <Link href="/llm">ReACT</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="theme-group">
          <DropdownMenuLabel>
            <DropDownHoverCardItem
              title="Theme"
              content={<>Global Theme Settings.</>}
            />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => toLightMode()}>
            <Sun className="w-4 h-4 mr-2" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toDarkMode()}>
            <Moon className="w-4 h-4 mr-2" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => toSystemMode()}>
            <Laptop className="w-4 h-4 mr-2" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup className="profile-group">
          <DropdownMenuSeparator />
          <DropdownMenuItem
            style={{ alignContent: "end", justifyContent: "center" }}
          >
            {/* <LogOut className="w-4 h-4 mr-2" /> */}
            {/* <UserAvatar user={user} /> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const DropDownHoverCardItem = ({
  title,
  content,
  children,
}: {
  title?: string
  content: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        {title ? title : children}
        {/* {children} */}
      </HoverCardTrigger>
      <HoverCardContent
        className="bg-white shadow-lg dark:bg-black text-primary-text dark:text-primary-text-dark"
        align="start"
        side={"right"}
        sideOffset={60}
        style={{
          borderRadius: 12,
          width: "32em",
        }}
      >
        <div className="grid w-auto gap-2 p-4 ml-auto rounded-2xl">
          <p className="px-2 py-1 font-mono text-lg italic shadow-sm bg-slate-50 rounded-xl dark:bg-slate-700">
            {title}
            {/* Open AI */}
          </p>
          <br />
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {content}
            {/* The OpenAI API can be applied to virtually any task that
                    involves understanding or generating natural language, code,
                    or images. <br className="hidden md:block" />
                    We offer a spectrum of models with different levels of power
                    suitable for different tasks, as well as the ability to
                    fine-tune your own custom models.{" "}
                    <br className="hidden md:block" />
                    These models can be used for everything from content
                    generation to semantic search and classification. */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
