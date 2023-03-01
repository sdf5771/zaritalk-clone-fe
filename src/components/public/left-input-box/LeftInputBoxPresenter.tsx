import React from 'react';
import styles from './LeftInputBoxPresenter.module.css';
import {LeftInputBoxPresenterPropsType} from "./type/LeftInputBoxType";

function LeftInputBoxPresenter({placeholder, inputValue, subTitle}: LeftInputBoxPresenterPropsType){
    return(
        <div className={styles.left_input_box_root}>
            <input />
            <span>{subTitle}</span>
        </div>
    )
}

export default LeftInputBoxPresenter;
