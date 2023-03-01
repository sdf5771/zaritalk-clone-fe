import React, {useState, useRef, useEffect} from 'react';
import styles from 'routes/refund/RefundView.module.css'
import ToggleBtnContainer from "components/refund/toggle-btn/ToggleBtnContainer";
import {ReactComponent as AlertLogo} from 'assets/images/refund/alert_logo.svg';
import BlueTypeBtn from "components/public/blue-type-btn/BlueTypeBtn";
import TextInputBoxContainer from "components/public/text-input-box/TextInputBoxContainer";
import {ReactComponent as CheckBoxDefault} from 'assets/images/refund/check_box_default.svg'
import {ReactComponent as CheckBoxActive} from 'assets/images/refund/check_box_active.svg'
import {RootState} from "reducers/reducers";
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import PublicToastMessageContainer from "../../components/public/public-toast-message/PublicToastMessageContainer";
import AlertDescriptionContainer from "components/public/alert_description/AlertDescriptionContainer";
import refValueReturn from 'modules/refValueReturn';
function RefundView(){
    const location = useLocation();
    const [visibleToastMsg, setVisibleToastMsg] = useState(false);
    const depositInputRef = useRef<HTMLInputElement>(null);
    const maintenanceCostInputRef = useRef<HTMLInputElement>(null);
    const monthlyCostInputRef = useRef<HTMLInputElement>(null);
    const paymentDeadlineInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const rentalTypeToggleClickSelector = useSelector((state: RootState) => state.rentalTypeToggleClickReducer)
    const locationRentTypeDispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState(null);
    const [isCheck, setIsCheck] = useState(false);
    useEffect(() => {
        if(location.state && location.state['rentType']){
            setActiveMenu(location.state['rentType']);
            setIsCheck(location.state['usingMaintenanceValue'])
            locationRentTypeDispatch({type: 'location rentType', rentType: location.state['rentType']})
        }
    },[])

    useEffect(() => {
        if(rentalTypeToggleClickSelector['activeMenu'] !== ''){
            setActiveMenu(rentalTypeToggleClickSelector['activeMenu']);
        }
    },[rentalTypeToggleClickSelector['activeMenu']])

    const checkBoxOnClickHandler = (event: React.MouseEvent) => {
        setIsCheck(!isCheck);
    }

    const checkInputValues = (activeMenu: string, depositInputRefValue: string, maintenanceCostInputRefValue: string, monthlyCostInputRefValue: string, paymentDeadlineInputRefValue: string, usingMaintenanceValue:boolean) => {
        const checkObj = {
            maintenanceCost: usingMaintenanceValue ? maintenanceCostInputRefValue.length === 0 : maintenanceCostInputRefValue.length !== 0,
            deposit: depositInputRefValue.length !== 0,
            monthlyCost: activeMenu === 'monthlyRent' ? monthlyCostInputRefValue.length !== 0 : true,
            paymentDeadline: paymentDeadlineInputRefValue.length !== 0,
        };

        return Object.values(checkObj).every((value) => value);
    }

    const completeBtnOnClickHandler = (event: React.MouseEvent) => {
        const depositInputRefValue = refValueReturn(depositInputRef);
        const maintenanceCostInputRefValue = refValueReturn(maintenanceCostInputRef);
        const monthlyCostInputRefValue = refValueReturn(monthlyCostInputRef);
        const paymentDeadlineInputRefValue = refValueReturn(paymentDeadlineInputRef);
        const usingMaintenanceValue = isCheck;

        let checkAllValueResult = checkInputValues(rentalTypeToggleClickSelector['activeMenu'], depositInputRefValue,maintenanceCostInputRefValue,monthlyCostInputRefValue,paymentDeadlineInputRefValue,usingMaintenanceValue)

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
                {activeMenu ?
                    <div className={styles.refund_view_body}>
                    <div className={styles.refund_view_description_container}>
                        <span className={styles.description_title}>임대비용</span>
                        <div>
                            <AlertDescriptionContainer description="천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요." />
                            <AlertDescriptionContainer description="비용 입력시 고지서가 무료로 제공됩니다." />
                        </div>
                    </div>
                    <div className={styles.refund_view_input_container}>
                        {activeMenu === 'monthlyRent' ?
                            <div>
                                <TextInputBoxContainer
                                    componentRef={depositInputRef}
                                    isTitleUse={true}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                    initialValue={location.state && location.state['deposit'] ? location.state['deposit'] : ''}
                                />
                                <TextInputBoxContainer
                                    componentRef={monthlyCostInputRef}
                                    isTitleUse={true}
                                    textBoxTitle='월 임대료'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                    initialValue={location.state && location.state['monthlyCost'] ? location.state['monthlyCost'] : ''}
                                />
                            </div> :
                            <div>
                                <TextInputBoxContainer
                                    componentRef={depositInputRef}
                                    isTitleUse={true}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                    initialValue={location.state && location.state['deposit'] ? location.state['deposit'] : ''}
                                />
                            </div>
                        }
                        <div>
                            <TextInputBoxContainer
                                isActiveBox={isCheck}
                                componentRef={maintenanceCostInputRef}
                                isTitleUse={true}
                                textBoxTitle='월 관리비'
                                textBoxSubTitle='만원'
                                inputPlaceholder='0'
                                initialValue={location.state && location.state['maintenanceCost'] ? location.state['maintenanceCost'] : ''}
                            />
                            <TextInputBoxContainer
                                componentRef={paymentDeadlineInputRef}
                                inputType="number"
                                isTitleUse={true}
                                textBoxTitle='임대료 납부일'
                                textBoxSubTitle='일'
                                inputPlaceholder=''
                                isArrowIcon={true}
                                initialValue={location.state && location.state['paymentDeadline'] ? location.state['paymentDeadline'] : ''}
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
