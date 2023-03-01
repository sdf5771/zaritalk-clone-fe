import {combineReducers} from "redux";
import rentalTypeToggleClickReducer from 'reducers/routes/refund/rentalTypeToggleClickReducer';
import addressValueReducer from "reducers/routes/residence/addressValueReducer";

const rootReducer = combineReducers({
    rentalTypeToggleClickReducer,
    addressValueReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
