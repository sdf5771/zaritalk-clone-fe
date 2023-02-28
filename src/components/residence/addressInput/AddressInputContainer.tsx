import React, {useState} from 'react';
import AddressInputPresenter from './AddressInputPresenter';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import {Address} from "react-daum-postcode/lib/loadPostcode";

function AddressInputContainer(){
    const daumPostCode = useDaumPostcodePopup();
    const [address, setAddress] = useState('');

    const handleComplete = (data: Address) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setAddress(fullAddress);
    };

    const onClickHandler = async (event: React.MouseEvent) => {
        await daumPostCode({ onComplete: handleComplete })
    }

    return(
        <AddressInputPresenter onClickHandler={onClickHandler} addressValue={address} />
    )
}

export default AddressInputContainer;
