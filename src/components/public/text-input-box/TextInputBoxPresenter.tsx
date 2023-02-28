import React, {RefObject} from 'react';
import {TextInputBoxPresenterPropsType} from './type/TextInputBoxType'
import styles from './TextInputBoxPresenter.module.css';

function TextInputBoxPresenter({componentRef, textBoxTitle, textBoxSubTitle, inputPlaceholder, inputValue}: TextInputBoxPresenterPropsType){
    return(
        <div ref={componentRef} className={styles.text_input_box_main}>
            <span className={styles.text_input_box_title}>{textBoxTitle}</span>
            <input className={styles.text_input_box_input} placeholder={inputPlaceholder} value={inputValue}/>
            <span className={styles.text_input_box_subtitle}>{textBoxSubTitle}</span>
        </div>
    )
}

export default TextInputBoxPresenter;
