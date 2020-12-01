import React, { useState } from 'react';
import Qi from './Essay.module.css';

const Essay = () => {
    return (
        <div>
            문제 : <textarea name='ES_quiz' autocomplete="off" className={Qi.quiz} /><br />
            {/* 문제 : <input id='ES_quiz' type='text' className={Qi.quiz} /><br /> */}
            {/* 서술 : <input id='ES_no1' type='text' className={Qi.num} /> */}
        </div>
    );
};

export default Essay;