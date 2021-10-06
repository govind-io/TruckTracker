import { combineReducers } from "redux";
import  DataReducer from "./Reducers/DataReducer";
const RootReducer=combineReducers({
    Data:DataReducer
})

export default RootReducer