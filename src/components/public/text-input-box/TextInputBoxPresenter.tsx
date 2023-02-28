import React, {RefObject} from 'react';
import {TextInputBoxPresenterPropsType} from './type/TextInputBoxType'
import styles from './TextInputBoxPresenter.module.css';

function TextInputBoxPresenter({componentRef, textBoxTitle, textBoxSubTitle, inputPlaceholder, inputOnChangeHandler, inputValue, isActiveBox}: TextInputBoxPresenterPropsType){
    return(
        <div ref={componentRef} className={`${styles.text_input_box_main} ${isActiveBox ? styles.readonly : ''}`}>
            <span className={styles.text_input_box_title}>{textBoxTitle}</span>
            <div className={styles.text_input_container}>
                <input onChange={inputOnChangeHandler} className={styles.text_input_box_input} placeholder={inputPlaceholder} value={isActiveBox ? '' : inputValue} readOnly={isActiveBox ? true : false}/>
                <span className={`${styles.text_input_box_subtitle} ${isActiveBox ? styles.readonly : ''}`}>{textBoxSubTitle}</span>
            </div>
        </div>
    )
}

export default TextInputBoxPresenter;
