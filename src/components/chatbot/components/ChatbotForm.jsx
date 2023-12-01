import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const ChatbotForm = ({ setMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() !== '') {
      setMessage(inputValue); 
      setInputValue(''); 
    }
  };

  return (
    <form className='chatbot-form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        className='chatbot-form_input' 
        placeholder='Escribe tu mensaje' 
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className='chatbot-form_button'>
        <FontAwesomeIcon icon={faArrowRight} className='chatbot-form_icon'/>
      </button>
    </form>
  );
};



