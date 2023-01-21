import React, { useState, useEffect } from "react";
import {Button, Typography, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../style/login.css";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      
      {"Copyright © "}
      <Link color="inherit" href="#" style={{textDecoration: "none"}}>
        MURIFE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login({onLogin}) {
  const [loginDetails,setLoginDetails] = useState({userdetails:"",password:""})
  const [message, setMessage] = useState([])

  console.log(message)
  const handleSubmit = (event) => {
    event.preventDefault();
    signin(loginDetails)
  };
  const clientId = '402509286566-rc7onvlh0f5n89779pb34hhhkerqv9j6.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });
 const onSuccess = (res) => {
  console.log('success:', res.getBasicProfile());
  const google = res.getBasicProfile()
  const signindata = {email: google.cu, password: google.NT }
  signin(signindata)
};
const onFailure = (err) => {
  console.log('failed:', err);
};
function signin(signindata) {

  fetch("https://hidden-depths-73217.herokuapp.com/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: signindata})
    }).then(res=>{
      if(res.ok){
        res.json().then(onLogin)
      }
      else{
        res.json().then((err) => setMessage(err.message))
      }
    })
}

  return (
    <div className="login" style={{maxHeight: 100+"vh"}}>
      <div>
        <img
          id="phone-img"
          src="https://images.assetsdelivery.com/compings_v2/liravega258/liravega2581810/liravega258181000007.jpg"
          alt="login"
        />
      </div>
      <ThemeProvider theme={theme} className="themeprovider-login">
        <Container component="main" maxWidth="xs" className="login-form">
          <CssBaseline />
          <Box
            className="login-box"
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h2" variant="h" className="welcome-message">
              Welcome back
            </Typography>
            <Typography component="h" style={{fontSize: "small"}}>
              Enter your details below to login
            </Typography>
            
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              // sx={{ mt: 1 }}
            >
              <p style={{color: "red", fontSize: "small"}}>{message}</p>

              <TextField
                className="textfield-box"
                margin="normal"
                required
                // fullWidth
                id="email"
                onChange={e=>setLoginDetails(details=>({...details, userdetails:e.target.value}))}
                value={loginDetails.userdetails}
                label="Username or Email address"
                name="email"
                autoComplete="email"
                // autoFocus
              />
              <TextField
                className="textfield-box"
                margin="normal"
                required
                // fullWidth
                name="password"
                label="Password"
                value={loginDetails.password}
                onChange={e=>setLoginDetails(details=>({...details,password:e.target.value}))}
                type="password"
                id="password"
                autoComplete="current-password"
              />
                  <Grid item xs>
                  <Link href="/resetpassword" variant="body2" style={{textDecoration:"none", marginRight: 3+"vw", float:"right", color: "black"}}>
                    Forgot password?
                  </Link>
                </Grid>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <GoogleLogin
             clientId={clientId}
             buttonText="Login with Google"
             onSuccess={onSuccess}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
             isSignedIn={true}
             />
             {/* <hr className="horizontal"/> */}
              <Grid container className="signup-text" >
                <Grid item>
                  Don't have an account?
                  <Link href="/signup" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                    {" Signup"}
                  </Link>
                </Grid>
                <Grid item style={{marginLeft: 1+'vw', textDecoration: "none"}}>
                or Go back to
                  <Link href="/" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                    {" Home"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      <div>
        <img
          id="laptop"
          src="https://images.assetsdelivery.com/compings_v2/liravega258/liravega2581810/liravega258181000007.jpg"
          alt="form"
        />
      </div>
    </div>
  );
}
