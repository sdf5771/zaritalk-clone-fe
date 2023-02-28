import React from 'react';
import styles from './RefundEstimationDisplayPresenter.module.css';
import {RefundEstimationDisplayPresenterPropsType} from './type/RefundEstimationDisplayType'

function RefundEstimationDisplayPresenter({modifyOnClickHandler}: RefundEstimationDisplayPresenterPropsType){
    return(
        <div className={styles.refund_estimation_display_root}>
            <div className={styles.refund_info_container}>
                <span>내 월세 환급금은 <span>최대 360만원</span>입니다.</span>
                <span>자리톡으로 환급 신청하세요 👇🏻</span>
            </div>
            <div className={styles.refund_explain_container}>
                <span>해당 금액은 확정된 것이 아니며 새액공제 자격조건,</span>
                <span>세금납부 및 공제이력에 따라 변동될 수 있습니다.</span>
            </div>
            <div onClick={modifyOnClickHandler} className={styles.refund_modify_info_container}>
                <span>임대비용 수정하기</span>
            </div>
        </div>
    )
}

export default RefundEstimationDisplayPresenter;
