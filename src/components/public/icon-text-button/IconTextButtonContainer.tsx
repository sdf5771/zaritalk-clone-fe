import React from 'react';
import IconTextButtonPresenter from './IconTextButtonPresenter';
import {IconTextButtonContainerPropsType} from "./type/IconTextButtonType";

function IconTextButtonContainer({ btnTitle, onClickHandler, iconType}: IconTextButtonContainerPropsType){
    return(
        <IconTextButtonPresenter iconType={iconType} btnTitle={btnTitle} onClickHandler={onClickHandler} />
    )
}

export default IconTextButtonContainer;
