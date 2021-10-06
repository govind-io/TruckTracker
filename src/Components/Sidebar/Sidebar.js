import { Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Truck from "./Truck";
const useStyle=makeStyles({
    root:{
        "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#F3F3F3",
            margin: "30px 0px",
          },
          "&::-webkit-scrollbar-thumb": {
            border: "4px solid grey",
            borderRadius: "10px",
          },
    }
})
export default function Sidebar() {
  const [query, setquery] = useState();
  const classes=useStyle()
  const all_data=useSelector((state)=>state.Data.visible_data)
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      style={{
        width: "20%",
        height: "calc(100vh - 116px)",
      }}
    >
      <Searchbar query={query} setquery={setquery} />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        wrap="nowrap"
        style={{
          height: "calc(100vh - 159px)",
          overflowY: "auto",
          padding:"0px"
        }}
        className={classes.root}
      >
        {all_data.map((truck)=>{
          if(!query){
          return <Truck key={truck.id} truckNumber={truck.truckNumber} created_time={(()=>{
            if(Math.floor(truck.lastWaypoint.createTime/(1000*60))<60){
              return `${Math.floor(truck.lastWaypoint.createTime/(1000*60))} min`
            }
            else if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60))<24){
              return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60))} hr`
            }
          
            else if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24))<365){
              return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24))} d`
            }

            else{
              return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24*365))} yr`
            }
          })()}
          running={truck.lastRunningState.truckRunningState}
          speed={truck.lastWaypoint.speed}
          start_stop_time={
            (()=>{
              if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60))<60){
                return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60))} min`
              }
              else if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60))<24){
                return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60))} hr`
              }
            
              else if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24))<365){
                return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24))} d`
              }
  
              else{
                return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24*365))} yr`
              }
            })()
          }
          error={Math.floor(truck.lastWaypoint.createTime/(1000*60*60))>4}
          />}
          else{
            if(truck.truckNumber.toLowerCase().includes(query.toLowerCase())){
              return <Truck truckNumber={truck.truckNumber} key={truck.id} created_time={(()=>{
                if(Math.floor(truck.lastWaypoint.createTime/(1000*60))<60){
                  return `${Math.floor(truck.lastWaypoint.createTime/(1000*60))} min`
                }
                else if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60))<24){
                  return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60))} hr`
                }
              
                else if(Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24))<365){
                  return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24))} d`
                }
    
                else{
                  return `${Math.floor(truck.lastWaypoint.createTime/(1000*60*60*24*365))} yr`
                }
              })()}
              running={truck.lastRunningState.truckRunningState}
              speed={truck.lastWaypoint.speed}
              start_stop_time={
                (()=>{
                  if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60))<60){
                    return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60))} min`
                  }
                  else if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60))<24){
                    return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60))} hr`
                  }
                
                  else if(Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24))<365){
                    return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24))} d`
                  }
      
                  else{
                    return `${Math.floor(truck.lastRunningState.stopStartTime/(1000*60*60*24*365))} yr`
                  }
                })()
              }
              error={Math.floor(truck.lastWaypoint.createTime/(1000*60*60))>4}
              />
            }
          }
        })}
      </Grid>
    </Grid>
  );
}


