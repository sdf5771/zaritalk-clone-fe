import React from 'react';
import styles from './IconTextButtonPresenter.module.css';
import {IconTextButtonPresenterPropsType} from "./type/IconTextButtonType";
import {ReactComponent as MailIcon} from 'assets/images/public/mail_icon.svg';
import {ReactComponent as CallIcon} from 'assets/images/public/call_icon.svg';

function IconTextButtonPresenter({iconType, btnTitle, onClickHandler}: IconTextButtonPresenterPropsType){
    return(
        <div onClick={onClickHandler} className={styles.icon_text_button_root}>
            {iconType === 'call' ? <CallIcon /> : iconType === 'message' ? <MailIcon /> : null}
            <span>{btnTitle}</span>
        </div>
    )
}

export default IconTextButtonPresenter;
