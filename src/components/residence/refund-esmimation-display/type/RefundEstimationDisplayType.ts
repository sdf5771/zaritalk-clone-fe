import {ReactEventHandler} from "react";

export interface LocationState {
    deposit: string;
    monthlyCost: string;
    rentType: string;
    paymentDeadline: string;
    maintenanceCost: string;
    usingMaintenanceValue: boolean;
}

export type RefundEstimationDisplayContainerPropsType = {
    state: LocationState;
}
export type RefundEstimationDisplayPresenterPropsType = {
    modifyOnClickHandler: ReactEventHandler,
    refundAmount: number,
}
