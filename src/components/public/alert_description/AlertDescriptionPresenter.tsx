import React from 'react';
import styles from "./AlertDescriptionPresenter.module.css";
import {ReactComponent as AlertLogo} from "assets/images/refund/alert_logo.svg";
import {AlertDescriptionPresenterPropsType} from "./type/AlertDescriptionType";

function AlertDescriptionPresenter({description}:AlertDescriptionPresenterPropsType){
    return(
        <div className={styles.alert_description}>
            <AlertLogo className={styles.alert_logo}/>
            <span>{description}</span>
        </div>
    )
}

export default AlertDescriptionPresenter;
