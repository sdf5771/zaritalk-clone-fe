import React, {useEffect, useState} from 'react';
import RefundEstimationDisplayPresenter from "./RefundEstimationDisplayPresenter";
import {useNavigate} from "react-router-dom";
import {RefundEstimationDisplayContainerPropsType, LocationState} from './type/RefundEstimationDisplayType';
import calculateRentRefund from "modules/calculateRentRefund";

function RefundEstimationDisplayContainer({state}: RefundEstimationDisplayContainerPropsType){
    const [refundAmount, setRefundAmount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if(state){
            const {deposit, monthlyCost, rentType, paymentDeadline, maintenanceCost, usingMaintenanceValue} = state;
            const refundResult = calculateRentRefund({
                deposit: deposit,
                monthlyCost: monthlyCost,
                rentType: rentType,
                paymentDeadline: paymentDeadline,
                maintenanceCost: maintenanceCost,
                usingMaintenanceValue: usingMaintenanceValue,
            });
            setRefundAmount(refundResult.refundAmount);
        }
    },[])

    const modifyOnClickHandler = (event: React.MouseEvent) => {
        navigate('/', {state: state})
    }

    return(
        <RefundEstimationDisplayPresenter modifyOnClickHandler={modifyOnClickHandler} refundAmount={refundAmount} />
    )
}

export default RefundEstimationDisplayContainer;
