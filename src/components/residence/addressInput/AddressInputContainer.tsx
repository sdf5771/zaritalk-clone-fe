import React, {useState} from 'react';
import AddressInputPresenter from './AddressInputPresenter';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import {Address} from "react-daum-postcode/lib/loadPostcode";
import {useDispatch} from "react-redux";

function AddressInputContainer(){
    const addressDispatch = useDispatch();
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
        addressDispatch({type: 'USER_COMPLETE_ADDRESS_INPUT', addressValue: fullAddress})
    };

    const onClickHandler = async (event: React.MouseEvent) => {
        await daumPostCode(
            {
                onComplete: handleComplete,
                popupKey: 'daumPost',
            }
        )
    }

    return(
        <AddressInputPresenter onClickHandler={onClickHandler} addressValue={address} />
    )
}

export default AddressInputContainer;
