import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../style/signup.css"
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
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
  const [location, setlocation] = useState("");
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
  fetch('http://127.0.0.1:3000/signup', {
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
    <img id="phone"src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form"/>
    </div> 
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="xs" display="flex">
        <CssBaseline />
          <Typography id="h1" component="h1" variant="h3">
             Create an account
          </Typography>
          <Typography id="h5"component="h5" variant="h5">
          Enter your details below to create an account with us...
          </Typography>
          <Box id="cont" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >

            <p style={{color: "red", fontSize: "small"}}>{error}</p>

            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)} placeholder="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} placeholder="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
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
                  fullWidth
                  name="location"
                  label="Location"
                  type="location"
                  id="location"
                  autoComplete="new-location"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)} placeholder="Location"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
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
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)} placeholder="Confirm Password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <GoogleLogin
             clientId={clientId}
             buttonText="Sign in with Google"
             onSuccess={onSuccess}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
             isSignedIn={true}
             />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              Already have an account?
                <Link href="/login" variant="body2">
                   {" Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    <div>
    <img id="laptop" src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form"/>
    </div> 
    </div>
  );
}