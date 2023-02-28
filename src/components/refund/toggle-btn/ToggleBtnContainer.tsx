import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ToggleBtnPresenter from './ToggleBtnPresenter';
import {useCookies} from "react-cookie";

function ToggleBtnContainer(){
    const [cookies, setCookie, removeCookie] = useCookies(['rentType']);
    const [activeToggle, setActiveToggle] = useState('');
    const rentalTypeToggleClickDispatch = useDispatch();

    useEffect(() => {
        if(cookies.rentType){
            setActiveToggle(cookies.rentType)
            rentalTypeToggleClickDispatch({type: 'rentalTypeToggleClick', menuName: cookies.rentType})
        }
    },[])

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
