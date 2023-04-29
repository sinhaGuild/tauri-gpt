import { SelectSchema } from "@/types/gpt"

const fpi = `${process.env.FASTAPI_URL}`

export const oaiModelsData: SelectSchema[] = [
  {
    label: "GPT",
    items: [
      {
        value: `api/openapiv2`,
        title: "text-da-vinci-003",
        description:
          "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
        strengths:
          "Complex intent, cause and effect, creative generation, search, summarization for audience",
      },
      {
        value: `api/openapi`,
        title: "text-da-vinci-002",
        description:
          "GPT-2 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
        strengths:
          "Complex intent, cause and effect, creative generation, search, summarization for audience",
      },
      {
        value: `api/openaisse`,
        title: "gpt-3.5-turbo",
        description:
          "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration.",
        strengths:
          "Complex intent, cause and effect, creative generation, search, summarization for audience",
        // disabled: true,
      },
      {
        value: `${fpi}/chat/zero`,
        title: "gpt-4",
        disabled: true,
      },
    ],
  },
  {
    label: "Codex",
    items: [
      {
        value: `api/codex`,
        title: "code-da-vinci-002",
        description:
          "The Codex models are descendants of our GPT-3 models that can understand and generate code. Their training data contains both natural language and billions of lines of public code from GitHub",
        strengths:
          "Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.",
      },
      {
        value: `api/cushman`,
        title: "code-cushman-001",
        description:
          "Almost as capable as Davinci Codex, but slightly faster. This speed advantage may make it preferable for real-time applications.",
        strengths:
          "Complex intent, cause and effect, creative generation, search, summarization for audience",
        disabled: true,
      },
    ],
  },
]
