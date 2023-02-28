import React, {useState} from 'react';
import TextInputBoxPresenter from "./TextInputBoxPresenter";
import {TextInputBoxContainerPropsType} from './type/TextInputBoxType'

function TextInputBoxContainer({componentRef, textBoxTitle, textBoxSubTitle, inputPlaceholder, isActiveBox}: TextInputBoxContainerPropsType){
    const [inputValue, setInputValue] = useState('');
    const inputOnChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        
        const newValue = event.currentTarget.value;
        let replaceValue = Number(newValue.replaceAll(',', ''));

        if(isNaN(replaceValue)) {
            setInputValue('');
        }else {                   //NaN이 아닌 경우
            const formatValue = replaceValue.toLocaleString('ko-KR')
            setInputValue(formatValue);
        }
    }

    return(
        <TextInputBoxPresenter
            isActiveBox={isActiveBox}
            componentRef={componentRef}
            textBoxTitle={textBoxTitle}
            textBoxSubTitle={textBoxSubTitle}
            inputPlaceholder={inputPlaceholder}
            inputValue={inputValue}
            inputOnChangeHandler={inputOnChangeHandler}
        />
    )
}

export default TextInputBoxContainer;
