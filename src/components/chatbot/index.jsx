import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faX, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './style.component.css';

export const Chatbot = () => {
  return (
    <span className='chatbot'>
      <input type="checkbox" id="checkbox" className='chatbot-check' />
      <label htmlFor="checkbox" className='chatbot-label' >
        <FontAwesomeIcon icon={ faCommentAlt } className='chatbot-icon_chat' />
        <FontAwesomeIcon icon={ faX } className='chatbot-icon_close' />
      </label>
    </span>
  )
}
