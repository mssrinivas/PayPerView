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
	      State : '',
        Country: '',
        cards: {
          cardId: '',
          cardCode: '',
          expirationDate: '',
        },
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
    this.setState({"cards.cardId": event.target.value})
  }

  onCardCodeChange = (event) => {
    this.setState({"cards.cardCode": event.target.value})
  }

  onExpDateChange = (event) => {
    this.setState({"cards.expirationDate": event.target.value})
  }

  saveCard = () => {
    var url= 'http://localhost:4004/user/addCard'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
       email: localStorage.getItem('email'),
       carId: this.state.carId,
       cardCode: this.state.cardCode,
       expirationDate: this.state.expirationDate,
      })
    })
    .then(response =>  response.json())
    .then(card => {
      console.log("NAME" + card)
          this.props.loadUser(card);
         this.setState({Redirection_Value : true})
      })
  }

  SubmitChanges = () => {
    
    var url = 'http://localhost:4004/user/setProfile'
    console.log("POST URL " + url)
      fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
        email: localStorage.getItem('email'),
        name: this.state.Name,
        aboutme: this.state.AboutMe,
        company: this.state.CompanyName,
        school: this.state.SchoolName,
        hometown: this.state.City,
        language : this.state.Languages,
        gender: this.state.Gender, 
        state: this.state.State,
        country: this.state.Country,
        contact: this.state.Contact,
        address: this.state.StreetAddress
      })
    })
    .then(response =>  response.json())
    .then(user => {
      console.log("NAME" + user)
          this.props.loadUser(user);
         this.setState({Redirection_Value : true})
      })
  }

    componentDidMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = 'http://localhost:4004/user/getProfile/' + localStorage.getItem("email")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log(user[0].Name);
      this.setState({Name: user[0].Name})
      this.setState({PrimaryEmail: user[0].email})
      this.setState({AboutMe : user[0].aboutme})
      this.setState({CompanyName: user[0].company})
      this.setState({SchoolName: user[0].school})
      this.setState({StreetAddress: user[0].address})
      this.setState({Country: user[0].country})
      this.setState({City: user[0].hometown})
      this.setState({State: user[0].state})
      this.setState({Gender: user[0].gender})
      this.setState({Languages: user[0].language})
      this.setState({Contact: user[0].contact})
      this.setState({Redirection_Value : true})
      })
  }

	componentWillMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = 'http://localhost:4004/user/getProfile/' + localStorage.getItem("email")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log(user[0].name);
      this.setState({Name: user[0].name})
      this.setState({PrimaryEmail: user[0].email})
      this.setState({AboutMe : user[0].aboutme})
      this.setState({CompanyName: user[0].company})
      this.setState({SchoolName: user[0].school})
      this.setState({StreetAddress: user[0].address})
      this.setState({Country: user[0].country})
      this.setState({City: user[0].hometown})
      this.setState({State: user[0].state})
      this.setState({Gender: user[0].gender})
      this.setState({Languages: user[0].language})
      this.setState({Contact: user[0].contact})
      this.setState({Redirection_Value : true})
      })
	}

  /*
Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender)
  */

	render ()
	{
		return (
  <div class="accountinfo">
<div class="container shadowingcontainertraveller">
  <h1 class="page-header">Profile information</h1>
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
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.City} onChange={this.onCityChange} />
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
                <label for="zip">Contact</label>
                <input type="text" class="form-control form-control-lg" id="zip" onChange={this.onContactChange} value={this.state.Contact} placeholder="" required="" />
                <div class="invalid-feedback">
                  Contact required.
                </div>
              </div>
            </div>
            <button class="bluebutton btn btn-lg btn-block whitefont"  onClick= {this.SubmitChanges} type="submit">Save Changes</button>
          </form>
          </section>
      </div>
      </div>
      
      </div>

		);
	}
}

export default UserAccount;
