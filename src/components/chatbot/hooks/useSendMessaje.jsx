import { useState } from 'react';

export const useSendMessaje = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    const newUserMessage = { type: 'user', message: userMessage };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    try {
      const response = await fetch('http://localhost:8000/chatbot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const botResponse = await response.json();

      const newBotMessage = { type: 'bot', message: botResponse.response };
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return { messages, sendMessage };
};
