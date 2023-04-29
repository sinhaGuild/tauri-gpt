export interface LLMExamples {
  label: string
  items: {
    id: string
    name: string
    disabled?: boolean
    value: string
  }[]
}

export const examples: LLMExamples[] = [
  {
    label: "GPT Examples",
    items: [
      {
        id: "9cb0e66a-9937-465d-a188-2c4c4ae2401f",
        name: "Grammatical Standard English",
        value:
          "Correct this to standard English:\n\nShe no went to the market.",
      },
      {
        id: "61eb0e32-2391-4cd3-adc3-66efe09bc0b7",
        name: "Summarize for a 2nd grader",
        value:
          "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. \n\nIt is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] \n\nWhen viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus",
      },
      {
        id: "a4e1fa51-f4ce-4e45-892c-224030a00bdd",
        name: "Text to command",
        value:
          "Convert this text to a programmatic command: \n\nExample: Ask Constance if we need some bread. \nOutput: send-msg `find constance` Do we need some bread? \nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
      },
      {
        id: "cc198b13-4933-43aa-977e-dcd95fa30770",
        name: "Q&A",
        value:
          "What is the average life expectancy of a person now. \n\nHow is this calculated?",
      },
      {
        id: "adfa95be-a575-45fd-a9ef-ea45386c64de",
        name: "English to other languages",
        value:
          "Translate this into 1. French, 2. Spanish and 3. Japanese: \n\nFood is ready. Come and get it!",
      },
      {
        id: "c569a06a-0bd6-43a7-adf9-bf68c09e7a79",
        name: "Blog post",
        value:
          "As a professional dog trainer, \n\nwrite an email to a client who has a new 3-month-old Corgi about the activities they should do to house train their puppy",
      },
      {
        id: "15ccc0d7-f37a-4f0a-8163-a37e162877dc",
        name: "Classification",
        disabled: true,
        value:
          "The following is a list of companies and the categories they fall into: \n\n\nApple, \nFacebook, \nFedex \nApple \n\nCategory:",
      },
      {
        id: "4641ef41-1c0f-421d-b4b2-70fe431081f3",
        name: "Natural language to Python",
        value:
          "Describe the concept of inherintance in python. \n\nProvide examples of this with some code.",
      },
      {
        id: "dfd42fd5-0394-4810-92c6-cc907d78mmd1a",
        name: "Chat",
        disabled: true,
        value: "",
      },
      {
        id: "dfd42fd5-0394-5610-92c6-cc90432bfd1b",
        name: "Parse unstructured data",
        value:
          "A table summarizing the fruits from Goocrux:\n\nThere are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.\n\n\n| Fruit | Color | Flavor |",
      },
      {
        id: "dfd42fd5-0394-4810-92c6-cc9024343bfd1c",
        name: "Spreadsheet Creator",
        value:
          "A two-column spreadsheet of top science fiction movies and the year of release:\n\nTitle |  Year of release",
      },
      {
        id: "dfd42fd5-0394-4230-92c6-cc9132khbfd1d",
        name: "Microstories",
        value:
          "Topic: Breakfast\n\nTwo-Sentence Horror Story: He always stops crying when I pour the milk on his cereal. I just have to remember not to let him see his face on the carton.\n\n\nTopic: Wind\n\nTwo-Sentence Horror Story:",
      },
    ],
  },
]
