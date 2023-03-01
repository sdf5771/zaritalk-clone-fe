import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ToggleBtnPresenter from './ToggleBtnPresenter';
import {RootState} from "reducers/reducers";

function ToggleBtnContainer(){
    const [activeToggle, setActiveToggle] = useState('');
    const rentalTypeToggleClickDispatch = useDispatch();
    const locationRentTypeSelector = useSelector((state: RootState) => state.locationRentTypeReducer)

    useEffect(() => {
        if(locationRentTypeSelector && locationRentTypeSelector['rentType']){
            setActiveToggle(locationRentTypeSelector && locationRentTypeSelector['rentType'])
        }
    },[locationRentTypeSelector['rentType']])

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
