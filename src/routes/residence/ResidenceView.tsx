import React, {useEffect, useRef, useState} from 'react';
import styles from './ResidenceView.module.css'
import styled from 'styled-components';
import {useLocation, useNavigate} from "react-router-dom";
import RefundEstimationDisplayContainer
    from "components/residence/refund-esmimation-display/RefundEstimationDisplayContainer";
import AddressInputContainer from "components/residence/addressInput/AddressInputContainer";
import AlertDescriptionContainer from "components/public/alert_description/AlertDescriptionContainer";
import TextInputBoxContainer from "components/public/text-input-box/TextInputBoxContainer";
import BlueTypeBtn from "components/public/blue-type-btn/BlueTypeBtn";
import PhoneNumberInputContainer from "components/residence/phoneNumberInput/PhoneNumberInputContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/reducers";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import refValueReturn from "modules/refValueReturn";
import PublicToastMessageContainer from "components/public/public-toast-message/PublicToastMessageContainer";

const SDatePicker = styled(DatePicker)`
    padding: 0 12px;
    width: 136px;
    height: 44px;
    background-color: #ffffff;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    font-family: 'Apple SD Gothic Neo';
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
`;

function ResidenceView(){
    const addressSelector = useSelector((state: RootState) => state.addressValueReducer);
    const usernameRef = useRef<HTMLInputElement>(null);
    const detailAddressRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const [visibleToastMsg, setVisibleToastMsg] = useState(false);
    const [visibleDatepickContainer, setVisibleDatepickContainer] = useState(false);
    const [visibleConfirmContainer, setVisibleConfirmContainer] = useState(false);
    const [startDate, setStartDate] = useState<Date | string>('');
    const [endDate, setEndDate] = useState<Date | string>('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(addressSelector['addressValue'] !== ''){
            setVisibleDatepickContainer(true);
        }
        if(startDate !== '' && endDate !== ''){
            setVisibleConfirmContainer(true);
        }
    }, [addressSelector['addressValue'], startDate, endDate])

    const checkInputValues = (startDate: Date | string, endDate: Date | string, address: string, detailAddress: string, phoneNumber:string) => {
        let replacePhoneNumberVal = phoneNumber.replaceAll("-", "");

        const checkObj = {
            startDate: startDate ? true : false,
            endDate: endDate ? true : false,
            address: address.length !== 0,
            detailAddress: detailAddress.length !== 0,
            phoneNumber: replacePhoneNumberVal.length >= 10 && replacePhoneNumberVal.length <= 11,
        };

        return Object.values(checkObj).every((value) => value);
    }

    const completeOnClickHandler = (event: React.MouseEvent) => {
        let detailAddressRefValue = refValueReturn(detailAddressRef);
        let phoneNumberRefValue = refValueReturn(phoneNumberRef);
        let isValid = checkInputValues(startDate, endDate, addressSelector['addressValue'], detailAddressRefValue, phoneNumberRefValue)

        if(isValid){
            navigate('/refund_complete',
                { state: {
                        deposit: location.state.deposit ? location.state.deposit : '',
                        monthlyCost: location.state.monthlyCost ? location.state.monthlyCost : '',
                        rentType: location.state.rentType ? location.state.rentType : '',
                        paymentDeadline: location.state.paymentDeadline ? location.state.paymentDeadline : '',
                        maintenanceCost: location.state.maintenanceCost ? location.state.maintenanceCost : '',
                        usingMaintenanceValue: location.state.usingMaintenanceValue,
                        startDate: startDate,
                        endDate: endDate,
                        address: addressSelector['addressValue'],
                        detailAddress: detailAddressRef.current ? detailAddressRef.current.value : '',
                        phoneNumber: phoneNumberRef.current ? phoneNumberRef.current.value : '',
                    } })
        } else {
            setVisibleToastMsg(true);
        }
    }

    return(
        <div className={styles.residence_view_root}>
            <div className={styles.residence_view_main}>
                <div className={styles.residence_view_header}>
                    <RefundEstimationDisplayContainer state={location.state} />
                </div>
                <div className={styles.residence_view_body}>
                    <div className={styles.address_container}>
                        <span>거주 건물</span>
                        <AddressInputContainer />
                        <AlertDescriptionContainer description="과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)"/>
                    </div>
                    <div className={styles.residence_input_container}>
                        <div>
                            <span>호실</span>
                            <TextInputBoxContainer
                                componentRef={detailAddressRef}
                                textBoxSubTitle='호'
                                inputPlaceholder='예) 101'
                            />
                        </div>
                        <div>
                            <span>세입자(본인) 이름</span>
                            <TextInputBoxContainer
                                componentRef={usernameRef}
                                inputPlaceholder='예) 홍길동'
                            />
                        </div>
                    </div>
                    {visibleDatepickContainer ?
                        <div className={styles.residence_datepick_container}>
                            <div className={styles.residence_input_container}>
                                <div>
                                    <span>계약시작일</span>
                                    <SDatePicker
                                        dateFormat="yyyy-MM-dd"
                                        selected={startDate}
                                        onChange={(date: Date) => setStartDate(date)}
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="선택해주세요."
                                    />
                                </div>
                                <div>
                                    <span>계약종료일</span>
                                    <SDatePicker
                                        dateFormat="yyyy-MM-dd"
                                        selected={endDate}
                                        onChange={(date: Date) => setEndDate(date)}
                                        startDate={startDate}
                                        endDate={endDate}
                                        placeholderText="선택해주세요."
                                    />
                                </div>
                            </div>
                            <div className={styles.alert_container}>
                                <AlertDescriptionContainer description="정확히 모를 경우 임의로 작성 후 수정요청 하세요."/>
                            </div>
                        </div> : null}
                    {visibleConfirmContainer ?
                        <>
                            <div className={styles.residence_input_container}>
                                <div>
                                    <span>임대인 휴대폰 번호</span>
                                    <PhoneNumberInputContainer inputRef={phoneNumberRef} placeholder="임대인(현재 집주인) 휴대폰 번호를 입력해주세요."/>
                                    <AlertDescriptionContainer description="임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수 있습니다."/>
                                </div>
                            </div>
                            <div className={styles.text_container}><span>세계 최고 AWS 보안으로 모든 정보는 안전하게 보호됩니다.</span></div>
                            <div className={styles.residence_view_btn_container}>
                                <BlueTypeBtn btnTitle='완료' onClickHandler={completeOnClickHandler}/>
                            </div>
                        </>
                        : null
                    }
                </div>
            </div>
            {visibleToastMsg &&
                <PublicToastMessageContainer
                    message='모든 정보를 정확하게 입력해주세요.'
                    removeTimeout={1500}
                    visible={visibleToastMsg}
                    setVisible={setVisibleToastMsg}
                />}
        </div>
    )
}

export default ResidenceView;
