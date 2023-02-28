import {MutableRefObject, ReactEventHandler} from "react";

export type TextInputBoxPresenterPropsType = {
    isActiveBox?: boolean | undefined,
    componentRef: null,
    textBoxTitle: string,
    textBoxSubTitle: string,
    inputPlaceholder: string,
    inputValue: string,
    inputOnChangeHandler: ReactEventHandler
}

export type TextInputBoxContainerPropsType = {
    isActiveBox?: boolean | undefined,
    componentRef: null,
    textBoxTitle: string,
    textBoxSubTitle: string,
    inputPlaceholder: string,
}
