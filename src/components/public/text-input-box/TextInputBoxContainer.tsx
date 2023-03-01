import React, {useState} from 'react';
import TextInputPresenter from './TextInputBoxPresenter';
import TextInputTitleBoxPresenter from "./TextInputTitleBoxPresenter";
import {TextInputBoxContainerPropsType} from './type/TextInputBoxType'

function TextInputBoxContainer({componentRef, rootOnClickHandler, isTitleUse, textBoxTitle, textBoxSubTitle, inputPlaceholder, initialValue, inputType, isActiveBox, isArrowIcon, isReadOnly}: TextInputBoxContainerPropsType){
    const [inputValue, setInputValue] = useState(initialValue ? initialValue :'');


    const inputOnChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const newValue = event.currentTarget.value;

        if(isTitleUse){
            if(inputType === 'number'){
                setInputValue(newValue);
            } else {
                let replaceValue = Number(newValue.replaceAll(',', ''));

                if(isNaN(replaceValue)) {
                    setInputValue('');
                }else {                   //NaN이 아닌 경우
                    const formatValue = replaceValue.toLocaleString('ko-KR')
                    setInputValue(formatValue);
                }
            }
        } else {
            setInputValue(newValue);
        }
    }

    if(isTitleUse){
        return(
            <TextInputTitleBoxPresenter
                isActiveBox={isActiveBox}
                componentRef={componentRef}
                textBoxTitle={textBoxTitle}
                textBoxSubTitle={textBoxSubTitle}
                inputPlaceholder={inputPlaceholder}
                inputType={inputType}
                inputValue={inputValue}
                inputOnChangeHandler={inputOnChangeHandler}
                isArrowIcon={isArrowIcon}
            />
        )
    } else {
        return(
            <TextInputPresenter
                rootOnClickHandler={rootOnClickHandler}
                isReadOnly={isReadOnly}
                isActiveBox={isActiveBox}
                componentRef={componentRef}
                textBoxTitle={textBoxTitle}
                textBoxSubTitle={textBoxSubTitle}
                inputPlaceholder={inputPlaceholder}
                inputType={inputType}
                inputValue={inputValue}
                inputOnChangeHandler={inputOnChangeHandler}
                isArrowIcon={isArrowIcon}
            />
        )
    }
}

export default TextInputBoxContainer;
