import React, {ReactEventHandler} from "react";

export type PhoneNumberInputContainerPropsType = {
    inputRef?: React.RefObject<HTMLInputElement>,
    placeholder?: string,
}

export type PhoneNumberInputPresenterPropsType = {
    inputRef?: React.RefObject<HTMLInputElement>,
    onChangeHandler: ReactEventHandler,
    inputVal:string
    placeholder?: string,
}
