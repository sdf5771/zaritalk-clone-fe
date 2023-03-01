import React from 'react';
import {TextInputBoxPresenterPropsType} from './type/TextInputBoxType'
import styles from './TextInputBoxPresenter.module.css';
import {ReactComponent as ArrowRightIcon} from 'assets/images/public/arrow_right.svg'

function TextInputBoxPresenter({componentRef, textBoxTitle, textBoxSubTitle, inputPlaceholder, inputOnChangeHandler, inputType, inputValue, isActiveBox, isArrowIcon}: TextInputBoxPresenterPropsType){
    return(
        <div className={`${styles.text_input_box_main} ${isActiveBox ? styles.readonly : ''}`}>
            <span className={styles.text_input_box_title}>{textBoxTitle}</span>
            <div className={styles.text_input_container}>
                <input
                    ref={componentRef}
                    type={inputType ? inputType : 'text'}
                    onChange={inputOnChangeHandler}
                    className={styles.text_input_box_input}
                    placeholder={inputPlaceholder}
                    value={isActiveBox ? '' : inputValue}
                    disabled={isActiveBox ? true : false}
                    min={inputType === 'number' ? '1' : ''}
                    max={inputType === 'number' ? '31' : ''}
                    step={inputType === 'number' ? '1' : ''}
                />
                <span className={`${styles.text_input_box_subtitle} ${isActiveBox ? styles.readonly : ''}`}>{textBoxSubTitle}</span>
                {isArrowIcon ? <ArrowRightIcon className={styles.arrow_right}/> : null}
            </div>
        </div>
    )
}

export default TextInputBoxPresenter;
