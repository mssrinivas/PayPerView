import React from 'react';
import './SignUp.css';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import {Redirect} from 'react-router-dom';

import jwtDecode from 'jwt-decode';

const URL="http://localhost:4004/user"

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Userid : '',
      PrimaryEmail : '',
      Password: '',
      // UserType : '',
      Redirection_Value : false,
      errors : false
    }
  }

  onUseridChange = (event) => {
    this.setState({Userid: event.target.value})
  }


  onPrimaryEmailChange = (event) => {
    this.setState({PrimaryEmail: event.target.value})
  }

  //  onUserTypeChange  = (event) => {
  //   this.setState({UserType: event.target.value})
  // }

  onPasswordChange = (event) => {
    this.setState({Password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch(URL+'/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
        name: this.state.Userid,
        // usertype: this.state.UserType,
        password: this.state.Password,
        email : this.state.PrimaryEmail
      })
    })
    .then(response => {
      if(response.status === 400)
        {
          this.setState({errors : true})
        }
      else
        {

          console.log("Inside signup frontend")
          this.setState({Redirection_Value : true})
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
      Errors = <p class="error"> Error Signing Up </p>
    }
    return(
      <div>
      {Redirecty}
      <Container>
       <br />
       <h1 className="padleft"> Sign Up to Pay Per View </h1>
       <br />
       <br />
        <p className="font-small grey-text d-flex justify-content-center">Already have an account? <a href="/login" className="blue-text ml-1"> Login</a></p>
        <section className="form-elegant">
          <Row >
            <Col md="4" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">Account SignUp</h3>
                    <hr></hr>
                  </div>
                  <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Name"  onChange={this.onUseridChange} required/>
                  <br>
                  {/* </br>
                  <input type="text" class="form-control" id="exampleInputSecondName" aria-describedby="emailHelp" placeholder="User Type"  onChange={this.onUserTypeChange} required/>
                  <br> */}
                  </br>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Primary email"  onChange={this.onPrimaryEmailChange} required/>
                  <br>
                  </br>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={this.onPasswordChange} required/>
                   <br>
                  </br>
                  <div className="text-center mb-3">
                    <Button type="button" gradient="blue" className="btn btn-primary btn-lg btn-block" onClick = {this.onSubmitSignIn}>Sign Up</Button>
                      <hr></hr>
                  </div>
                </CardBody>     
              </Card>
            </Col>
          </Row>
        </section>
         {Errors}
      </Container>
      </div>
      );
  }
}

export default SignUp;