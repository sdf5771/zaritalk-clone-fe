import React from 'react';
import IconTextButtonPresenter from './IconTextButtonPresenter';
import {IconTextButtonContainerPropsType} from "./type/IconTextButtonType";

function IconTextButtonContainer({icon, btnTitle}: IconTextButtonContainerPropsType){
    return(
        <IconTextButtonPresenter icon={icon} btnTitle={btnTitle} />
    )
}

export default IconTextButtonContainer;
