import React, {useState} from 'react';
import ToggleBtnPresenter from './ToggleBtnPresenter';

function ToggleBtnContainer(){
    const [isActive, setIsActive] = useState(false);

    const toggleBtnOnClickHandler = (event: React.MouseEvent) => {
        console.log(event);
    }

    return(
        <ToggleBtnPresenter onClickHandler={toggleBtnOnClickHandler} isActive={isActive} />
    );
}

export default ToggleBtnContainer;
