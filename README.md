# Clever Text-to-Speech

A modern web application that intelligently converts text to speech with smart character filtering. Built to provide a superior TTS experience by automatically removing formatting characters and filler text while preserving meaningful punctuation for natural speech flow.

## Features

- **Intelligent Character Filtering**: Automatically removes Markdown syntax, extra symbols, and accidental keystrokes
- **Natural Speech Flow**: Preserves meaningful punctuation for better speech rhythm
- **Modern UI**: Clean, responsive interface built with Next.js and Tailwind CSS
- **Smart Processing**: AI-powered filtering that learns and adapts to improve speech quality

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **TTS Engine**: Web Speech API (browser-native)
- **Character Filtering**: Custom intelligent filtering algorithms

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/features` - Feature-specific modules (TTS, filtering, audio)
- `/src/lib` - Shared libraries and configurations
- `/src/types` - TypeScript type definitions
