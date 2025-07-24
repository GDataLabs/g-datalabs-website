# OpenAI API Setup for Policy Pages

## Quick Setup Instructions

### 1. Copy Your Environment File
Copy your existing `.env` file to the `/api` directory:
```bash
cp /path/to/your/.env ./api/.env
```

### 2. Verify Environment Variables
Make sure your `.env` file contains:
```bash
OPENAI_API_KEY=sk-your-actual-openai-key-here
NODE_ENV=production
```

### 3. Deploy Options

#### Option A: Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the root directory
3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `OPENAI_API_KEY` with your API key value

#### Option B: Deploy to Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Add environment variables in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add `OPENAI_API_KEY` with your API key value

#### Option C: Test Locally
1. Navigate to api directory: `cd api`
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Test the policy pages at http://localhost:3000

## How It Works

### API Endpoint
- **URL**: `/api` (Vercel serverless function)
- **Method**: POST
- **Body**: `{ "question": "user question", "policyType": "terms|privacy|cookies" }`
- **Response**: `{ "response": "AI generated answer" }`

### Policy-Specific Prompts
Each policy type has a custom system prompt:
- **Terms**: Explains legal terms and user rights
- **Privacy**: Focuses on data collection and user control
- **Cookies**: Explains cookie types and management

### Fallback System
If the API fails, the system automatically falls back to predefined responses to ensure the chat always works.

## Security Features

1. **CORS Protection**: Only allows requests from your domain
2. **Input Validation**: Validates question and policy type
3. **Rate Limiting**: OpenAI's built-in rate limiting
4. **Error Handling**: Never exposes API keys or internal errors
5. **Environment Variables**: API key stored securely in environment

## Testing the Integration

1. Visit any policy page (terms.html, privacy.html, cookies.html)
2. Try asking questions like:
   - "How do you collect my data?"
   - "Can I delete my account?"
   - "What cookies do you use?"
3. Verify you get intelligent, contextual responses

## Troubleshooting

### If you see "Thinking..." forever:
- Check your OpenAI API key is valid
- Verify environment variables are set correctly
- Check browser console for errors

### If you get fallback responses:
- Your API endpoint might not be deployed yet
- Check the network tab in browser dev tools
- Verify the `/api` endpoint is accessible

### For local testing:
- Make sure to run `npm install` in the `/api` directory
- Start the local server before testing policy pages
- Check that port 3000 is not blocked

## Cost Optimization

The API is configured for cost efficiency:
- Uses `gpt-4o-mini` (cheapest model)
- Limits responses to 200 tokens
- Includes smart system prompts for better responses
- Falls back to free responses if API fails

Estimated cost: ~$0.01-0.02 per 100 questions asked.