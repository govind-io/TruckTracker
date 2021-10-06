import { Container, Grid, Typography } from "@material-ui/core";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export default function Truck(props) {
  const {error,truckNumber,running,speed,created_time,start_stop_time}=props
  return (
    <Grid
      item
      style={{
        padding: "10px",
        borderBottom: "1px solid grey",
        backgroundColor:(()=>{
          if(error){
            return "red"
          }
        })(),
        color:(()=>{
          if(error){
            return "white"
          }
          else{
            return "black"
          }
        })(),
        cursor:"pointer"
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0px",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontSize: "20px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
          }}
        >
          {truckNumber} <LocalShippingIcon color={(()=>{
          if(error){
            return "white"
          }
          else{
            return "disabled"
          }
        })()} style={{
              marginLeft:"5px"
            }}/>
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontSize: "18px",
            color: (()=>{
              if(error){
                return "white"
              }
              else{
                return "#777575"
              }
            })(),
            fontWeight: "600",
          }}
        >
          {created_time}
        </Typography>
      </Container>


      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0px",
          marginTop:"10px"
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontSize: "16px",
            fontWeight: "800",
            display: "flex",
            color: (()=>{
              if(error){
                return "white"
              }
              else{
                return "#777575"
              }
            })(),
          }}
        >
          {running?`Running since last ${start_stop_time}`:`Stopped since last ${start_stop_time}`}
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontSize: "16px",
            color: (()=>{
              if(error){
                return "white"
              }
              else{
                return "#777575"
              }
            })(),
            fontWeight: "800",
          }}
        >
          {running?`${speed} km/hr`:null}
        </Typography>
      </Container>


    </Grid>
  );
}
