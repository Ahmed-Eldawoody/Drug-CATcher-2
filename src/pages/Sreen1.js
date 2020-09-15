import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//
//
//
//
const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: "white"
  },
  title: {
    color: "black",
    flex: 1
  },
  video: {
    width: "100%",
    marginTop: "20px",
    textAlign: "center"
    // padding: "20px"
  },
  buttonDiv: {
    // backgroundColor: "blue",
    textAlign: "center",
    padding: "20px"
  },
  Link: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    textTransform: "none"
  }
}));

export default function Sreen1() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar className={classes.toolBar}>
              <h3 className={classes.title}>
                Drug <span style={{ color: "green" }}>CAT</span>cher
              </h3>
              <img src="/favicon-32x32.png" alt="" />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.video}>
            <ReactPlayer
              width="100%"
              // height="250px"
              style={{ margin: "0 auto" }}
              controls
              volume={0.5}
              // As of Chrome 66 videos must be muted in order to play automatically.
              muted
              playing
              url="https://www.youtube.com/watch?v=VagES3pxttQ&list=RDVagES3pxttQ&start_radio=1"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonDiv}>
            <Button variant="contained">
              <Link to="/screen2" className={classes.Link}>
                You could request an appointment with our team
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
