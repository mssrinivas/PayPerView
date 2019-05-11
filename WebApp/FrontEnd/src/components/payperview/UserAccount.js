import React,{Component} from 'react';
import './UserAccount.css';
import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment, Modal } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css';


  import { BASE_URL } from '../constants';


class UserAccount extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      Name: '',
	      PrimaryEmail: '',
        Contact: '',
        Gender: '',
        AboutMe: '',
        Languages: '',
        SchoolName: '',
	      CompanyName: '',
	      StreetAddress: '',
	      City : '',
	      Hometown : '',
        Country: '',
        cards: {
          cardId: '',
          cardCode: '',
          expirationDate: '',
        },
        cardBal: 0,
	    }
  }

  	onNameChange = (event) => {
  		this.setState({Name: event.target.value})
  	}

  	onPrimaryEmailChange = (event) => {
  		this.setState({PrimaryEmail: event.target.value})
  	}

 	onCompanyNameChange = (event) => {
 		this.setState({CompanyName: event.target.value})
 	}

  onSchoolNameChange = (event) => {
    this.setState({SchoolName: event.target.value})
  }

    onCountryChange = (event) => {
    this.setState({Country: event.target.value})
  }

  onStreetAddressChange = (event) => {
    this.setState({StreetAddress: event.target.value})
  }

  onCityChange = (event) => {
    this.setState({City: event.target.value})
  }
    onStateChange = (event) => {
    this.setState({State: event.target.value})
  }
   
   onGenderChange = (event) => {
    this.setState({Gender: event.target.value})
  }

  onLanguageChange = (event) => {
    this.setState({Languages: event.target.value})
  }

  onContactChange = (event) => {
    this.setState({Contact: event.target.value})
  }

  onAboutMeChange = (event) => {
    this.setState({AboutMe: event.target.value})
  }

  onCardIdChange = (event) => {
    var temp = {...this.state.cards};
    temp.cardId = event.target.value;
    this.setState({cards: temp})
  }

  onCardCodeChange = (event) => {
    var temp = {...this.state.cards};
    temp.cardCode = event.target.value;
    this.setState({cards: temp})
    
  }

  onExpDateChange = (event) => {
    var temp = {...this.state.cards};
    temp.expirationDate = event.target.value;
    this.setState({cards: temp})
    
  }

  onHometownChange = (event) => {
    this.setState({"Hometown": event.target.value})
  }

  saveCard = () => {
    var url= BASE_URL+'/user/addCard'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
       email: localStorage.getItem('email'),
       cardId: this.state.cards.cardId,
       cardCode: this.state.cards.cardCode,
       expirationDate: this.state.cards.expirationDate,
       cardBal: 100
      })
      
    })
    .then(response =>  response.json())
    .then(card => {
      console.log("NAME" + card)
          // this.props.loadUser(card);
          window.location.reload();
         this.setState({Redirection_Value : true})
      })
  }

  SubmitChanges = () => {
    
    var url = BASE_URL+'/user/setProfile'
    console.log("POST URL " + url)
      fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        name: this.state.Name,
        about_me: this.state.AboutMe,
        company: this.state.CompanyName,
        school: this.state.SchoolName,
        hometown: this.state.Hometown,
        city: this.state.City,
        user_state: this.state.State,
        languages : this.state.Languages,
        gender: this.state.Gender, 
        country: this.state.Country,
        phone_number: this.state.Contact,
        address: this.state.StreetAddress
      })
    })
    .then(response =>  response.json())
    .then(user => {
      console.log("NAME" + user)
          // this.props.loadUser(user);
          window.location.reload();
         this.setState({Redirection_Value : true})
      })
  }

    componentDidMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = BASE_URL + '/user/getProfile/' + localStorage.getItem("email")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log(user.name);
      this.setState({Name: user.name})
      this.setState({PrimaryEmail: user.email})
      this.setState({AboutMe : user.about_me})
      this.setState({CompanyName: user.company})
      this.setState({SchoolName: user.school})
      this.setState({StreetAddress: user.address})
      this.setState({Country: user.country})
      this.setState({City: user.city})
      this.setState({Hometown: user.hometown})
      this.setState({State: user.user_state})
      this.setState({Gender: user.gender})
      this.setState({Languages: user.languages})
      this.setState({Contact: user.phone_number})
      this.setState({State: user.user_state})
      this.setState({cardBal: user.cards ? user.cards.cardBal: 0})
      this.setState({Redirection_Value : true})
      })
  }

	componentWillMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = BASE_URL+'/user/getProfile/' + localStorage.getItem("email")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log(user.name);
      this.setState({Name: user.name})
      this.setState({PrimaryEmail: user.email})
      this.setState({AboutMe : user.aboutme})
      this.setState({CompanyName: user.company})
      this.setState({SchoolName: user.school})
      this.setState({StreetAddress: user.address})
      this.setState({Country: user.country})
      this.setState({City: user.City})
      this.setState({Hometown: user.hometown})
      this.setState({State: user.state})
      this.setState({Gender: user.gender})
      this.setState({Languages: user.language})
      this.setState({Contact: user.contact})
      this.setState({cardBal: user.cards ? user.cards.cardBal : 0})
      this.setState({Redirection_Value : true})
      })
	}

  /*
Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender)
  */

	render ()
	{
		return (
      
  <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom:'0.5px solid #BCBCBC'}}>
                    <h1 style={{color:'#0CAA41'}}><b>glasswindow</b></h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div  style={{display:'flex'}} >&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/payperview/jobs">Jobs</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/payperview/companies">Companies</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/payperview/salary">Salary</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/payperview/interviews">Interviews</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>                    
                        <div className="padleftCompany">          
                        <div  style={{display:'flex'}} >&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/useraccount">MyProfile</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/login">LogOut</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>  
                                </div>
                            </div>
                         </nav>
  
