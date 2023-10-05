import React, { useState } from 'react';
import './Index.css';
import ArrowDown from '../../../Assets/arrowDown.png';

const QuestionCard = ({ question, answer, number }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div className={`parent p-1 questionContainer ${isAnswerVisible ? 'border border-pink' : 'border border-white'} flex flex-col rounded-lg`}>
      <div className='flex flex-row justify-between text-white'>
        <div className='flex flex-row'>
          <div className='serialNo flex flex-col justify-center pl-2 pr-2'>{number+'.'}</div>
          <div className='question flex flex-col justify-center text-lg font-medium'>{question}</div>
        </div>
        <div className='clickMe' onClick={toggleAnswerVisibility}>
          <img className='flex flex-col justify-center' src={ArrowDown}/>
        </div>
      </div>
      {isAnswerVisible && (
        <div className='answer text-white pl-4 text-start pt-4'>{answer}</div>
      )}
    </div>
  );
};

export default QuestionCard;
