document.addEventListener('DOMContentLoaded', () => {
    // --- Language Toggle ---
    const langEN = document.getElementById('lang-en');
    const langML = document.getElementById('lang-ml');
    const elementsToTranslate = {
        'website-name': { en: 'ShieldHer', ml: 'ഷീൽഡ്ഹെർ' },
        'tagline': { en: 'A secure, anonymous support platform', ml: 'സുരക്ഷിതമായ, അജ്ഞാത പിന്തുണ പ്ലാറ്റ്ഫോം' },
        'feature-1': { en: 'End-to-End Encrypted', ml: 'എൻഡ്-ടു-എൻഡ് എൻക്രിപ്റ്റഡ്' },
        'feature-2': { en: 'Identity Not Revealed', ml: 'അടയാളം വെളിപ്പെടുത്തില്ല' },
        'feature-3': { en: '24/7 Support Network', ml: '24/7 പിന്തുണാ ശൃംഖല' },
        'report-heading': { en: 'Anonymous Report', ml: 'അജ്ഞാത റിപ്പോർട്ട്' },
        'title-label': { en: 'Title of the Report', ml: 'റിപ്പോർട്ടിന്റെ തലക്കെട്ട്' },
        'details-label': { en: 'Details of the Harassment', ml: 'ഹരാസ്മെന്റ് വിശദാംശങ്ങൾ' },
        'encrypted-text': { en: 'End-to-End Encrypted', ml: 'എൻഡ്-ടു-എൻഡ് എൻക്രിപ്റ്റഡ്' },
        'anonymous-text': { en: 'Identity Not Revealed', ml: 'അടയാളം വെളിപ്പെടുത്തില്ല' },
        'ai-verify-text': { en: 'AI Verification for Media Files', ml: 'മീഡിയ ഫയലുകൾക്ക് AI വെരിഫിക്കേഷൻ' },
        'upload-label': { en: 'Upload Video or Image', ml: 'വീഡിയോ അല്ലെങ്കിൽ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക' },
        'submit-btn': { en: 'Submit Report', ml: 'റിപ്പോർട്ട് സമർപ്പിക്കുക' },
        'disclaimer-text': { en: 'Fake Report Management: Misusing this platform for false reports will lead to suspension of the user and legal action.', ml: 'വ്യാജ റിപ്പോർട്ട് മാനേജ്മെന്റ്: വ്യാജ റിപ്പോർട്ടുകൾക്കായി ഈ പ്ലാറ്റ്ഫോം ദുരുപയോഗം ചെയ്താൽ ഉപയോക്താവിനെ സസ്പെൻഡ് ചെയ്യുകയും നിയമനടപടികൾ സ്വീകരിക്കുകയും ചെയ്യും.' },
        'awareness-heading': { en: 'Awareness & Guidance', ml: 'ബോധവൽക്കരണവും മാർഗ്ഗനിർദ്ദേശവും' },
        'counseling-heading': { en: 'Counselling Services', ml: 'കൗൺസിലിംഗ് സേവനങ്ങൾ' },
        'counseling-text': { en: 'Access free, confidential counselling services with our network of professionals.', ml: 'ഞങ്ങളുടെ പ്രൊഫഷണലുകളുടെ ശൃംഖലയിൽ നിന്ന് സൗജന്യവും രഹസ്യാത്മകവുമായ കൗൺസിലിംഗ് സേവനങ്ങൾ നേടുക.' },
        'legal-heading': { en: 'Legal Aid & Support', ml: 'നിയമസഹായം & പിന്തുണ' },
        'legal-text': { en: 'Find resources and legal advice to understand your rights and take action.', ml: 'നിങ്ങളുടെ അവകാശങ്ങൾ മനസ്സിലാക്കാനും നടപടികൾ എടുക്കാനും വിഭവങ്ങളും നിയമോപദേശവും കണ്ടെത്തുക.' },
        'safety-heading': { en: 'Personal Safety Tips', ml: 'വ്യക്തിഗത സുരക്ഷാ നുറുങ്ങുകൾ' },
        'safety-text': { en: 'Learn practical tips and strategies to enhance your personal safety, both online and offline.', ml: 'ഓൺലൈനിലും ഓഫ്‌ലൈനിലും നിങ്ങളുടെ വ്യക്തിപരമായ സുരക്ഷ വർദ്ധിപ്പിക്കുന്നതിനുള്ള പ്രായോഗിക നുറുങ്ങുകളും തന്ത്രങ്ങളും പഠിക്കുക.' },
        'chatbot-heading': {en: 'AI Chatbot for Guidance', ml: 'മാർഗ്ഗനിർദ്ദേശത്തിനായുള്ള AI ചാറ്റ്‌ബോട്ട്'},
    };

    function setLanguage(lang) {
        for (const [id, text] of Object.entries(elementsToTranslate)) {
            const element = document.getElementById(id);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text[lang];
                } else {
                    element.textContent = text[lang];
                }
            }
        }
        langEN.classList.toggle('active', lang === 'en');
        langML.classList.toggle('active', lang === 'ml');
    }

    langEN.addEventListener('click', () => setLanguage('en'));
    langML.addEventListener('click', () => setLanguage('ml'));
    setLanguage('en');

    // --- SOS Button Functionality ---
    const sosBtn = document.getElementById('sos-btn');
    sosBtn.addEventListener('click', () => {
        alert('Your location is being sent to your emergency contacts, police, and Pink Police.');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                console.log(`SOS triggered! Location: Lat ${latitude}, Lon ${longitude}`);
            }, error => {
                console.error('Geolocation error:', error);
                alert('Could not get your location. Please check your browser settings.');
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });

    // --- AI Chatbot ---
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    const cannedResponses = {
        'counseling': 'We can connect you with a network of mental health professionals who provide confidential counseling. You are not alone, and help is available.',
        'safety tips': 'Always be aware of your surroundings. Share your live location with a trusted friend or family member, especially when traveling alone.',
        'legal aid': 'We have resources to help you understand your legal rights and take appropriate action. We can connect you with legal experts who specialize in harassment cases.',
        'hello': 'Hello! How can I help you today? You can ask about counseling, safety tips, or legal aid.',
        'hi': 'Hello! How can I help you today? You can ask about counseling, safety tips, or legal aid.'
    };

    function addMessage(text, sender) {
        const msgElement = document.createElement('div');
        msgElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        msgElement.textContent = text;
        chatbotMessages.appendChild(msgElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to bottom
    }

    function getBotResponse(input) {
        input = input.toLowerCase().trim();
        for (const keyword in cannedResponses) {
            if (input.includes(keyword)) {
                return cannedResponses[keyword];
            }
        }
        return 'I am sorry, I do not have information on that. Please try asking about "counseling," "safety tips," or "legal aid."';
    }

    chatbotSendBtn.addEventListener('click', () => {
        const userText = chatbotInput.value;
        if (userText === '') return;
        
        addMessage(userText, 'user');
        chatbotInput.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            addMessage(botResponse, 'bot');
        }, 500);
    });
});