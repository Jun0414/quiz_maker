import React, { useState } from 'react';
import Qi from './MultipleChoice.module.css';

const MultipleChoice = () => {
    return (
        <div>
            문제 : <textarea name='MC_quiz' autocomplete="off" className={Qi.quiz} /><br />
            {/* 문제 : <input id='MC_quiz' type='text' className={Qi.quiz} /><br /> */}
            1번 : <input id='MC_no1' type='text' autocomplete="off" className={Qi.num} /><br />
            2번 : <input id='MC_no2' type='text' autocomplete="off" className={Qi.num} /><br />
            3번 : <input id='MC_no3' type='text' autocomplete="off" className={Qi.num} /><br />
            4번 : <input id='MC_no4' type='text' autocomplete="off" className={Qi.num} /><br />
            5번 : <input id='MC_no5' type='text' autocomplete="off" className={Qi.num} />
        </div>
    );
};

export default MultipleChoice;