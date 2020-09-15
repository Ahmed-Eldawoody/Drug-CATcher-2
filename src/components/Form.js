// Dependencies
import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  FormControl,
  Select,
  ClickAwayListener,
  Tooltip,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "react-modal";
import { Link } from "react-router-dom";

//
//
//
//
//
//
//
// components
import OperationCountry from "./OperationCountry";
import CompanyName from "./CompanyName";
import Objective from "./Objective";
import { Context } from "../Context";
import { countriesPhoneCode } from "../Data";
//
//
//
//
//
//Styling
const useStyles = makeStyles((theme) => ({
  //counrty code
  CountryCode: {
    width: "100%"
  },
  selectCode: {
    width: "100%"
  },

  // requist button
  Button: {
    backgroundColor: "#1a1c20",
    color: "white",
    textTransform: "none",
    fontSize: 14,
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#1d2d50"
    }
  },
  modal: {
    width: "100%",
    height: "250px",
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: "0 auto"
  },
  modalButton: {
    color: "white",
    textTransform: "none"
  },
  Link: {
    textDecoration: "none"
  }
}));
//
//
//
//
//
//
//
// Light tooltip styling
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    fontSize: 11
  }
}))(Tooltip);
//
//
//
//
//
Modal.setAppElement("#root");
//
// Form Component
export default function Form() {
  //
  // initial States from context
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    more,
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setCountryCode,
    setMore
  } = useContext(Context);
  //
  //
  // handel FirstName change
  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  //
  //
  // handel lastName change
  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };
  //
  // handel email change
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  //
  // handel country code change
  function countryCodeChange(event) {
    setCountryCode(event.target.value);
  }
  //
  //
  // handel phoneNumber change
  function phoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  //
  //
  // handel more detailes change
  function moreDetailesChange(event) {
    setMore(event.target.value);
  }
  //
  //
  //
  //
  //
  // Modal state
  const [modalOpen, setModalopen] = useState(false);
  //
  // open modal
  function openModal() {
    setModalopen(true);
  }
  //
  // close modal
  function closeModal() {
    setModalopen(false);
  }
  //
  //
  //
  //
  //
  //add styles
  const classes = useStyles();
  //
  //
  //
  // Tooltip-OperationCountr initial State
  const [open, setOpen] = useState(false);
  // Handle the close of the tooltip
  const handleTooltipClose = () => {
    setOpen(false);
  };
  // handle the open of the tooltip
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  //
  // Tooltip-CompanyName initial State
  const [openNameTip, setOpenNameTip] = useState(false);
  // Handle the close of the tooltip
  const handleNameTooltipClose = () => {
    setOpenNameTip(false);
  };
  // handle the open of the tooltip
  const handleNameTooltipOpen = () => {
    setOpenNameTip(true);
  };
  //
  //
  //
  //
  //
  // JSX
  return (
    <div>
      <Grid container spacing={1}>
        {/* Fist & last names */}
        <Grid item container xs={12} spacing={1}>
          <Grid item xs={6}>
            <TextField
              onChange={firstNameChange}
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={lastNameChange}
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
            />
          </Grid>
        </Grid>
        {/* work email address */}
        <Grid item xs={12}>
          <TextField
            onChange={emailChange}
            fullWidth
            label="Work Email Adress "
            variant="outlined"
            value={email}
          />
        </Grid>
        {/* phone number & code */}
        <Grid item container spacing={1}>
          {/* Country Code */}
          <Grid item xs={4}>
            <div className={classes.CountryCode}>
              <FormControl variant="outlined" className={classes.selectCode}>
                <Select
                  onChange={countryCodeChange}
                  native
                  value={countryCode}
                  IconComponent={ExpandMoreIcon}
                >
                  <option aria-label="None" value="" />
                  {countriesPhoneCode.map((code) => {
                    return (
                      <option key={code.label} value={code.phone}>
                        +{code.phone}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </Grid>
          {/* Phone number */}
          <Grid item xs={8}>
            <TextField
              fullWidth
              onChange={phoneNumberChange}
              value={phoneNumber}
              type="number"
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        {/* Operation Countries */}
        <Grid item container spacing={1}>
          <Grid item xs={10}>
            <OperationCountry />
          </Grid>
          <Grid item xs={2}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <LightTooltip
                  PopperProps={{
                    disablePortal: true
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="you could select more than one country"
                  placement="right-start"
                  arrow={true}
                >
                  <IconButton onClick={handleTooltipOpen}>
                    <ErrorOutlineIcon size="large" />
                  </IconButton>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
        {/* CompanyName */}
        <Grid item container spacing={1}>
          <Grid item xs={10}>
            <CompanyName />
          </Grid>
          <Grid item xs={2}>
            <ClickAwayListener onClickAway={handleNameTooltipClose}>
              <div>
                <LightTooltip
                  PopperProps={{
                    disablePortal: true
                  }}
                  onClose={handleNameTooltipClose}
                  open={openNameTip}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="you could select/add your company"
                  placement="right-start"
                  arrow={true}
                >
                  <IconButton onClick={handleNameTooltipOpen}>
                    <ErrorOutlineIcon size="large" />
                  </IconButton>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
        {/* Objective */}
        <Grid item xs={12}>
          <Objective />
        </Grid>
        {/* More Details/Description */}
        <Grid item xs={12}>
          <TextField
            value={more}
            onChange={moreDetailesChange}
            fullWidth
            placeholder="More Details/Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        {/* Requist an appointment */}
        <Grid item container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Button
              variant="contained"
              fullWidth
              className={classes.Button}
              onClick={openModal}
            >
              Requist an appointment
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        {/* the modal */}
        <Grid item container>
          <Modal
            onRequestClose={() => setModalopen(false)}
            isOpen={modalOpen}
            style={{
              content: {
                background: "black",
                color: "white"
              }
            }}
          >
            <div className={classes.modal}>
              <Grid item xs={12}>
                <h2 style={{ margin: "50px" }}>Confirm your requist</h2>
              </Grid>
              <Grid item container>
                <Grid item xs={6}>
                  <Link to="/screen3" className={classes.Link}>
                    <Button
                      className={classes.modalButton}
                      variant="outlined"
                      color="primary"
                    >
                      Requist
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className={classes.modalButton}
                    variant="outlined"
                    color="primary"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
}
