import React, {ReactEventHandler, RefObject} from 'react';
import styles from './ToggleBtnPresenter.module.css';

type ToggleBtnPresenterPropsType = {
    onClickHandler: ReactEventHandler,
    isActive: boolean,
}

function ToggleBtnPresenter({ onClickHandler, isActive}:ToggleBtnPresenterPropsType){
    return(
        <div className={styles.toggle_btn_main}>
            <div id="monthlyRent" onClick={onClickHandler} className={styles.active}>
                <span>월세</span>
            </div>
            <div id="bigDeposit" onClick={onClickHandler}>
                <span>전세</span>
            </div>
        </div>
    );
}

export default ToggleBtnPresenter;
