import React, { useState, useRef } from 'react';
import './Index.css';
import ArrowDown from '../../../Assets/arrowDown.png';

const QuestionCard = ({ question, answer, number }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const answerRef = useRef(null);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  const answerHeight = isAnswerVisible ? `${answerRef.current.scrollHeight}px` : '0';

  return (
    <div
      onClick={toggleAnswerVisibility}
      className={`parent font-poppins p-1 questionContainer ${
        isAnswerVisible ? 'border border-pink' : 'notOpen'
      } flex flex-col rounded-lg`}
    >
      <div className='flex flex-row justify-between text-white'>
        <div className='flex flex-row'>
          <div className='serialNo flex flex-col justify-center pl-2 pr-2'>{number + '.'}</div>
          <div className='question flex flex-col justify-center text-lg font-medium'>{question}</div>
        </div>
        <div className='clickMe'>
          <img className='flex flex-col justify-center' src={ArrowDown} alt="Arrow Down" />
        </div>
      </div>
      <div
        ref={answerRef}
        className='answer text-white pl-4 text-start pt-4'
        style={{ maxHeight: answerHeight, overflow: 'hidden', transition: 'max-height 0.3s ease-in-out' }}
      >
        {answer}
      </div>
    </div>
  );
};

export default QuestionCard;
