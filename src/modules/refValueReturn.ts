import React from "react";

const refValueReturn = (refData: React.RefObject<HTMLInputElement>) => {
    if(refData && refData.current) {
        return refData.current.value
    } else {
        return ''
    }
}

export default refValueReturn;
