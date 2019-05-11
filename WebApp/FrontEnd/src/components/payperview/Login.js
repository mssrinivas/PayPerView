import React from 'react';
import './Login.css';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { decode } from 'punycode';
import { BASE_URL } from '../constants';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      Redirection_Value : false,
      errors : false
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch(BASE_URL+'/user/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
      email: this.state.signInEmail,
      password: this.state.signInPassword
      })
    })
    .then(response => {
      console.log(response.status)
      if(response.status != 200)
        {
          this.setState({errors : true})
        }
      else
        {
         response.json()
          .then(user => {
            console.log("Received jwt token" );
            console.log(user);
         var decoded = jwtDecode(user.token);
         console.log(decoded);
              var useremail = decoded.user.email;
              // var userone = decoded.user._id;
              console.log("EMAIL - " + useremail)
              // console.log("USER", userone)
              localStorage.setItem("email", useremail);
             //   this.props.loadUser(userone);
                this.setState({Redirection_Value : true})
        })
      }
      })
  }
  
  render()
  {
    let Redirecty = null;
    let Errors = null;
    if(this.state.Redirection_Value === true)
    {
     Redirecty =  <Redirect to="/useraccount" />
    }
    if(this.state.errors === true)
    {
      Errors = <p class="error">Username or Password doesn't exist </p>
    }
    return(
      <div>
    {Redirecty}
    <br />
      <Container>
          <div className="padleftOne">
       <h1 className="makeitceneter"><b>Pay Per View</b></h1>
       </div>
       <br />
       <br />
        <p className="font-small grey-text d-flex justify-content-center">Not a member? <a href="/signup" className="blue-text ml-1"> Sign Up</a></p>
        <section className="form-elegant">
          <Row >
            <Col md="4" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">Account Login</h3>
                    <hr></hr>
                  </div>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email ID"  onChange={this.onEmailChange} required/>
                  <br>
                  </br>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={this.onPasswordChange} required/>
                   <br>
                  </br>
                  <div className="text-center mb-3">
                    <Button type="button" gradient="blue" className="btn btn-primary btn-lg btn-block" onClick = {this.onSubmitSignIn}>Log In</Button>
                      <hr></hr>
                  </div>
                </CardBody>     
              </Card>
            </Col>
          </Row>
        </section>
        <div class="padleft">
         {Errors}
         </div>
      </Container>
      </div>
      );
  }
}
export default Login;