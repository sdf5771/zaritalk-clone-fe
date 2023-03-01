import {combineReducers} from "redux";
import rentalTypeToggleClickReducer from 'reducers/routes/refund/rentalTypeToggleClickReducer';
import addressValueReducer from "reducers/routes/residence/addressValueReducer";
import locationRentTypeReducer from "reducers/routes/refund/locationRentTypeReducer";

const rootReducer = combineReducers({
    rentalTypeToggleClickReducer,
    addressValueReducer,
    locationRentTypeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
