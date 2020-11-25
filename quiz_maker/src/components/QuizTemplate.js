import React from 'react';
import './QuizTemplate.css';

const QuizTemplate = ({form, children}) => {
  return (
    <main className="quiz-template">
      <div className="title">
        오늘 할 일
      </div>
    </main>
  );
};

export default QuizTemplate;