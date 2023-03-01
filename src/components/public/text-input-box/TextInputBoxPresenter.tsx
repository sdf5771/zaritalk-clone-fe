import React from 'react';
import {TextInputPresenterPropsType} from './type/TextInputBoxType'
import styles from './TextInputBoxPresenter.module.css';
import {ReactComponent as ArrowRightIcon} from 'assets/images/public/arrow_right.svg'

function TextInputPresenter({componentRef, rootOnClickHandler, textBoxSubTitle, inputPlaceholder, inputOnChangeHandler, inputType, inputValue, isActiveBox, isArrowIcon, isReadOnly}: TextInputPresenterPropsType){
    return(
        <div onClick={rootOnClickHandler} className={`${styles.text_input_box_main} ${isActiveBox ? styles.readonly : ''}`}>
            <div className={styles.text_input_container}>
                <input
                    ref={componentRef}
                    type={inputType ? inputType : 'text'}
                    onChange={inputOnChangeHandler}
                    className={styles.text_input_box_input}
                    placeholder={inputPlaceholder}
                    value={isActiveBox ? '' : inputValue}
                    disabled={isActiveBox ? true : false}
                    readOnly={isReadOnly ? true : false}
                />
                <span className={`${styles.text_input_box_subtitle} ${isActiveBox ? styles.readonly : ''}`}>{textBoxSubTitle}</span>
                {isArrowIcon ? <ArrowRightIcon /> : null}
            </div>
        </div>
    )
}

export default TextInputPresenter;
