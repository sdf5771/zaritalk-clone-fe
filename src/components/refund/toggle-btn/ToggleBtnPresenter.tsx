import React from 'react';
import styles from './ToggleBtnPresenter.module.css';

function ToggleBtnPresenter(){
    return(
        <div className={styles.toggle_btn_main}>
            <div>
                <span>월세</span>
            </div>
            <div>
                <span>전세 commit test</span>
            </div>
        </div>
    );
}

export default ToggleBtnPresenter;
