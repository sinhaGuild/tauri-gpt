import { Dispatch, SetStateAction } from "react"

export interface LLMInputGroupProps {
  setChatlog: Dispatch<SetStateAction<LLMMessageProps[]>>
  chatlog: LLMMessageProps[]
  currentModel: string
  temperature?: number[]
  maxTokens?: number[]
  topP?: number[]
  frequencyPenalty?: number[]
  presencePenalty?: number[]
  example?: string
}

export interface LLMModelSelectProps {
  setCurrentModel: Dispatch<SetStateAction<string>>
  modelsData: SelectSchema[]
  defaultValue?: string
}
export interface LLMExampleSelectProps {
  setPrompt: Dispatch<SetStateAction<string>>
}

export interface LLMInputFormProps {
  currentModel?: string
  prompt?: string
  handleSubmit: (e: any) => Promise<void>
  handleClear: (e: any) => Promise<void>
  setPrompt: Dispatch<SetStateAction<string>>
  isLoading?: boolean
}

export interface GetLLMResponseProps {
  newChatlogWithChatInput: LLMMessageProps[]
  currentModel: string
  setChatlog: Dispatch<SetStateAction<LLMMessageProps[]>>
  setPrompt: Dispatch<SetStateAction<string>>
  temperature?: number[]
  maxTokens?: number[]
  topP?: number[]
  frequencyPenalty?: number[]
  presencePenalty?: number[]
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export interface LLMMessageProps {
  user: string
  response?: string
  prompt?: string
}

export interface SelectSchema {
  label: string
  items: {
    value: string // endpoint url
    title: string // displayed content in the list
    disabled?: boolean
    description?: string // hover-content
    strengths?: string // hover-content
  }[]
}

export interface OpenAIHyperparameters {
  setState: Dispatch<SetStateAction<number[]>>
  value: number[]
}

export interface LLMInputGroupProps {
  setChatlog: Dispatch<SetStateAction<LLMMessageProps[]>>
  chatlog: LLMMessageProps[]
  currentModel: string
  temperature?: number[]
  maxTokens?: number[]
  topP?: number[]
  frequencyPenalty?: number[]
  presencePenalty?: number[]
  example?: string
}

export interface LLMModelSelectProps {
  setCurrentModel: Dispatch<SetStateAction<string>>
  modelsData: SelectSchema[]
  defaultValue?: string
}
export interface LLMExampleSelectProps {
  setPrompt: Dispatch<SetStateAction<string>>
}

export interface LLMInputFormProps {
  currentModel?: string
  prompt?: string
  handleSubmit: (e: any) => Promise<void>
  handleClear: (e: any) => Promise<void>
  setPrompt: Dispatch<SetStateAction<string>>
  isLoading?: boolean
}

export interface GetLLMResponseProps {
  newChatlogWithChatInput: LLMMessageProps[]
  currentModel: string
  setChatlog: Dispatch<SetStateAction<LLMMessageProps[]>>
  setPrompt: Dispatch<SetStateAction<string>>
  temperature?: number[]
  maxTokens?: number[]
  topP?: number[]
  frequencyPenalty?: number[]
  presencePenalty?: number[]
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export interface LLMMessageProps {
  user: string
  response?: string
  prompt?: string
}

export interface SelectSchema {
  label: string
  items: {
    value: string // endpoint url
    title: string // displayed content in the list
    disabled?: boolean
    description?: string // hover-content
    strengths?: string // hover-content
  }[]
}

/** Interfaces for streaming endpoints */

export type OAIChatGPTAgentRole = "user" | "system"

export interface OAIChatGPTMessage {
  role: OAIChatGPTAgentRole
  content: string
}

export interface OpenAIStreamPayload {
  model: string
  messages: OAIChatGPTMessage[]
  temperature: number
  top_p: number
  frequency_penalty: number
  presence_penalty: number
  max_tokens: number
  stream: boolean
  n: number
}

export interface OAIStreamRequestData {
  prompt: string
  temperature?: number
  topP?: number
  frequencyPenalty?: number
  presencePenalty?: number
  maxTokens?: number
}
