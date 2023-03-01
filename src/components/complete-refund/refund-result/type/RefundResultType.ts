import {ReactEventHandler} from "react";

export interface LocationState {
    deposit: string;
    monthlyCost: string;
    rentType: string;
    paymentDeadline: string;
    maintenanceCost: string;
    usingMaintenanceValue: boolean;
    startDate: Date;
    endDate: Date;
    address: string,
    detailAddress: string,
    phoneNumber: string,
}

export type RefundResultContainerPropsType = {
    state: LocationState
}

export type RefundResultPresenterPropsType = {
    state: LocationState,
    rentType: string,
    startDate: string,
    endDate: string,
    totalAmount: number,
    messageButtonClickHandler: ReactEventHandler,
    callButtonClickHandler: ReactEventHandler
}
