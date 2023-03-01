import React from 'react';
import styles from './TitleDescriptionPresenter.module.css';
import {TitleDescriptionPresenterPropsType} from "./type/TitleDescriptionType";

function TitleDescriptionPresenter({title, description, isDescriptionBold}: TitleDescriptionPresenterPropsType){
    return(
        <div className={styles.title_description_root}>
            <span className={styles.title}>{title}</span>
            <span className={`${styles.description} ${isDescriptionBold ? styles.bold : ''}`}>{description}</span>
        </div>
    )
}
export default TitleDescriptionPresenter;
