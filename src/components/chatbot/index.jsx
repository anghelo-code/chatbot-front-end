import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faX, faCommentAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.component.css';

export const Chatbot = () => {
  return (
    <span className='chatbot'>
      <input type="checkbox" id="checkbox" className='chatbot-check' />
      <label htmlFor="checkbox" className='chatbot-label' >
        <FontAwesomeIcon icon={ faCommentAlt } className='chatbot-icon_chat' />
        <FontAwesomeIcon icon={ faX } className='chatbot-icon_close' />
      </label>

      <div className="chatbot-chat">
        <div className="chatbot-head">
          chatbot
        </div>

        <div className="chatbot-body">
          <div className="chatbot-body_user">
            <div>
              Hola cual es el nommbre del lauro
            </div>
          </div>

          <div className="chatbot-body_bot">
            <div>
              Cual es tu consulta
            </div>
          </div>
        </div>

        <div  className='chatbot-form'>
          <input type="text"  className='chatbot-form_input'/>
          <button className='chatbot-form_button'>
            <FontAwesomeIcon icon={ faArrowRight }   className='chatbot-form_icon'/>
          </button>
        </div>

      </div>
    </span>
  )
}
