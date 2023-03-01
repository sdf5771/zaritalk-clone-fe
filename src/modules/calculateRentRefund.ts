interface RentCalculationResult {
    refundAmount: number;
}

interface RentCalculationParams {
    deposit: string;
    monthlyCost: string;
    rentType: string;
    paymentDeadline: string;
    maintenanceCost: string;
    usingMaintenanceValue: boolean;
}

const calculateRentRefund = (params: RentCalculationParams): RentCalculationResult => {
    const {deposit, monthlyCost, rentType, paymentDeadline, maintenanceCost, usingMaintenanceValue} = params;
    const now = new Date();
    const nowYear = now.getFullYear();
    const maxRefundAmount = 7500000; // 1년 인정 최대 환급금액

    const years = 5;
    const refundAmountPerYear = rentType === "monthlyRent" && nowYear >= 2023 ? 0.17 : 0.12;
    const maxRefundAmountPerYear = maxRefundAmount / years;
    const startYear = nowYear - years + 1;

    let refundAmount = 0;
    for (let year = startYear; year <= nowYear; year++){
        if (rentType === 'bigDeposit'){
            refundAmount += 0; // 전세는 환급금 x
        } else if(rentType === "monthlyRent"){
            const monthlyRent = parseInt(monthlyCost.replace(",", "")) - (usingMaintenanceValue ? parseInt(maintenanceCost.replace(",","")) : 0);
            const yearRefundAmount = monthlyRent * refundAmountPerYear * parseInt(paymentDeadline);
            refundAmount += Math.min(maxRefundAmountPerYear, yearRefundAmount);
        }
    }

    return {
        refundAmount: Math.round(refundAmount * 10) / 10,
    }
}

export default calculateRentRefund;
