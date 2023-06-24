import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    loggedInUser:userReducer,
});

export default rootReducer;