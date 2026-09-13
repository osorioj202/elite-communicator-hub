# Vercel Deployment Guide

Follow these steps to deploy **Elite Communicator Hub** securely to Vercel.

## 1. Required Environment Variables
You MUST set these variables in the Vercel Project Settings (Environment Variables) before or during deployment:

| Variable | Description |
| :--- | :--- |
| `OPENAI_API_KEY` | Your OpenAI API key for Chat, TTS, and Whisper. |
| `APP_ACCESS_PASSWORD` | The master password for accessing the app (e.g., `sm@rtXXX123`). |

## 2. Deployment Steps

### Option A: Vercel CLI (Recommended for speed)
In your terminal, run:
```bash
vercel
```
Follow the prompts to link the project. When asked for environment variables, you can paste them or set them in the dashboard later.

### Option B: GitHub/GitLab/Bitbucket Integration
1. Push your code to a repository.
2. Import the project in the Vercel Dashboard.
3. Add the **Environment Variables** listed above in the "Environment Variables" section of the import flow.
4. Click **Deploy**.

## 3. Post-Deployment Verification
Once the build is complete:
1. Visit your Vercel URL (e.g., `elite-hub.vercel.app`).
2. You should be redirected to `/login`.
3. Enter your `APP_ACCESS_PASSWORD` to gain entry.
4. Verify that voice practice and translations are working as expected.
