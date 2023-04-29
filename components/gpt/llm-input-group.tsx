import { useEffect, useState } from "react"

import { LLMInputGroupProps } from "@/types/gpt"
import { getCompletionStream, getLLMResponse } from "@/lib/handlers"
import { LLMInputForm } from "./llm-input-form"

export const LLMInputGroup = ({
  setChatlog,
  chatlog,
  currentModel,
  temperature = [0.56],
  maxTokens = [256],
  topP = [1],
  frequencyPenalty = [0],
  presencePenalty = [0],
}: LLMInputGroupProps) => {
  // const [currentModel, setCurrentModel] = useState("");
  const [prompt, setPrompt] = useState("")
  // loading indicator for fetch calls.
  const [isLoading, setIsLoading] = useState(false)

  const handleClear = async (e: any) => {
    setChatlog([])
    setPrompt("")
  }

  const handleSubmit = async (e: any) => {
    //create prompt + current chalog
    setIsLoading(true)

    let newChatInput = {
      user: "USER",
      prompt: prompt,
    }

    let newChatlogWithChatInput = [...chatlog, newChatInput]

    console.log(
      "🚀 ~ file: llm-input-group.tsx:26 ~ handleSubmit ~ newChatlogWithChatInput:",
      newChatlogWithChatInput
    )

    // set the chatlog with prompt
    setChatlog(newChatlogWithChatInput)
    //and get completions.
    console.log(
      "🚀 ~ file: llm-input-group.tsx:16 ~ currentModel:",
      currentModel
    )

    switch (currentModel) {
      case `api/openapiv2`:
        await getLLMResponse({
          newChatlogWithChatInput,
          currentModel,
          setChatlog,
          setPrompt,
          temperature,
          maxTokens,
          topP,
          frequencyPenalty,
          presencePenalty,
          setIsLoading,
        })
        setPrompt("")
        break

      case `api/openapi`:
        break

      default:
        await getCompletionStream({
          newChatlogWithChatInput,
          currentModel,
          setChatlog,
          setPrompt,
          temperature,
          maxTokens,
          topP,
          frequencyPenalty,
          presencePenalty,
          setIsLoading,
        })
        setPrompt("")
        break
    }

    console.log("🚀 ~ file: llm-input-group.tsx:18 ~ prompt:", prompt)
  }

  // Enter as submit.
  useEffect(() => {
    //  handle cmd+enter key press
    const keyDownHandler = (event: any) => {
      if (event.metaKey && event.key === "Enter") {
        // event.preventDefault();
        // 👇️ call submit function here
        // setIsLoading(true)
        handleSubmit(event)
        // setPrompt("")
      }
    }
    document.addEventListener("keydown", keyDownHandler)
    return () => {
      document.removeEventListener("keydown", keyDownHandler)
    }
  }, [prompt])

  return (
    <div className="items-start">
      <LLMInputForm
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
        isLoading={isLoading}
        prompt={prompt}
      />
      {/* <LLMModelSelect setCurrentModel={setCurrentModel} /> */}
    </div>
  )
}
