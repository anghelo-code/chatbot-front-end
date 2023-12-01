import { MessageBot, MessageUser } from "./";
import { useAutoScroll } from "../hooks/useAutoScroll";

const messageComponents = {
  user: MessageUser,
  bot: MessageBot,
};

export const ChatbotBody = ({ messages }) => {
  const chatbotBody = useAutoScroll(messages);

  return (
    <div className="chatbot-body" ref={chatbotBody}>
      {messages.map((msg, index) => {
        const MessageComponent = messageComponents[msg.type];

        return MessageComponent ? (
          <MessageComponent key={index} message={msg.message} />
        ) : null;
      })}
    </div>
  );
};