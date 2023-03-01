type initialState = {addressValue: string};
type actionType = {type: string, addressValue: string};

function addressValueReducer(currentState: initialState, action: actionType){
    if(currentState === undefined){
        return {addressValue: ''};
    }
    const newState = {...currentState};

    switch (action.type){
        case 'USER_COMPLETE_ADDRESS_INPUT':
            console.log('action.addressValue', action.addressValue)
            newState.addressValue = action.addressValue;
            break
    }

    return newState
}

export default addressValueReducer;
