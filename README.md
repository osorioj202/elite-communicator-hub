# SDR Voice Coach

A Progressive Web App (PWA) that helps Sales Development Representatives (SDRs) practice cold calling and objection handling with an AI voice coach.

## Features

- 🎙️ **Real Voice Practice**: Speak naturally with AI prospects using voice interaction.
- 🤖 **AI Personas**: Practice against different scenarios like Cold Calls, Gatekeepers, and Price Objections.
- 📊 **Instant Feedback**: Get detailed scoring and improvements after every session.
- 🔒 **Privacy Focused**: Audio is processed for transcription but not stored permanently.
- 📱 **PWA Ready**: Installable on mobile and desktop.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI
- **AI**: OpenAI GPT-4o & Whisper
- **State**: Zustand (persisted locally)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- An OpenAI API Key

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sdr-voice-coach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Rename `.env.example` to `.env.local` (or create a new `.env.local` file).
   - Add your OpenAI API Key:
     ```env
     OPENAI_API_KEY=sk-your-api-key-here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and API routes.
- `src/components`: Reusable UI components.
- `src/store`: Zustand state management.
- `src/data`: Scenario definitions and prompts.
- `src/types`: TypeScript interfaces.

## License

MIT
