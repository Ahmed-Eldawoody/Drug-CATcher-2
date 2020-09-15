import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    backgroundColor: "white"
  },
  title: {
    color: "black",
    flex: 1
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

export default function Sreen3() {
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
              <img src="/favicon-32x32.jpg" alt="" />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <h3
            style={{
              marginTop: "20px",
              textAlign: "center"
            }}
          >
            Your requist is received and someone will be in touch with you soon
          </h3>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonDiv}>
            <Button variant="contained">
              <Link to="/" className={classes.Link}>
                Back to homepage
              </Link>
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
