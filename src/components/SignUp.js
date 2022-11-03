import React, {useState, useEffect} from "react";
import {CssBaseline, TextField, Checkbox, Link, Grid, Box, Typography, Container, Button, FormControlLabel} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/signup.css"
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#" style={{textDecoration: "none"}}>
        MURIFE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function SignUp({onLogin}) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [error, setError] = useState([])


  function handleSubmit(event) {
    const formData = {
      name: name,
      username: username,
      email: email,
      location: location,
      password: password,
      password_confirmation: password_confirmation
    };
    console.log(formData);
    event.preventDefault();
    signup(formData)
  }


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
  const signupdata = {name: google.Ad, email: google.cu, password: google.NT, password_confirmation: google.NT }
  signup(signupdata) 
};

const onFailure = (err) => {
  console.log('failed:', err);
};

 function signup(signupdata) {
  fetch('https://hidden-depths-73217.herokuapp.com/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupdata),
    }).then(res=>{
      if(res.ok){
        res.json().then(onLogin)
      } else
        res.json().then((err) => setError(err.error))
    })
 }
  return (
    <div className="signup"> 
    <div>
      <img id="phone"src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form-image"/>
    </div> 
    <ThemeProvider theme={theme}>
      <Container  component="main" className="signup-form">
        {/* <CssBaseline /> */}
          <Typography id="h1" component="h1" variant="h3">
             Create an account
          </Typography>
          <Typography id="h5"component="h5" variant="h5">
          Enter your details below to create an account with us...
          </Typography>
          <Box id="cont" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >

            <p style={{color: "red", fontSize: "small"}}>{error}</p>

            <Grid container spacing={2}>
            <Grid item xs={12} className="form-input">
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                 style={{width: 30+"vw"}}
                  id="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} placeholder="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  style={{width: 30+"vw"}}
                  id="username"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} placeholder="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  style={{width: 30+"vw"}}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                />
              </Grid>
        
              <Grid item xs={12}>
                <TextField
                  required
                  style={{width: 30+"vw"}}
                  name="location"
                  label="Location"
                  type="location"
                  id="location"
                  autoComplete="new-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)} placeholder="Location"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  style={{width: 30+"vw"}}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} placeholder="Password"
                />
                 </Grid>
                 <Grid item xs={12}>
                <TextField
                  required
                  style={{width: 30+"vw"}}
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="Confirm Password"
                />
              </Grid>
              <Grid item xs={12} >
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Receive marketing promotions and updates"
                />
              </Grid>
            </Grid>
            
            <div xs={12} className="buttons-flex">
              <Button
               style={{backgroundColor: "black"}}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create account
              </Button>

              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
             </div>

            {/* <hr className="horizontal" /> */}

            <Grid container justifyContent="center" style={{fontSize: "small", marginTop:2+"vh", textDecoration: "none"}}>
              <Grid item>
              Already have an account?
                <Link href="/login" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                   {" Login"}
                </Link>
              </Grid>
              <Grid item className="account-text" >
               Not interested, go back to 
                <Link href="/" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                   {" Home"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
    <div id="laptop">
      <img src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form-image"/>
    </div> 
    </div>
  );
}