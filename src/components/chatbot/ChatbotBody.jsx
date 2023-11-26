import { MessageBot } from "./MessageBot";
import { MessageUser } from "./MessageUser";
import { useEffect, useRef } from "react";

export const ChatbotBody = ({ messages }) => {
  const chatbotBody = useRef(null);

  useEffect(() => {
    chatbotBody.current.scrollTop = chatbotBody.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbot-body" ref={ chatbotBody }>
      {messages.map((msg, index) => {
        switch (msg.type) {
          case 'user':
            return <MessageUser key={index} message={msg.message} />;
          case 'bot':
            return <MessageBot key={index} message={msg.message} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
