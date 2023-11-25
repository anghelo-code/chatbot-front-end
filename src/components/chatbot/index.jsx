import './style.component.css';
import { ChatbotButtom } from './ChatbotButtom';

export const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (userMessage) => {
    // Agregar el mensaje del usuario al estado
    const newUserMessage = { type: 'user', message: userMessage };
    setMessages(messages => [...messages, newUserMessage]);

    try {
      const response = await fetch('http://localhost/chatbot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const botResponse = await response.text();

      const newBotMessage = { type: 'bot', message: botResponse };
      setMessages(messages => [...messages, newBotMessage]);

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <span >
      <ChatbotButtom />

      <div className="chatbot-chat">
        <ChatbotHead />      

        <ChatbotBody messages={ messages } />  

        <ChatbotForm setMessage={ sendMessage } />
      </div>
    </span>
  )
}
