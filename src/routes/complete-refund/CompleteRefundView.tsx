import React from 'react';
import styles from './CompleteRefundView.module.css'
import RefundResultContainer from "components/complete-refund/refund-result/RefundResultContainer";
import {useLocation} from "react-router-dom";

function CompleteRefundView(){
    const location = useLocation();

    console.log(location);

    return(
        <div className={styles.complete_refund_view_root}>
            <div className={styles.complete_refund_view_main}>
                <div className={styles.result_view_container}>
                    <RefundResultContainer state={location.state} />
                </div>
            </div>
        </div>
    )
}

export default CompleteRefundView;
