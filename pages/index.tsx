// import { useUser } from "@auth0/nextjs-auth0/client";

import {
  FrequencyPenalty,
  LLMChildContainer,
  LLMHoverLabel,
  LLMInputGroup,
  LLMMessagesGroup,
  LLMModelSelect,
  LLMParentContainer,
  MaxLengthSelector,
  PresencePenalty,
  TemperatureSelector,
  TopPSelector,
} from "components/gpt"
import { oaiModelsData } from "lib/constants"
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { LLMMessageProps } from "types/gpt"

import { Container } from "@/components/boilerplate"
import { RIcons } from "@/components/boilerplate/icons-radix"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LLMPage() {
  const BASE_MODEL = "api/openaisse"
  // const { user } = useUser();
  const [chatlog, setChatlog] = useState<LLMMessageProps[]>([])
  const [currentModel, setCurrentModel] = useState(BASE_MODEL)
  // options
  const [temperature, setTemperature] = useState([0.56])
  const [maxTokens, setMaxTokens] = useState([256])
  const [topP, setTopP] = useState([0.9])
  const [frequencyPenalty, setFrequencyPenalty] = useState([0])
  const [presencePenalty, setPresencePenalty] = useState([0])
  const [pMenu, setPMenu] = useState(true)

  // console.log(`temperature:${temperature}`);

  // if (user) {
  return (
    <Container>
      {/* <DynamicCustomTitleBar /> */}
      <Tabs defaultValue="gpt">
        <div className="grid items-center grid-cols-1">
          <LLMParentContainer className="grid-cols-6 gap-1">
            <LLMChildContainer
              className="h-full col-span-2"
              childClassName="input"
            >
              <LLMInputGroup
                setChatlog={setChatlog}
                chatlog={chatlog}
                currentModel={currentModel}
                temperature={temperature}
                maxTokens={maxTokens}
                topP={topP}
                frequencyPenalty={frequencyPenalty}
                presencePenalty={presencePenalty}
              />
            </LLMChildContainer>

            <LLMChildContainer
              className="h-full col-span-3 border border-slate-300 dark:border-slate-700 rounded-xl"
              childClassName="messages"
            >
              <TabsContent value="gpt" className="p-0 mt-0 border-0">
                <LLMMessagesGroup chatlog={chatlog} />
              </TabsContent>
              <TabsContent value="dalle" className="p-0 mt-0 border-0">
                {/* <LLMMessagesGroup chatlog={chatlog} /> */}
                dalle content
              </TabsContent>
              {/* <LLMMessagesGroup chatlog={chatlog} user={user} /> */}
            </LLMChildContainer>

            <LLMChildContainer className="flex-col h-full col-span-1 space-y-4 sm:flex">
              <div className="grid">
                <LLMHoverLabel
                  title="Mode"
                  description="Choose the interface that best suits your task. You can
                provide: a simple prompt for a transformer to insert or
                complete, or some text with instructions to generate images
                from."
                />
                <TabsList className="grid w-48 grid-cols-2">
                  <TabsTrigger value="gpt">
                    <span className="sr-only">GPT</span>
                    <RIcons.gpt className="w-5 h-5" />
                  </TabsTrigger>
                  <TabsTrigger value="dalle">
                    <span className="sr-only">Dalle</span>
                    <RIcons.dalle className="w-5 h-5" />
                  </TabsTrigger>
                </TabsList>
              </div>
              <LLMHoverLabel
                title="Model"
                description="Choose from the available list of models. Hover over the
              models to understand proficiencies and completion dynamics.
              Currently only NLPT and ViT based transformers are supported."
              />
              <LLMModelSelect
                setCurrentModel={setCurrentModel}
                modelsData={oaiModelsData}
                defaultValue={BASE_MODEL}
              />

              <Collapsible
                className="w-full space-y-2"
                open={pMenu}
                onOpenChange={setPMenu}
              >
                <div className="flex items-center justify-between">
                  <div className="grid w-full grid-cols-1 gap-1">
                    <LLMHoverLabel
                      title="Hyperparameters"
                      description="Tune Randomness, diversity, over constrainted token size and with established penalties for repeat tokens or highly occuring ones."
                    />
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-0 w-9">
                      <ChevronsUpDown className="w-5 h-5 mb-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <TemperatureSelector
                    defaultValue={[0.56]}
                    setState={setTemperature}
                    value={temperature}
                  />
                  <MaxLengthSelector
                    defaultValue={[256]}
                    setState={setMaxTokens}
                    value={maxTokens}
                  />
                  <TopPSelector
                    defaultValue={[0.9]}
                    setState={setTopP}
                    value={topP}
                  />
                  <FrequencyPenalty
                    defaultValue={[0]}
                    setState={setFrequencyPenalty}
                    value={frequencyPenalty}
                  />
                  <PresencePenalty
                    defaultValue={[0]}
                    setState={setPresencePenalty}
                    value={presencePenalty}
                  />
                </CollapsibleContent>
              </Collapsible>
            </LLMChildContainer>
          </LLMParentContainer>
        </div>
      </Tabs>
    </Container>
  )
}

//   return <Login />;

// }
