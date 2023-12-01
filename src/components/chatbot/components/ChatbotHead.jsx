import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const ChatbotHead = () => {
  return (
    <div className="chatbot-head">
      <a href="#" target="_blank" className="chatbot-head_link">
        <FontAwesomeIcon icon={faWhatsapp} className="chatbot-head_whatsapp" />
      </a>
      <div className="chatbot-head_text">Chatbot</div>
      <FontAwesomeIcon icon={faX} className="chatbot-head_x" />
    </div>
  )
}
