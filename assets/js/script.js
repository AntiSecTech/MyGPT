let apiConfig = null;

async function loadApiConfig() {
    try {
        const response = await fetch('/api.json');
        if (!response.ok) throw new Error('Failed to load API config');
        apiConfig = await response.json();
    } catch (error) {
        console.error('Error loading API config:', error);
        return false;
    }
}

async function postChatMessage(){
    msgContainer.innerHTML += `<div class="msg-me">${chatField.value}</div>`;
    msgContainer.innerHTML += `<div class="msg">${await askChatGPT(chatField.value)}</div>`;
    chatField.value = '';
}

async function askChatGPT(question) {
    if (!apiConfig) await loadApiConfig();
    if (!apiConfig) return 'Error: Could not load API configuration';

    try {
        const response = await fetch(apiConfig.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiConfig.apiKey}`
            },
            body: JSON.stringify({
                inputs: question,
                parameters: {
                    max_length: 100,
                    temperature: 0.7,
                    top_p: 0.9
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`API Error: ${error.error || response.statusText}`);
        }

        const data = await response.json();
        return data.generated_text || data[0].generated_text;
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I encountered an error. Please try again later.';
    }
}
loadApiConfig();
