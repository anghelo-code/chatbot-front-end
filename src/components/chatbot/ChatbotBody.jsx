import { MessageBot } from "./MessageBot";
import { MessageUser } from "./MessageUser";

export const ChatbotBody = ({ messages }) => {
  return (
    <div className="chatbot-body">
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
