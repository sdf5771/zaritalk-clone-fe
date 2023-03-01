import React, {useState, useEffect} from 'react';
import PublicToastMessagePresenter from "./PublicToastMessagePresenter";

interface MessageProps{
    message:string;
    removeTimeout:number; // remove ms ago dom tree
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PublicToastMessageContainer: React.FC<MessageProps> = ({message, removeTimeout,visible,setVisible}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, removeTimeout);

        return () => clearTimeout(timer);
    }, [visible, removeTimeout, setVisible])

    if(!visible){
        return <></>
    }

    return(
        <PublicToastMessagePresenter message={message} />
    )
}

export default PublicToastMessageContainer;
