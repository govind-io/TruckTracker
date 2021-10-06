import {
  DATA_FAILURE,
  DATA_REQUEST,
  DATA_SUCCESS,
  VISIBLE_DATA,
} from "../Types/DataType";
import { ERROR_TRUCKS, IDLE_TRUCKS, RUNNING_TRUCKS, STOPPED_TRUCKS, TOTAL_TRUCKS } from "../Types/CompsType";

export const initialState = {
  all_data: [],
  visible_data: [],
  total_trucks: 0,
  running_trucks: 0,
  stopped_trucks: 0,
  idle_trucks: 0,
  error_trucks: 0,
  loading: false,
  error: "",
  activecomp:TOTAL_TRUCKS,
  selected:[]
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {

    case DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        all_data: action.data,
        error: "",
      };

    case VISIBLE_DATA:
      return {
        ...state,
        visible_data: action.data,
        total_trucks: action.data.length,
        selected:action.data,
        running_trucks: (()=>{
          let count=0
          action.data.map((truck)=>{
            if(truck.lastRunningState.truckRunningState===1){
              count=count+1;
              return
            }
          })
          return count
        })(),

        stopped_trucks: (()=>{
          let count=0
          action.data.map((truck)=>{
            if(!truck.lastRunningState.truckRunningState && !truck.lastWaypoint.ignitionOn){
              count=count+1;
              return
            }
          })
          return count
        })(),

        idle_trucks: (()=>{
          let count=0
          action.data.map((truck)=>{
            if(!truck.lastRunningState.truckRunningState && truck.lastWaypoint.ignitionOn){
              count=count+1;
              return
            }
          })
          return count
        })(),

        error_trucks: (()=>{
          let count=0
          action.data.map((truck)=>{
            if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60))>4){
              count=count+1;
              return
            }
          })
          return count
        })(),
      };
    
      case ERROR_TRUCKS:
        return{
            ...state,
            activecomp:ERROR_TRUCKS,
            visible_data:action.data,
        }
        
    case TOTAL_TRUCKS:
        return{
            ...state,
            activecomp:TOTAL_TRUCKS,
            visible_data:action.data,
        }
    
    case IDLE_TRUCKS:
        return{
            ...state,
            activecomp:IDLE_TRUCKS,
            visible_data:action.data
        }

    case STOPPED_TRUCKS:
        return{
            ...state,
            activecomp:STOPPED_TRUCKS,
            visible_data:action.data
        }

    case RUNNING_TRUCKS:
        return{
            ...state,
            activecomp:RUNNING_TRUCKS,
            visible_data:action.data
        }

    default:
      return state;
  }
};

export default DataReducer;
