import React from 'react';
import styles from './RefundResultPresenter.module.css';
import {ReactComponent as HouseIcon} from 'assets/images/complete-refund/house_icon.svg';
import TitleDescriptionContainer from "../title-decription/TitleDescriptionContainer";
import IconTextButtonContainer from "../../public/icon-text-button/IconTextButtonContainer";

function RefundResultPresenter(){
    return(
        <div className={styles.refund_result_root}>
            <div className={styles.refund_result_header}>
                <HouseIcon />
                <span>테스트테스트테스트테스트</span>
            </div>
            <div className={styles.refund_result_body}>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="임대유형" description="월세"/>
                    <TitleDescriptionContainer title="월임대료" description="105만원"/>
                </div>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="보증금" description="3,000만원"/>
                    <TitleDescriptionContainer title="월관리비" description="10만원"/>
                </div>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="납부일" description="매달 15일"/>
                    <TitleDescriptionContainer title="납부총액" description="115만원" isDescriptionBold={true}/>
                </div>
            </div>
            <div className={styles.refund_result_footer}>
                <div className={styles.refund_content_container}>
                    <TitleDescriptionContainer title="계약기간" description="2020. 03. 01 ~ 2022. 02. 28"/>
                </div>
                <div className={styles.refund_result_btn_container}>
                    <IconTextButtonContainer btnTitle="임대인 문자" />
                    <IconTextButtonContainer btnTitle="임대인 전화" />
                </div>
            </div>
        </div>
    )
}

export default RefundResultPresenter;
