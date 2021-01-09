import React, { useState, useEffect } from "react";
// import { useSnackbar } from 'notistack';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Loader from 'components/Backdrop/Loader.js';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { PUBLIC_API } from "utils/API";
import "./loading.css";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const { history } = props;
  const [open, setOpen] = useState(true);
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    error: false,
    loading: false,
    url: PUBLIC_API
  })
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    setTimeout(() => {
        setOpen(false);
    }, [1500])
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setState({
      ...state,
      loading: true
    })
    try {
      let payload = {
        username : state.username,
        password: state.password,
        email : state.email
      }
      let dataToken = await axios.post(`${state.url}/api/v1/auth/login`, payload)
      if (dataToken) {
        await localStorage.setItem("token", JSON.stringify(dataToken.data));
        history.push("/dashboard")
        setState({
          ...state,
          loading: false
        })
      }
    } catch (e) {
      setState({
        ...state,
        error : true
      })
    }
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="PPM Wiriosoedarmo Gombong"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
        <Loader open={open} />
          <GridContainer justify="center">
            <GridItem xs={6} sm={6} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {
                      state.loading ?
                      <div style={{ display: "flex", width: "100%", justifyContent: "center", height: 220, alignItems: "center" }}>
                      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                      </div>
                      :
                      <>
                      <CustomInput
                        labelText="User Name..."
                        id="first"
                        value={(e) => setState({
                          ...state,
                          username: e.target.value
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        value={(e) => setState({
                          ...state,
                          email: e.target.value
                        })}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        value={(e) => setState({
                          ...state,
                          password: e.target.value
                        })}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                      </>
                    }
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type={"submit"} onClick={handleLogin}>
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
