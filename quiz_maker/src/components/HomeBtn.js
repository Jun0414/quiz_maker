import React from 'react';
import ho from './HomeBtn.module.css';

const HomeBtn = () => {
    return (
        <button className={ho.title} onClick={() => alert('홈화면으로 이동')}>
            호형호제
        </button>
    );
};

export default HomeBtn;