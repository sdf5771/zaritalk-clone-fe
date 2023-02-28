type initialState = {activeMenu: string, activeMenuId: number | null};

type actionType = {type: string, menuId: number, menuName: string};

function rentalTypeToggleClickReducer<T, U>(currentState: initialState, action: actionType){
    if(currentState === undefined){
        return {activeMenu: ''};
    }
    const newState = {...currentState};

    switch (action.type){
        case 'rentalTypeToggleClick':
            newState.activeMenu = action.menuName;
            break
    }

    return newState
}

export default rentalTypeToggleClickReducer;
