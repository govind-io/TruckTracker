import { ERROR_TRUCKS, IDLE_TRUCKS, RUNNING_TRUCKS, STOPPED_TRUCKS, TOTAL_TRUCKS } from "../Types/CompsType";

export const TotalTruck=(data)=>(
    {
        type:TOTAL_TRUCKS,
        data:data
})

export const ErrorTruck=(data)=>(
    {
        type:ERROR_TRUCKS,
        data:data
    }
)

export const IdleTruck=(data)=>({
    type:IDLE_TRUCKS,
    data:data
})

export const RunningTruck=(data)=>({
    type:RUNNING_TRUCKS,
    data:data
})

export const StoppedTruck=(data)=>({
    type:STOPPED_TRUCKS,
    data:data
})