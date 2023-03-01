import React from 'react';
import styles from './ResidenceView.module.css'
import {useLocation} from "react-router-dom";
import RefundEstimationDisplayContainer
    from "components/residence/refund-esmimation-display/RefundEstimationDisplayContainer";
import AddressInputContainer from "../../components/residence/addressInput/AddressInputContainer";
import {ReactComponent as AlertLogo} from 'assets/images/refund/alert_logo.svg';
import AlertDescriptionContainer from "components/public/alert_description/AlertDescriptionContainer";

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
                        <AlertDescriptionContainer description="과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)"/>
                    </div>
                    <div>
                        <div>
                            <span>호실</span>
                        </div>
                        <div>
                            <span>세입자(본인) 이름</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <span>계약시작일</span>
                            </div>
                            <div>
                                <span>계약종료일</span>
                            </div>
                        </div>
                        <div>

                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResidenceView;
