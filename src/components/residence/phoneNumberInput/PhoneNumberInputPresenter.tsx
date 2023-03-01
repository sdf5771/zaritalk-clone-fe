import React from 'react';
import styles from './PhoneNumberInputPresenter.module.css';
import {PhoneNumberInputPresenterPropsType} from './type/PhoneNumberInputType';

function PhoneNumberInputPresenter({inputRef, onChangeHandler, inputVal, placeholder}: PhoneNumberInputPresenterPropsType){
    return(
        <div className={styles.phone_number_input_root}>
            <input ref={inputRef} onChange={onChangeHandler} value={inputVal} placeholder={placeholder}/>
        </div>
    )
}

export default PhoneNumberInputPresenter;
