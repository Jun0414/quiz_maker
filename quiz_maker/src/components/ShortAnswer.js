import React, { useState } from 'react';
import Qi from './ShortAnswer.module.css';

const ShortAnswer = () => {
    return (
        <div>
            문제 : <textarea name='SA_quiz' autocomplete="off" className={Qi.quiz} /><br />
            빈칸1 : <textarea name='SA_no1' autocomplete="off" className={Qi.num} /><br />
            빈칸2 : <textarea name='SA_no2' autocomplete="off" className={Qi.num} /><br />
            {/* 문제 : <input id='SA_quiz' type='text' className={Qi.quiz} /><br /> */}
            {/* 빈칸1 : <input id='SA_no1' type='text' className={Qi.num} /><br /> */}
            {/* 빈칸2 : <input id='SA_no2' type='text' className={Qi.num} /> */}
        </div>
    );
};

export default ShortAnswer;