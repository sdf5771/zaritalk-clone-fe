import {combineReducers} from "redux";
import rentalTypeToggleClickReducer from 'reducers/routes/refund/rentalTypeToggleClickReducer';

const rootReducer = combineReducers({
    rentalTypeToggleClickReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
