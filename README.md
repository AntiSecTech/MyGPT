# AI Chat MyGPT


[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Powered-orange.svg?style=for-the-badge)](https://huggingface.co/)

A simple web component that displays chat messages between a user and an AI assistant.

![AI Chat Interface](/assets/img/screenshot.png)

## Project Structure

The project consists of three main files:

- `index.html`: Main entry point and HTML structure
- `styles.css`: Styling for the chat interface
- `script.js`: JavaScript functionality for message handling
- `api.json`: Configuration file for your Hugging Face API key

## Usage

Simply include the required files in your HTML:

```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```

The chat history will be displayed in a container with the class `chat-container`. Each message is structured as:

```html
<div class="message {user|assistant}">
    <div class="message-content">
        <!-- HTML formatted content -->
    </div>
</div>
```

## Setup

1. Clone the repository

2. Replace the placeholder value in `api.json` with your Hugging Face API key:

```json
{
    "apiKey": "YOUR_API_KEY",
    "apiUrl": "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
}
```

3. Start a local web server:

```bash
python3 -m http.server
```

4. Open your browser and navigate to `http://localhost:8000`

## Browser Support

Works in modern browsers that support:

- ES6+ JavaScript
- CSS Grid and Flexbox

## Contributing

Feel free to open issues and submit pull requests for any improvements.