<div class="container shadowingcontainertraveller">
  <h1 class="page-header padleft">Profile information</h1>
  <h2 class="page-header">Payment Details</h2>
  <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Card</button>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Card Number</label>
          <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Card Number" maxLength="9" onChange={this.onCardIdChange}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your card details with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Card Code</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="CVV" maxLength="3" onChange={this.onCardCodeChange}/>
        </div>
        <div class="form-group">
          <label for="date">Expiration Date</label>
          <input type="date" class="form-control" id="date" placeholder="Expiration Date" onChange={this.onExpDateChange}/>
        </div>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={this.saveCard} data-dismiss="modal">Save Card</button>
      </div>
    </div>
  </div>
</div>
  <div class="row">
    
    </div>
      <div class="col-md-12 col-sm-8 col-xs-12 forum">
          <h4 class="mb-3"></h4>
          <section className="form-elegant" >
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Name</label>
                <input type="text" class="form-control form-control-lg" id="firstName" placeholder="" value={this.state.Name} required="" disabled onChange={this.onNameChange}/>
                <div class="invalid-feedback">
                  Valid Name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="firstName">Card Balance</label>
                <input type="text" class="form-control form-control-lg" id="firstName" placeholder="" value={this.state.cardBal} required="" disabled/>
              </div>
              
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control form-control-lg" id="email" placeholder="you@example.com" value={this.state.PrimaryEmail} disabled onChange={this.onPrimaryEmailChange}/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">About me</label>
              <textarea type="textarea" class="form-control form-control-lg" id="address" placeholder=""  value={this.state.AboutMe} onChange={this.onAboutMeChange} required="" />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Company <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder=""  value={this.state.CompanyName} onChange={this.onCompanyNameChange}/>
            </div>

            <div class="mb-3">
              <label for="address2">School <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder=""  value={this.state.SchoolName} onChange={this.onSchoolNameChange}/>
            </div>


            <div class="mb-3">
              <label for="address2">Address <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder="" value={this.state.StreetAddress} onChange={this.onStreetAddressChange}/>
            </div>
            <div class="row">
               <div class="col-md-3 mb-3">
                <label for="zip">Hometown</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.Hometown} onChange={this.onHometownChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
                <div class="col-md-3 mb-3">
                <label for="zip">Language</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.Languages} onChange={this.onLanguageChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div> 
            
              <div class="col-md-3 mb-3">
                <label for="zip">Gender</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.Gender} onChange={this.onGenderChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <div class="row">
             <div class="col-md-3 mb-3">
                <label for="zip">Country</label>
                <input type="text" class="form-control form-control-lg" id="zip"  onChange={this.onCountryChange} value={this.state.Country} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">City</label>
                <input type="text" class="form-control form-control-lg" id="zip"  onChange={this.onCityChange} value={this.state.City} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">State</label>
                <input type="text" class="form-control form-control-lg" id="zip"  onChange={this.onStateChange} value={this.state.State} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Contact</label>
                <input type="text" class="form-control form-control-lg" id="zip" onChange={this.onContactChange} value={this.state.Contact} placeholder="" required="" />
                <div class="invalid-feedback">
                  Contact required.
                </div>
              </div>
            </div>
            <button class="bluebutton btn btn-lg btn-block whitefont"  onClick= {this.SubmitChanges} type="button">Save Changes</button>
          </form>
          </section>
      </div>
      </div>
      
      </div>

		);
	}
}

export default UserAccount;
