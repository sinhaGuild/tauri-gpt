# GPT Prompt Tauri App

Simple experiment recreating the _openai_ gpt prompt using [Tauri](https://github.com/tauri-apps/tauri), [RUST](https://www.rust-lang.org/) and [Nextjs](https://github.com/vercel/next.js/)

### Demo

![](https://i.imgur.com/Hhaoguc.gif)
![](https://i.imgur.com/cq1FHIG.png)
![](https://i.imgur.com/zhxRez6.png)

With `native` titlebar
<br/>

![](https://i.imgur.com/kUzB0Mx.gif)

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
