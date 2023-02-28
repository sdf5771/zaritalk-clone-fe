import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import ToggleBtnPresenter from './ToggleBtnPresenter';

function ToggleBtnContainer(){
    const [isActive, setIsActive] = useState(false);
    const monthlyRentRef = useRef(null);
    const bigDepositRef = useRef(null);
    const rentalTypeToggleClickDispatch = useDispatch();

    const toggleBtnOnClickHandler = (event: React.MouseEvent) => {
        const activeTargetId = event.currentTarget.id;

        if(activeTargetId === 'monthlyRent'){
            rentalTypeToggleClickDispatch({type: 'rentalTypeToggleClick', menuName: 'monthlyRent'})
        } else if(activeTargetId === 'bigDeposit'){
            rentalTypeToggleClickDispatch({type: 'rentalTypeToggleClick', menuName: 'bigDeposit'})
        }
    }

    return(
        <ToggleBtnPresenter onClickHandler={toggleBtnOnClickHandler} isActive={isActive} />
    );
}

export default ToggleBtnContainer;
