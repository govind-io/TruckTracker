import {
  Button,
  ClickAwayListener,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { DataRequest, visibledata } from "../../Redux/Actions/DataActions";

const useStyle = makeStyles({
  root: {
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
  },
});
export default function Filter() {
  const [open, setopen] = useState(false);
  const [query, setquery] = useState();
  const dispatch = useDispatch();
  const [selected, setselected] = useState([]);
  const all_data = useSelector((state) => state.Data.all_data);
  const classes = useStyle();
  useEffect(() => {
    dispatch(DataRequest());
  }, []);

  useEffect(() => {
    if (selected.length === 0) {
      dispatch(visibledata(all_data));
    } else {
      dispatch(visibledata(selected));
    }
  }, [selected, all_data]);

  return (
    <ClickAwayListener
      onClickAway={() => {
        setopen(false);
      }}
    >
      <Grid
        item
        style={{
          width: "16.66%",
          padding: "6px 8px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          minHeight: "100px",
          position: "relative",
        }}
      >
        <Button
          style={{
            width: "90%",
            margin: "auto",
            color: "black",
            border: "1px solid black",
            fontSize: "12px",
          }}
          onClick={() => setopen(true)}
        >
          Select <ArrowDropDownIcon />
        </Button>
        {open ? (
          <Grid
            container
            style={{
              width: "100%",
              maxHeight: "calc(100vh - 116px)",
              position: "absolute",
              top: "100px",
              left: "0px",
              zIndex: "10",
              overflowY: "auto",
              backgroundColor: "white",
            }}
            className={classes.root}
          >
            {selected.length > 0
              ? selected.map((truck) => {
                  return (
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        color: "white",
                        padding: "10px 5px",
                        backgroundColor: "#5a5af4",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        let index = selected.indexOf(truck);
                        let temp = [...selected];
                        temp.splice(index, 1);
                        setselected(temp);
                      }}
                    >
                      {truck.truckNumber}
                    </Typography>
                  );
                })
              : null}
            <hr
              style={{
                width: "100%",
                margin: "20px auto",
                color: "black",
                height: "2px",
              }}
            />
            <InputBase
              placeholder="Search..."
              style={{
                border: "1px solid black",
                width: "90%",
                margin: "auto",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
              value={query}
              onChange={(e) => {
                setquery(e.target.value);
              }}
            />
            <hr
              style={{
                width: "100%",
                margin: "20px auto",
                color: "black",
                height: "2px",
              }}
            />
            {all_data.map((truck) => {
              if (!selected.includes(truck)) {
                if (!query) {
                  return (
                    <Typography
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "grey";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        color: "black",
                        padding: "10px 5px",
                        backgroundColor: "transparent",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setselected([...selected, truck]);
                      }}
                    >
                      {truck.truckNumber}
                    </Typography>
                  );
                } 
                else {
                  if(truck.truckNumber.toLowerCase().includes(query.toLowerCase())){
                    return (
                      <Typography
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "grey";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                        }}
                        variant="h6"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          padding: "10px 5px",
                          backgroundColor: "transparent",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setselected([...selected, truck]);
                        }}
                      >
                        {truck.truckNumber}
                      </Typography>
                    );
                  }
                }
              }
            })}
          </Grid>
        ) : null}
      </Grid>
    </ClickAwayListener>
  );
}
