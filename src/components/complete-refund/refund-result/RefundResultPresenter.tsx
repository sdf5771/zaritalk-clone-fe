import React from 'react';
import styles from './RefundResultPresenter.module.css';
import {ReactComponent as HouseIcon} from 'assets/images/complete-refund/house_icon.svg';
import TitleDescriptionContainer from "../title-decription/TitleDescriptionContainer";
import IconTextButtonContainer from "../../public/icon-text-button/IconTextButtonContainer";
import {RefundResultPresenterPropsType} from "./type/RefundResultType";

function RefundResultPresenter({state, rentType, startDate, endDate, totalAmount, messageButtonClickHandler, callButtonClickHandler}: RefundResultPresenterPropsType){

    return(
        <div className={styles.refund_result_root}>
            <div className={styles.refund_result_header}>
                <HouseIcon />
                <span>{state.address + ', ' + state.detailAddress}</span>
            </div>
            <div className={styles.refund_result_body}>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="임대유형" description={rentType}/>
                    <TitleDescriptionContainer title="월임대료" description={rentType === '월세' ? state.monthlyCost + "만원" : '없음'}/>
                </div>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="보증금" description={state.deposit + '만원'}/>
                    <TitleDescriptionContainer title="월관리비" description={state.maintenanceCost + '만원'}/>
                </div>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="납부일" description={"매달 " + state.paymentDeadline + "일"}/>
                    <TitleDescriptionContainer title="납부총액" description={totalAmount + '만원'} isDescriptionBold={true}/>
                </div>
            </div>
            <div className={styles.refund_result_footer}>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="계약기간" description={startDate + ' ~ ' + endDate}/>
                </div>
                <div className={styles.refund_result_btn_container}>
                    <IconTextButtonContainer iconType="message" btnTitle="임대인 문자" onClickHandler={messageButtonClickHandler}/>
                    <IconTextButtonContainer iconType="call" btnTitle="임대인 전화" onClickHandler={callButtonClickHandler} />
                </div>
            </div>
        </div>
    )
}

export default RefundResultPresenter;
