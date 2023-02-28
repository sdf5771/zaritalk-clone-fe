import {MutableRefObject, ReactEventHandler} from "react";

export type TextInputBoxPresenterPropsType = {
    isActiveBox?: boolean | undefined,
    componentRef: null,
    textBoxTitle: string,
    textBoxSubTitle: string,
    inputPlaceholder: string,
    inputValue: string,
    inputOnChangeHandler: ReactEventHandler
    isArrowIcon?: boolean,
    inputType?: string,
}

export type TextInputBoxContainerPropsType = {
    isActiveBox?: boolean | undefined,
    componentRef: null,
    textBoxTitle: string,
    textBoxSubTitle: string,
    inputPlaceholder: string,
    isArrowIcon?: boolean,
    inputType? :string,
}
