import React from 'react';
import RefundEstimationDisplayPresenter from "./RefundEstimationDisplayPresenter";
import {useNavigate} from "react-router-dom";

function RefundEstimationDisplayContainer(){
    const navigate = useNavigate();
    const modifyOnClickHandler = (event: React.MouseEvent) => {
        navigate('/')
    }

    return(
        <RefundEstimationDisplayPresenter modifyOnClickHandler={modifyOnClickHandler} />
    )
}

export default RefundEstimationDisplayContainer;
