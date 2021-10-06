import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { DataFailure, DataSuccess } from "../Actions/DataActions";
import FetchData from "../Api/FetchData";
import { DATA_REQUEST } from "../Types/DataType";

function* GetData(){
    try{
        const response=yield call(FetchData)
        if(response.statuscode==200){
            yield put(DataSuccess(response.data))
        }
        else{
            yield put(DataFailure(response))
        }
    }
    catch(error){
        yield put(DataFailure(error))
    }
}

export default all([
    takeLatest(DATA_REQUEST,GetData)
])