const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Vercel serverless function
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { question, policyType } = req.body;

    if (!question || !policyType) {
      res.status(400).json({ error: 'Question and policy type are required' });
      return;
    }

    // Define system prompts for each policy type
    const systemPrompts = {
      'terms': `You are a helpful AI assistant that explains G-Data Labs' Terms & Conditions in simple, clear language. 
                You help users understand legal language and their rights. Keep responses conversational, accurate, and under 150 words.
                Focus on practical implications and user rights. If you're unsure about specifics, direct them to contact legal@g-datalabs.com.`,
      
      'privacy': `You are a helpful AI assistant that explains G-Data Labs' Privacy Policy in simple, clear language.
                 You help users understand how their data is collected, used, and protected. Keep responses conversational, accurate, and under 150 words.
                 Emphasize user control and rights. If you're unsure about specifics, direct them to contact privacy@g-datalabs.com.`,
      
      'cookies': `You are a helpful AI assistant that explains G-Data Labs' Cookie Policy in simple, clear language.
                 You help users understand what cookies are used and how to manage them. Keep responses conversational, accurate, and under 150 words.
                 Focus on practical cookie management. If you're unsure about specifics, direct them to contact cookies@g-datalabs.com.`
    };

    const systemPrompt = systemPrompts[policyType] || systemPrompts['terms'];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: question
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;
    res.status(200).json({ response });

  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      error: 'Sorry, I encountered an error processing your question. Please try again or contact support.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};