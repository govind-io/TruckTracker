import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS, VISIBLE_DATA } from "../Types/DataType";

export const DataRequest=()=>({
    type:DATA_REQUEST
})


export const DataFailure=(error)=>({
    type:DATA_FAILURE,
    error:error
})

export const DataSuccess=(data)=>({
    type:DATA_SUCCESS,
    data:data
})

export const visibledata=(data)=>({
    type:VISIBLE_DATA,
    data:data
})