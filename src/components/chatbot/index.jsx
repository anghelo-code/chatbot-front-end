import './style.component.css';
import { useState } from 'react';
import { ChatbotButtom } from './ChatbotButtom';
import { ChatbotHead } from './ChatbotHead';
import { ChatbotBody } from './ChatbotBody';
import { ChatbotForm } from './ChatbotForm';

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    // Agregar el mensaje del usuario al estado
    const newUserMessage = { type: 'user', message: userMessage };
    setMessages(messages => [...messages, newUserMessage]);

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
      setMessages(messages => [...messages, newBotMessage]);

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <span >
     <div className="chatbot">
      <ChatbotButtom />

      <div className="chatbot-chat">
        <ChatbotHead />      

        <ChatbotBody messages={ messages } />  

        <ChatbotForm setMessage={ sendMessage } />
      </div>
     </div>
    </span>
  )
}
