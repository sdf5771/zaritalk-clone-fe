import React, {useState} from 'react';
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
import { useCookies } from 'react-cookie';

function RefundView(){
    const [cookies, setCookie, removeCookie] = useCookies(['rentType']);
    const navigate = useNavigate();
    const rentalTypeToggleClickSelector = useSelector((state: RootState) => state.rentalTypeToggleClickReducer)
    console.log('cookies ', cookies.rentType);
    const [isCheck, setIsCheck] = useState(false);

    const checkBoxOnClickHandler = (event: React.MouseEvent) => {
        setIsCheck(!isCheck);
    }

    const completeBtnOnClickHandler = (event: React.MouseEvent) => {
        setCookie('rentType', rentalTypeToggleClickSelector['activeMenu'])
        navigate('/residence');
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
                {rentalTypeToggleClickSelector['activeMenu'] !== '' || cookies.rentType ?
                    <div className={styles.refund_view_body}>
                    <div className={styles.refund_view_description_container}>
                        <span className={styles.description_title}>임대비용</span>
                        <div>
                            <div><AlertLogo /><span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</span></div>
                            <div><AlertLogo /><span>비용 입력시 고지서가 무료로 제공됩니다.</span></div>
                        </div>
                    </div>
                    <div className={styles.refund_view_input_container}>
                        {rentalTypeToggleClickSelector['activeMenu'] === "monthlyRent" || cookies.rentType === "monthlyRent" ?
                            <div>
                                <TextInputBoxContainer
                                    componentRef={null}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                                <TextInputBoxContainer
                                    componentRef={null}
                                    textBoxTitle='월 임대료'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                            </div> :
                            <div>
                                <TextInputBoxContainer
                                    componentRef={null}
                                    textBoxTitle='보증금'
                                    textBoxSubTitle='만원'
                                    inputPlaceholder='0'
                                />
                            </div>
                        }
                        <div>
                            <TextInputBoxContainer
                                isActiveBox={isCheck}
                                componentRef={null}
                                textBoxTitle='월 관리비'
                                textBoxSubTitle='만원'
                                inputPlaceholder='0'
                            />
                            <TextInputBoxContainer
                                componentRef={null}
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
        </div>
    );
}

export default RefundView
