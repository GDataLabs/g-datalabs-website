// Shared API functionality for policy pages
class PolicyAPI {
    constructor(policyType) {
        this.policyType = policyType;
        this.apiEndpoint = '/api'; // Vercel serverless function
    }

    async askQuestion(question) {
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: question,
                    policyType: this.policyType
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('API Error:', error);
            
            // Fallback to simulated responses if API fails
            return this.getFallbackResponse(question);
        }
    }

    getFallbackResponse(question) {
        const lowerQuestion = question.toLowerCase();
        
        const fallbackResponses = {
            'terms': {
                'data': "Our data collection practices are designed with your privacy in mind. We collect account info, usage data, and biometric data (only with explicit consent). Our LLM system ensures you understand exactly what data we're collecting and why.",
                'biometric': "Biometric data includes EEG brain activity, facial expressions, eye tracking, and skin response. We only collect this during research studies with your explicit consent. You maintain full control and can withdraw consent at any time.",
                'payment': "We use secure payment processing and don't store your credit card info. For our data marketplace, you can actually earn money by choosing to share your data - all transactions are voluntary with clear compensation.",
                'liability': "Our liability is limited to protect both parties. We provide services 'as is' and aren't responsible for indirect damages. This is standard legal protection while we work to provide the best service possible.",
                'termination': "Either you or G-Data Labs can end the agreement anytime. If terminated, we'll handle your data according to our retention policy and you can request data deletion under privacy laws.",
                'changes': "We may update these terms occasionally. We'll notify you of major changes via email or platform notifications. Continuing to use our services means you accept the updated terms."
            },
            'privacy': {
                'collect': "We collect account information, biometric data (with consent), and usage data. Biometric data includes EEG, facial expressions, eye tracking, and skin response - but only for research with your explicit permission.",
                'biometric': "Biometric data includes EEG brain activity, facial expressions, eye tracking, and galvanic skin response. We only collect this during research studies with your explicit consent, and you can withdraw consent anytime.",
                'share': "We don't share personal data with advertisers or for commercial purposes. We may share anonymized research data for scientific advancement and aggregated statistics, always protecting individual privacy.",
                'security': "We use end-to-end encryption, AES-256 storage encryption, multi-factor authentication, and regular security audits. Our team has limited access on a need-to-know basis with comprehensive training.",
                'rights': "You have the right to access, correct, delete, or restrict your data. You can also request data portability and withdraw consent for biometric data collection at any time. Contact privacy@g-datalabs.com to exercise these rights.",
                'retention': "Account data is kept until deletion plus 30 days. Biometric data (with consent) for 5 years for research. Usage data for 2 years. We use secure deletion methods when removing data.",
                'children': "We don't knowingly collect data from children under 13 without parental consent. For users under 18 in research studies, we require parental consent and provide special protections.",
                'contact': "Contact privacy@g-datalabs.com for privacy questions or dpo@g-datalabs.com for our Data Protection Officer. We respond to verified requests within 30 days."
            },
            'cookies': {
                'essential': "Essential cookies are required for the site to work properly - like keeping you logged in and protecting against security attacks. You can't disable these without breaking the website functionality.",
                'functional': "Functional cookies remember your preferences like theme (light/dark mode) and language settings. These make your experience better but aren't required - you can disable them in your browser.",
                'analytics': "Analytics cookies help us understand how people use our site so we can improve it. They track things like which pages are popular and if there are any technical issues. You can opt out of these.",
                'research': "Research cookies are only used with your explicit consent for our AI studies. They might connect your web activity with biometric data if you're participating in research. You can withdraw consent anytime.",
                'manage': "You can manage cookies through your browser settings or our cookie preference center. You can block all cookies, just third-party ones, or choose specific categories. Just remember some features might not work without cookies.",
                'disable': "If you disable cookies: Essential ones will break core features, functional ones remove personalization, analytics ones prevent us from improving the site, and research ones stop your contribution to AI studies.",
                'security': "We secure cookies with HTTPS-only transmission, HttpOnly flags to prevent JavaScript access, SameSite protection against attacks, and encryption for sensitive data.",
                'third': "We minimize third-party cookies and only use trusted partners for CDN, error monitoring, and research tools. You can control these through browser settings."
            }
        };

        const responses = fallbackResponses[this.policyType] || fallbackResponses['terms'];
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerQuestion.includes(key)) {
                return response;
            }
        }

        return "I'd be happy to help clarify that! Could you be more specific about which aspect you'd like me to explain? The API is currently experiencing issues, but feel free to contact our support team for immediate assistance.";
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PolicyAPI;
}