import React from 'react';
import styles from 'routes/refund/RefundView.module.css'
import ToggleBtnContainer from "components/refund/toggle-btn/ToggleBtnContainer";
import {ReactComponent as AlertLogo} from 'assets/images/refund/alert_logo.svg';
import BlueTypeBtn from "../../components/public/blue-type-btn/BlueTypeBtn";
import TextInputBoxContainer from "../../components/public/text-input-box/TextInputBoxContainer";
function RefundView(){

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
                <div className={styles.refund_view_body}>
                    <div className={styles.refund_view_description_container}>
                        <span className={styles.description_title}>임대비용</span>
                        <div>
                            <div><AlertLogo /><span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</span></div>
                            <div><AlertLogo /><span>비용 입력시 고지서가 무료로 제공됩니다.</span></div>
                        </div>
                    </div>
                    <div>
                        <TextInputBoxContainer
                            componentRef={null}
                            textBoxTitle='보증금'
                            textBoxSubTitle='만원'
                            inputPlaceholder='0'
                            inputValue=''
                        />
                    </div>
                    <div className={styles.refund_view_btn_container}>
                        <BlueTypeBtn btnTitle='금액 확인하기 👆' onClickHandler={(event: React.MouseEvent) => {}}/>
                    </div>
                    <div className={styles.refund_view_explain_container}>
                        <span>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RefundView
