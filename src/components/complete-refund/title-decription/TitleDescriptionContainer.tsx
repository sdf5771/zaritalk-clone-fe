import React from 'react';
import TitleDescriptionPresenter from "./TitleDescriptionPresenter";
import {TitleDescriptionContainerPropsType} from "./type/TitleDescriptionType";

function TitleDescriptionContainer({title, description, isDescriptionBold}: TitleDescriptionContainerPropsType){
    return(
        <TitleDescriptionPresenter title={title} description={description} isDescriptionBold={isDescriptionBold} />
    )
}
export default TitleDescriptionContainer;
