import React, {ReactEventHandler} from "react";

export type TextInputPresenterPropsType = {
    rootOnClickHandler?: ReactEventHandler,
    isActiveBox?: boolean | undefined,
    isReadOnly?: boolean,
    componentRef?: React.RefObject<HTMLInputElement>,
    textBoxTitle?: string,
    textBoxSubTitle?: string,
    inputPlaceholder: string,
    inputValue: string,
    inputOnChangeHandler: ReactEventHandler
    isArrowIcon?: boolean,
    inputType?: string,
}

export type TextInputTitleBoxPresenterPropsType = {
    isActiveBox?: boolean | undefined,
    isReadOnly?: boolean,
    componentRef?: React.RefObject<HTMLInputElement>,
    textBoxTitle?: string,
    textBoxSubTitle?: string,
    inputPlaceholder: string,
    inputValue: string,
    inputOnChangeHandler: ReactEventHandler
    isArrowIcon?: boolean,
    inputType?: string,
}

export type TextInputBoxContainerPropsType = {
    rootOnClickHandler?: ReactEventHandler,
    isActiveBox?: boolean | undefined,
    isReadOnly?: boolean,
    componentRef?: React.RefObject<HTMLInputElement>,
    isTitleUse?: boolean,
    textBoxTitle?: string,
    textBoxSubTitle?: string,
    inputPlaceholder: string,
    isArrowIcon?: boolean,
    inputType? :string,
    initialValue? : string,
}
