import React, {ReactEventHandler} from 'react';
import styles from './BlueTypeBtn.module.css';

type BlueBtnPropsType = {
    btnTitle: string,
    onClickHandler: ReactEventHandler,
}

function BlueTypeBtn({btnTitle, onClickHandler} : BlueBtnPropsType){
    return(
        <button className={styles.btn_root} onClick={onClickHandler}>{btnTitle}</button>
    )
}

export default BlueTypeBtn;
