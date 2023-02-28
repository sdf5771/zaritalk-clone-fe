import React from 'react';
import styles from './AddressInputPresenter.module.css';
import {AddressInputPresenterPropsType} from './type/AddressInputType';
import {ReactComponent as SearchIcon} from 'assets/images/residence/reading_glasses_icon.svg';

function AddressInputPresenter({onClickHandler, addressValue}:AddressInputPresenterPropsType){
    return(
        <div onClick={onClickHandler} className={styles.address_input_root}>
            <input placeholder="살고 계신 건물주소 또는 건물명을 입력하세요." value={addressValue} readOnly={true}/>
            <SearchIcon />
        </div>
    )
}

export default AddressInputPresenter;
