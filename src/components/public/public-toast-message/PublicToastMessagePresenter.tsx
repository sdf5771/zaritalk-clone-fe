import React from 'react';
import styles from './PublicToastMessagePresenter.module.css';

interface MessageProps {
    message : string;
}

const PublicToastMessagePresenter: React.FC<MessageProps> = ({message}) => {
    return(
        <div className={styles.public_msg_root}>
            <span>{message}</span>
        </div>
    )
}

export default PublicToastMessagePresenter;
