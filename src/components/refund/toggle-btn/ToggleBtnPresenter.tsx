import React, {ReactEventHandler, RefObject} from 'react';
import styles from './ToggleBtnPresenter.module.css';

type ToggleBtnPresenterPropsType = {
    onClickHandler: ReactEventHandler,
    activeToggle: string,
}

function ToggleBtnPresenter({ onClickHandler, activeToggle}:ToggleBtnPresenterPropsType){
    return(
        <div className={styles.toggle_btn_main}>
            <div id="monthlyRent" onClick={onClickHandler} className={`${activeToggle === 'monthlyRent' ? styles.active : ''}`}>
                <span>월세</span>
            </div>
            <div id="bigDeposit" onClick={onClickHandler} className={`${activeToggle === 'bigDeposit' ? styles.active : ''}`}>
                <span>전세</span>
            </div>
        </div>
    );
}

export default ToggleBtnPresenter;
