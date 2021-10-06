import { Grid, IconButton } from "@material-ui/core";
import { useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl'
import { useSelector } from "react-redux";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { ERROR_TRUCKS } from "../../Redux/Types/CompsType";
export default function Mainmap() {
  const activecomp=useSelector((state)=>state.Data.activecomp)
  const [viewport, setviewport] = useState({
    latitude: 28.6139,
    longitude: 77.2090,
    zoom: 6,
    width: "80vw",
    height: "calc(100vh - 116px)",
    mapboxApiAccessToken:process.env.REACT_APP_TOKEN
  });
  const all_data=useSelector((state)=>state.Data.visible_data);
  return (
    <Grid
      container
      style={{
        width: "80%",
        height:"calc(100vh - 116px)",
      }}
    >
      <div>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/govindgovind852/ckufffnvka2s319ns5elcu5oc"
          onViewportChange={(viewport) => setviewport(viewport)}
        >
          {all_data.map((truck)=>{
            return <Marker key={truck.id} latitude={truck.lastWaypoint.lat} longitude={truck.lastWaypoint.lng}>
              <IconButton>
                <LocalShippingIcon color={(()=>{
                  if(activecomp==ERROR_TRUCKS){
                    return "error"
                  }

                  else if(truck.lastRunningState.truckRunningState===1){
                    return "success"
                  }

                  else if(!truck.lastRunningState.truckRunningState && !truck.lastWaypoint.ignitionOn){
                    return "info"
                  }

                  else if(!truck.lastRunningState.truckRunningState && truck.lastWaypoint.ignitionOn){
                    return "warning"
                  }
                })()}/>
              </IconButton>            
            </Marker>
          })}
        </ReactMapGL>
      </div>
    </Grid>
  );
}
