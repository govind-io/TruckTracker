import { Grid, Typography, Button } from "@mui/material";
export default function Navitem(props) {
  const { compname, count,active,change_data } = props;
  return (
    <Button style={{
        width:"16.66%",
        backgroundColor:(()=>{
            if(active){
                return "#e4e0e0"
            }
            else{
                return "transparent"
            }
        })(),
        borderRadius:"0px"
    }}
    onClick={change_data}
    >
      <Grid
        item
        minHeight="100px"
        style={{
          padding: "30px 20px",
          textAlign: "center",
          color:"black",
        }}
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: "600",
            fontSize:"15px"
          }}
        >
          {compname}
        </Typography>
        <Typography
          style={{
            fontWeight: "400",
            fontSize:"12px"
          }}
          variant="h7"
        >
          {count}
        </Typography>
      </Grid>
    </Button>
  );
}
