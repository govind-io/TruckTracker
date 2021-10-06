import { Grid } from "@material-ui/core";
import Mainmap from "./MapSection/Mainmap";
import Sidebar from "./Sidebar/Sidebar";
export default function Maincomp() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Sidebar/>
      <Mainmap/>
    </Grid>
  );
}
