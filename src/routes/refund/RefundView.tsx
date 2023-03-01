import React, {useState, useRef} from 'react';
import styles from 'routes/refund/RefundView.module.css'
import ToggleBtnContainer from "components/refund/toggle-btn/ToggleBtnContainer";
import {ReactComponent as AlertLogo} from 'assets/images/refund/alert_logo.svg';
import BlueTypeBtn from "components/public/blue-type-btn/BlueTypeBtn";
import TextInputBoxContainer from "components/public/text-input-box/TextInputBoxContainer";
import {ReactComponent as CheckBoxDefault} from 'assets/images/refund/check_box_default.svg'
import {ReactComponent as CheckBoxActive} from 'assets/images/refund/check_box_active.svg'
import {RootState} from "reducers/reducers";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import PublicToastMessageContainer from "../../components/public/public-toast-message/PublicToastMessageContainer";

function RefundView(){
    const [visibleToastMsg, setVisibleToastMsg] = useState(false);
    const depositInputRef = useRef<HTMLInputElement>(null);
    const maintenanceCostInputRef = useRef<HTMLInputElement>(null);
    const monthlyCostInputRef = useRef<HTMLInputElement>(null);
    const paymentDeadlineInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const rentalTypeToggleClickSelector = useSelector((state: RootState) => state.rentalTypeToggleClickReducer)

    const [isCheck, setIsCheck] = useState(false);

    const checkBoxOnClickHandler = (event: React.MouseEvent) => {
        setIsCheck(!isCheck);
    }

    const checkInputValues = (depositInputRefValue: string, maintenanceCostInputRefValue: string, monthlyCostInputRefValue: string, paymentDeadlineInputRefValue: string, usingMaintenanceValue:boolean) => {
        const checkObj = {
            maintenanceCost: !usingMaintenanceValue,
            deposit: depositInputRefValue.length !== 0,
            monthlyCost: monthlyCostInputRefValue.length !== 0,
            paymentDeadline: paymentDeadlineInputRefValue.length !== 0,
        };

        return Object.values(checkObj).every((value) => value);
    }

    const refValueReturn = (refData: React.RefObject<HTMLInputElement>) => {
        if(refData && refData.current) {
            return refData.current.value
        } else {
            return ''
        }
    }

    const completeBtnOnClickHandler = (event: React.MouseEvent) => {
        const depositInputRefValue = refValueReturn(depositInputRef);
        const maintenanceCostInputRefValue = refValueReturn(maintenanceCostInputRef);
        const monthlyCostInputRefValue = refValueReturn(monthlyCostInputRef);
        const paymentDeadlineInputRefValue = refValueReturn(paymentDeadlineInputRef);
        const usingMaintenanceValue = isCheck;

        let checkAllValueResult = checkInputValues(depositInputRefValue,maintenanceCostInputRefValue,monthlyCostInputRefValue,paymentDeadlineInputRefValue,usingMaintenanceValue)

        if(!checkAllValueResult){
            setVisibleToastMsg(true);
        } else {
            navigate('/residence',
                { state: {
                        deposit: depositInputRefValue,
                        monthlyCost: monthlyCostInputRefValue,
                        rentType: rentalTypeToggleClickSelector['activeMenu'],
                        paymentDeadline: paymentDeadlineInputRefValue,
                        maintenanceCost: maintenanceCostInputRefValue,
                        usingMaintenanceValue: usingMaintenanceValue,
                    } }
            );
        }
    }
    return(
        <div className={styles.refund_view_main}>
            <div className={styles.refund_view_body}>
                <div className={styles.refund_view_title}>
                    <span>전월세 비용을 입력하시면 <br /> 내 월세 환급금을 알려드려요 👇</span>
                </div>
                <div className={styles.refund_view_rental_type_container}>
                    <span>임대 유형</span>
                    <ToggleBtnContainer />
                </div>
                {rentalTypeToggleClickSelector['activeMenu'] !== '' ?
                    <div className={styles.refund_view_body}>
                    <div className={styles.refund_view_description_container}>
                        <span className={styles.description_title}>임대비용</span>
                        <div>
                            <div><AlertLogo /><span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</span></div>
                            <div><AlertLogo /><span>비용 입력시 고지서가 무료로 제공됩니다.</span></div>
                        </div>
                    </div>
                    <div className={styles.refund_view_input_container}>
                        {rentalTypeToggleClickSelector['activeMenu'] === "monthlyRent" ?
                            <div>
                                <TextInputBoxContainer
                                    componentRef={depositInputRef}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                                <TextInputBoxContainer
                                    componentRef={monthlyCostInputRef}
                                    textBoxTitle='월 임대료'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                            </div> :
                            <div>
                                <TextInputBoxContainer
                                    componentRef={depositInputRef}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                            </div>
                        }
                        <div>
                            <TextInputBoxContainer
                                isActiveBox={isCheck}
                                componentRef={maintenanceCostInputRef}
                                textBoxTitle='월 관리비'
                                textBoxSubTitle='만원'
                                inputPlaceholder='0'
                            />
                            <TextInputBoxContainer
                                componentRef={paymentDeadlineInputRef}
                                inputType="number"
                                textBoxTitle='임대료 납부일'
                                textBoxSubTitle='일'
                                inputPlaceholder=''
                                isArrowIcon={true}
                            />
                        </div>
                        <div onClick={checkBoxOnClickHandler} className={styles.check_box_container}>
                            {isCheck ? <CheckBoxActive /> : <CheckBoxDefault />}
                            <span className={`${isCheck ? styles.active : ''}`}>관리비는 관리실에 따로 납부하거나 없습니다.</span>
                        </div>
                    </div>
                    <div className={styles.refund_view_btn_container}>
                        <BlueTypeBtn btnTitle='금액 확인하기 👆' onClickHandler={completeBtnOnClickHandler}/>
                    </div>
                    <div className={styles.refund_view_explain_container}>
                        <span>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</span>
                    </div>
                </div> : null}
            </div>
            {visibleToastMsg &&
                <PublicToastMessageContainer
                    message='모든 정보를 입력해주세요.'
                    removeTimeout={1500}
                    visible={visibleToastMsg}
                    setVisible={setVisibleToastMsg}
                />}
        </div>
    );
}

export default RefundView
