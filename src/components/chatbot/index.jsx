import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faX, faCommentAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.component.css';

export const Chatbot = () => {
  return (
    <span >
      <div className="chatbot">
        <input type="checkbox" id="checkbox" className='chatbot-check' />
        <label htmlFor="checkbox" className='chatbot-label' >
          <FontAwesomeIcon icon={ faCommentAlt } className='chatbot-icon_chat' />
          <FontAwesomeIcon icon={ faX } className='chatbot-icon_close' />
        </label>
      </div>
      
      <div className="chatbot-chat">
        <div className="chatbot-head">
          chatbot
        </div>

        <div className="chatbot-body">
          <div className="chatbot-body_user">
            <div>
              Quien es el profesor Lauro ?
            </div>
          </div>

          <div className="chatbot-body_bot">
            <div>
              El profesor Lauro es  ...
            </div>
          </div>
        </div>

        <div  className='chatbot-form'>
          <input type="text"  className='chatbot-form_input' placeholder='Escribe tu mensaje' />
          <button className='chatbot-form_button'>
            <FontAwesomeIcon icon={ faArrowRight }   className='chatbot-form_icon'/>
          </button>
        </div>

      </div>
    </span>
  )
}
