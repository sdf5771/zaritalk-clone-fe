import React from 'react';
import RefundResultPresenter from "./RefundResultPresenter";
import {RefundResultContainerPropsType} from "./type/RefundResultType";

const parseDateWord = (date: number) => {
    if (date && date < 10) {
        const zeroDate = ('00' + date).slice(-2);
        return zeroDate;
    }
    return date;
}

const parseDateFormat = (date: Date) => {
    return date.getFullYear() + ". " + parseDateWord(date.getMonth()+1) + ". " + parseDateWord(date.getDay())
}

function RefundResultContainer({state}: RefundResultContainerPropsType){
    let rentType = state.rentType === "monthlyRent" ? "월세" : state.rentType === "bigDeposit" ? "전세" : "";
    let startDate = parseDateFormat(state.startDate)
    let endDate = parseDateFormat(state.endDate);
    let totalAmount = Number(state.monthlyCost.replaceAll(',', '')) + Number(state.maintenanceCost ? state.maintenanceCost.replaceAll(',', '') : 0);

    const messageButtonClickHandler = (event: React.MouseEvent) => {
        alert('임대인의 전화번호 ' + state.phoneNumber + '으로 문자합니다.');
    }
    const callButtonClickHandler = (event: React.MouseEvent) => {
        alert('임대인의 전화번호 ' + state.phoneNumber + '으로 전화합니다.');
    }

    return(
        <RefundResultPresenter
            state={state}
            rentType={rentType}
            startDate={startDate}
            endDate={endDate}
            totalAmount={totalAmount}
            messageButtonClickHandler={messageButtonClickHandler}
            callButtonClickHandler={callButtonClickHandler}
        />
    );
}

export default RefundResultContainer;
