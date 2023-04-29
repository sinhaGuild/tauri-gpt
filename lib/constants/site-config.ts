import { SelectSchema } from "@/types/gpt"

const fpi = `${process.env.FASTAPI_URL}`

export const selectData: SelectSchema[] = [
  {
    label: "Base",
    items: [
      {
        value: `${fpi}/healthcheck`,
        title: "Health Check",
      },
    ],
  },
  {
    label: "Database",
    items: [
      {
        value: `${fpi}/sql`,
        title: "Query SQL Database",
      },
      {
        value: `${fpi}/kb`,
        title: "Custom Knowledgebase",
      },
    ],
  },
  {
    label: "Agents",
    items: [
      {
        value: `${fpi}/agent`,
        title: "Dynamic Reasoning",
      },
      {
        value: `${fpi}/agent/self`,
        title: "Self Questioning",
        disabled: true,
      },
      {
        value: `${fpi}/agent/neg`,
        title: "Negative Regression",
        disabled: true,
      },
      {
        value: `${fpi}/agent/react`,
        title: "ReACT Framework",
      },
      {
        value: `${fpi}/agent/mrkl`,
        title: "MRKL",
      },
      {
        value: `${fpi}/agent/ensemble`,
        title: "Model Ensembling",
        disabled: true,
      },
      {
        value: `${fpi}/agent/ethics`,
        title: "Ethical Reasoning",
      },
      {
        value: `${fpi}/agent/yoda`,
        title: "Ethical Reasoning as Yoda",
      },
    ],
  },
  {
    label: "Chains",
    items: [
      {
        value: `${fpi}/chains`,
        title: "Simple Sequential Chains",
      },
      {
        value: `${fpi}/chains/multi`,
        title: "Multi input/ouput",
        disabled: true,
      },
      {
        value: `${fpi}/chains/mem`,
        title: "Sequences with Memory",
        disabled: true,
      },
      {
        value: `${fpi}/chains/pal`,
        title: "Program Assissted Learning",
      },
    ],
  },
  // {
  //   label: "Chat",
  //   items: [
  //     {
  //       value: `api/openapiv2`,
  //       title: "Open AI",
  //       description: "",
  //     },
  //     {
  //       value: `${fpi}/chat/gptx`,
  //       title: "Conversational GPT",
  //     },
  //     {
  //       value: `${fpi}/chat/zero`,
  //       title: "Zero Shot GPT",
  //       disabled: true,
  //     },
  //   ],
  // },
]
