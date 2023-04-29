# GPT Prompt Tauri App

Simple experiment recreating the _openai_ gpt prompt using [Tauri](https://github.com/tauri-apps/tauri), [RUST](https://www.rust-lang.org/) and [Nextjs](https://github.com/vercel/next.js/)

### Demo

With `native` titlebar
<br/>

![](./tauri-gpt.gif)

With `custom` titlebar
<br/>

![](./tauri-gpt2.gif)

## How to use

1. Clone and Install dependencies

```sh
git clone https://github.com/sinhaguild/tauri-gpt

cd tauri-gpt
npm install

```

2. Update environment variables

```sh
mv .env.example .env
```

Update `OPENAI_API_KEY` with your own, which can be procured from [here](https://platform.openai.com/account/api-keys).

3. Run

```sh
npm run tauri dev
```

4. Build

```sh
npm run tauri build
```
