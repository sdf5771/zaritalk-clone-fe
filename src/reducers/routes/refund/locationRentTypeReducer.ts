type initialState = {rentType: string};
type actionType = {type: string, rentType: string};

function locationRentTypeReducer(currentState: initialState, action: actionType){
    if(currentState === undefined){
        return {rentType: ''};
    }
    const newState = {...currentState};

    switch (action.type){
        case 'location rentType':
            newState.rentType = action.rentType;
            break
    }

    return newState
}

export default locationRentTypeReducer;
