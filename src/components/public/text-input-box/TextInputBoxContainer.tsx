import React from 'react';
import TextInputBoxPresenter from "./TextInputBoxPresenter";
import {TextInputBoxContainerPropsType} from './type/TextInputBoxType'

function TextInputBoxContainer({componentRef, textBoxTitle, textBoxSubTitle, inputPlaceholder, inputValue, isActiveBox}: TextInputBoxContainerPropsType){
    return(
        <TextInputBoxPresenter
            isActiveBox={isActiveBox}
            componentRef={componentRef}
            textBoxTitle={textBoxTitle}
            textBoxSubTitle={textBoxSubTitle}
            inputPlaceholder={inputPlaceholder}
            inputValue={inputValue}
        />
    )
}

export default TextInputBoxContainer;
