import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export const ChatbotButtom = () => {
  return (
    < >
      <input type="checkbox" id="checkbox" className='chatbot-check' />
      <label htmlFor="checkbox" className='chatbot-label' >
        <FontAwesomeIcon icon={ faCommentAlt } className='chatbot-icon_chat' />
        <FontAwesomeIcon icon={ faX } className='chatbot-icon_close' />
      </label>
    </>
  )
}
