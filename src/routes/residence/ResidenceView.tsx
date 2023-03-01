import React from 'react';
import styles from './ResidenceView.module.css'
import {useLocation} from "react-router-dom";
import RefundEstimationDisplayContainer
    from "components/residence/refund-esmimation-display/RefundEstimationDisplayContainer";
import AddressInputContainer from "../../components/residence/addressInput/AddressInputContainer";
import {ReactComponent as AlertLogo} from 'assets/images/refund/alert_logo.svg';

function ResidenceView(){
    const location = useLocation();

    console.log('location ', location);

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
                        <div className={styles.address_explain_container}>
                            <AlertLogo className={styles.alert_logo}/>
                            <span>과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)</span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidenceView;
