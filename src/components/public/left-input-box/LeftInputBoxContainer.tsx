import React from 'react';
import LeftInputBoxPresenter from './LeftInputBoxPresenter';
import {LeftInputBoxContainerPropsType} from "./type/LeftInputBoxType";

function LeftInputBoxContainer({placeholder, inputValue, subTitle}: LeftInputBoxContainerPropsType){
    return(
        <LeftInputBoxPresenter
            placeholder={placeholder}
            inputValue={inputValue}
            subTitle={subTitle}
        />
    )
}

export default LeftInputBoxContainer;
