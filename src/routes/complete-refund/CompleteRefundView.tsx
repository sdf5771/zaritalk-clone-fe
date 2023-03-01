import React from 'react';
import styles from './CompleteRefundView.module.css'
import RefundResultContainer from "components/complete-refund/refund-result/RefundResultContainer";

function CompleteRefundView(){
    return(
        <div className={styles.complete_refund_view_root}>
            <div className={styles.complete_refund_view_main}>
                <div className={styles.result_view_container}>
                    <RefundResultContainer />
                </div>
            </div>
        </div>
    )
}

export default CompleteRefundView;
