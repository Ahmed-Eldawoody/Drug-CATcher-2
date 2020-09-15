// Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
//
//
//
//
//Components
import Form from "../components/Form";
//
//
//
//
//
// Make Styles for the elements
const useStyles = makeStyles((theme) => ({
  //container styling
  container: {
    width: "100%",
    height: "100vh"
  },
  // backButton styling
  backButton: {
    color: "black",
    margin: "15px",
    // the hover effect to the same background color
    "&:hover": {
      backgroundColor: "white"
    },
    // when the screen is less than 600px
    [theme.breakpoints.only("xs")]: {
      margin: 0
    }
  },
  // Router link
  link: {
    color: "black"
  },
  // title
  title: {
    textAlign: "center"
  },
  // Form container
  formContainer: {
    // height: 250,
    // backgroundColor: "aqua",
    padding: 20,
    border: "2px solid gray",
    margin: 5,
    borderRadius: 15
  }
}));
//
//
//
//
//
// Screen-2 Component
export default function Sreen2() {
  //
  //
  //
  // To Apply Styling
  const classes = useStyles();
  //
  //
  //
  // JSX
  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {/* Back Button */}
        <Grid item xs={12}>
          <IconButton className={classes.backButton}>
            <Link to="/" className={classes.link}>
              <ArrowBackIosIcon fontSize="large" />
            </Link>
          </IconButton>
        </Grid>
        {/* Title */}
        <Grid item xs={12}>
          <h2 className={classes.title}>Company Information</h2>
        </Grid>
        {/* The Form */}
        <Grid item container xs={12}>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <div className={classes.formContainer}>
              <Form />
            </div>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}
