import React, {useState} from 'react';
import PhoneNumberInputPresenter from "./PhoneNumberInputPresenter";
import {PhoneNumberInputContainerPropsType} from './type/PhoneNumberInputType';

function PhoneNumberInputContainer({inputRef, placeholder}: PhoneNumberInputContainerPropsType){
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        const newValue = event.currentTarget.value;
        setInputValue(newValue)
    }

    return(
        <PhoneNumberInputPresenter
            inputRef={inputRef}
            onChangeHandler={onChangeHandler}
            inputVal={inputValue}
            placeholder={placeholder}
            />
    )
}

export default PhoneNumberInputContainer;
