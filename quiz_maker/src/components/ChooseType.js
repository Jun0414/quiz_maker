import React, { useState } from 'react';

import MultipleChoice from './MultipleChoice';
import Essay from './Essay';
import ShortAnswer from './ShortAnswer';

const ChooseType = ({type}) => {
    console.log({type});
    if (type === 1){
        return <MultipleChoice/>;
    }
    else if (type === 2){
        return <ShortAnswer/>;
    }
    else{
        return <Essay/>;
    }
};

export default ChooseType;