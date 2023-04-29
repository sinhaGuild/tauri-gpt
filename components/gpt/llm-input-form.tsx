import { LLMInputFormProps } from "@/types/gpt"
import { RIcons } from "../boilerplate/icons-radix"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { LLMExamplesSelect } from "./llm-examples-select"

export const LLMInputForm = ({
  setPrompt,
  handleSubmit,
  handleClear,
  isLoading,
  prompt,
}: LLMInputFormProps) => {
  return (
    <>
      <div className="grid items-start w-full h-full grid-cols-4 p-0 m-0 gap-y-4">
        <div className="h-full row-span-4 col-span-full">
          <div className="grid justify-end row-span-1 -my-3 col-span-full">
            <LLMExamplesSelect setPrompt={setPrompt} />
            {/* <PresetSave /> */}
          </div>
          <Label>Prompt</Label>
          <Textarea
            className="grid h-[66vh] row-span-4 resize-none"
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value)
            }}
          />
        </div>
        <div className="flex gap-3">
          {isLoading && (
            <Button disabled>
              <RIcons.loading className="w-6 h-6 animate-spin" />
              {/* <Loader2 className="w-6 h-6 animate-spin" /> */}
            </Button>
          )}
          {!isLoading && (
            <>
              <Button onClick={handleSubmit}>
                <RIcons.submit className="w-6 h-6" />
              </Button>
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={handleClear}
                className="w-10 h-10"
              >
                <RIcons.clear className="hover:animate-pulse" />
                {/* <Trash2 /> */}
              </Button>
              <Button
                variant={"subtle"}
                size={"sm"}
                onClick={handleClear}
                className="w-10 h-10"
              >
                <RIcons.download className="hover:animate-pulse" />
                {/* <Trash2 /> */}
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
