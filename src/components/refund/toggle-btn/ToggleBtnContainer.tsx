import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import ToggleBtnPresenter from './ToggleBtnPresenter';

function ToggleBtnContainer(){
    const [activeToggle, setActiveToggle] = useState('');
    const rentalTypeToggleClickDispatch = useDispatch();

    const toggleBtnOnClickHandler = (event: React.MouseEvent) => {
        const activeTargetId = event.currentTarget.id;

        setActiveToggle(activeTargetId);

        if(activeTargetId === 'monthlyRent'){
            rentalTypeToggleClickDispatch({type: 'rentalTypeToggleClick', menuName: 'monthlyRent'})
        } else if(activeTargetId === 'bigDeposit'){
            rentalTypeToggleClickDispatch({type: 'rentalTypeToggleClick', menuName: 'bigDeposit'})
        }
    }

    return(
        <ToggleBtnPresenter onClickHandler={toggleBtnOnClickHandler} activeToggle={activeToggle} />
    );
}

export default ToggleBtnContainer;
