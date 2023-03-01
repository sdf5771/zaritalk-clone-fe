import React from 'react';
import {AlertDescriptionContainerPropsType} from "./type/AlertDescriptionType";
import AlertDescriptionPresenter from "./AlertDescriptionPresenter";

function AlertDescriptionContainer({description}:AlertDescriptionContainerPropsType){
    return(
        <AlertDescriptionPresenter description={description} />
    )
}

export default AlertDescriptionContainer;
