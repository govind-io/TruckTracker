import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorTruck, IdleTruck, RunningTruck, StoppedTruck, TotalTruck } from '../../Redux/Actions/CompsAction';
import { ERROR_TRUCKS, IDLE_TRUCKS, RUNNING_TRUCKS, STOPPED_TRUCKS, TOTAL_TRUCKS } from '../../Redux/Types/CompsType';
import Filter from './Filter';
import Navitem from './Navitem';

export default function Navbar(){
    const total_truck=useSelector((state)=>state.Data.total_trucks)
    const idle_truck=useSelector((state)=>state.Data.idle_trucks)
    const running_truck=useSelector((state)=>state.Data.running_trucks)
    const stopped_truck=useSelector((state)=>state.Data.stopped_trucks)
    const error_truck=useSelector((state)=>state.Data.error_trucks)
    const activecomp=useSelector((state)=>state.Data.activecomp)
    const all_data=useSelector((state)=>state.Data.selected)
    const dispatch=useDispatch();

    function totaltruck(){
        dispatch(TotalTruck(all_data))
    }

    function runningtruck(){
        let data=[]
        all_data.map((truck)=>{
            if(truck.lastRunningState.truckRunningState===1){
                data.push(truck)
            }
        })
        dispatch(RunningTruck(data))
    }

    function stoppedtruck(){
        let data=[]
        all_data.map((truck)=>{
            if(!truck.lastRunningState.truckRunningState && !truck.lastWaypoint.ignitionOn){
              data.push(truck)
            }
          })
        dispatch(StoppedTruck(data))
    }

    function errortruck(){
        let data=[]
        all_data.map((truck)=>{
            if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60))>4){
              data.push(truck)
              return
            }
          })
        dispatch(ErrorTruck(data))
    }

    function idletruck(){
        let data=[]
        all_data.map((truck)=>{
            if(!truck.lastRunningState.truckRunningState && truck.lastWaypoint.ignitionOn){
              data.push(truck)
              return
            }
          })
        dispatch(IdleTruck(data))
    }

    return(
        <Grid container>
            <Navitem compname={"Total Truck"} count={total_truck} active={activecomp==TOTAL_TRUCKS} change_data={totaltruck}/>
            <Navitem compname={"Running Truck"} count={running_truck} change_data={runningtruck} active={activecomp==RUNNING_TRUCKS}/>
            <Navitem compname={"Stopped Truck"} count={stopped_truck} active={activecomp==STOPPED_TRUCKS} change_data={stoppedtruck}/>
            <Navitem compname={"Idle Truck"} count={idle_truck} change_data={idletruck} active={activecomp==IDLE_TRUCKS}/>
            <Navitem compname={"Error Truck"} change_data={errortruck} count={error_truck} active={activecomp==ERROR_TRUCKS}/>
            <Filter/>
        </Grid>
    )
}