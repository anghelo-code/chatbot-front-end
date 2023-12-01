import './style.component.css';
import { ChatbotButtom, ChatbotBody, ChatbotHead, ChatbotForm } from './components';
import { useSendMessaje } from './hooks/useSendMessaje';

export const Chatbot = () => {
  const { messages, sendMessage } = useSendMessaje();

  return (
    <span >
      <div className="chatbot">
        <ChatbotButtom />

        <div className="chatbot-chat">
          <ChatbotHead />

          <ChatbotBody messages={messages} />

          <ChatbotForm setMessage={sendMessage} />
        </div>
      </div>
    </span>
  )
}
