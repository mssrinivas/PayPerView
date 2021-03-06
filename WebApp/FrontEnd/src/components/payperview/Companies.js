import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CruzCard from './Cards/card.js';
import axios from 'axios';
import './Companies.css';
import { BASE_URL } from '../constants';
import CruzCardCompanyAmazon from './Cards/CruzCardCompanyAmazon';
import CruzCardCompanyFacebook from './Cards/CruzCardCompanyFacebook';
import CruzCardCompanyGoogle from './Cards/CruzCardCompanyGoogle';
import CruzCardCompanyLinkedIn from './Cards/CruzCardCompanyLinkedIn';
import CruzCardCompanyNetflix from './Cards/CruzCardCompanyNetflix';

class Companies extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            subscribedtoGoogle:false,
            subscribedtoFacebook:false,
            subscribedtoAmazon:true,
            subscribedtoNetflix:true,
            subscribedtoLinkedIn:false
        }
        this.subscribe = this.subscribe.bind(this)
    }

    subscribe = (e)=>{
         console.log(e.target.value)
        const url=BASE_URL+'/user/Payments/'
        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            credentials : 'include',
            body: JSON.stringify({
                email : window.localStorage.getItem("email"),
                amt_to_be_deducted : 0.5
            })
          })
          .then(response => {
            console.log(response)
            if(response.status===200){
                //const balance = response.data.balance;
                var company = window.localStorage.getItem("CurrentCompany")
                if(company=== "Google")
                    this.setState({subscribedtoGoogle:true})
                else if(company === "Facebook")
                    this.setState({subscribedtoFacebook:true})
                else if(company === "LinkedIn")
                     this.setState({subscribedtoLinkedIn:true})
                else if(company === "Netflix")
                    this.setState({subscribedtoNetflix:true})
                else if(company === "Amazon")
                    this.setState({subscribedtoAmazon:true})
            }else{
                alert("Payment Unsuccessful")
            }
        })
    }


    CaptureCompany = (e) => 
    {
        console.log("VALUE oF Current COmpany", e.target.value)
        window.localStorage.setItem("CurrentCompany",e.target.value)
    }
    render() { 
        let NAVLOGIN = (<li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle lower backwhite" href="Dashboard" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {"My Account"}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item " href="#">Profile</a>
            <a class="dropdown-item" href="/">Purchases</a>
            <a class="dropdown-item" href="/">Billing</a>
            <a class="dropdown-item" href="#">Log Out</a>
            <a class="dropdown-item" onClick={this.handleLogout} href="/" >Logout</a>
        </div>
</li>)


let BUTTONFORGOOGLE="";
let BUTTONFORFACEBOOK="";
let BUTTONFORAMAZON="";
let BUTTONFORLINKEDIN="";
let BUTTONFORNETFLIX="";


    if(this.state.subscribedtoGoogle===false)
    {
         BUTTONFORGOOGLE=
         <div>
             <div className="row justify-content-center mb-2 mt-2">
         <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.CaptureCompany} value="Google">View</button></div>
         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Payment Section</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
             <form>
               <div class="form-group">
                 <input type="radio" name="test" id="exampleInputEmail1" aria-describedby="emailHelp" />
                 &nbsp;&nbsp;<label for="exampleInputEmail1">Debit / Credit Card</label><br></br>
                 <input type="radio" name="test" id="exampleInputEmail2" placeholder="CVV" maxLength="3" />
                 &nbsp;&nbsp;<label for="exampleInputEmail2">Online Wallet</label>
               </div>
             </form>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary" onClick={this.subscribe} data-dismiss="modal">Pay</button>
             </div>
           </div>
         </div>
         </div>  
         </div>
    }
    if(this.state.subscribedtoFacebook===false)
    {
        BUTTONFORFACEBOOK=
        <div>
        <div className="row justify-content-center mb-2 mt-2">
        <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.CaptureCompany} value="Facebook">View</button></div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Payment Section</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
          <div class="form-group">
            <input type="radio" name="test" id="exampleInputEmail1" aria-describedby="emailHelp" />
            &nbsp;&nbsp;<label for="exampleInputEmail1">Debit / Credit Card</label><br></br>
            <input type="radio" name="test" id="exampleInputEmail2" placeholder="CVV" maxLength="3" />
            &nbsp;&nbsp;<label for="exampleInputEmail2">Online Wallet</label>
          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={this.subscribe} data-dismiss="modal">Pay</button>
        </div>
      </div>
    </div>
    </div>  
    </div>
    }
    if(this.state.subscribedtoAmazon===false)    
    {
       BUTTONFORAMAZON=
       <div>
       <div className="row justify-content-center mb-2 mt-2">
       <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.CaptureCompany} value="Amazon">View</button></div>
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Payment Section</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
       <form>
         <div class="form-group">
           <input type="radio" name="test" id="exampleInputEmail1" aria-describedby="emailHelp" />
           &nbsp;&nbsp;<label for="exampleInputEmail1">Debit / Credit Card</label><br></br>
           <input type="radio" name="test" id="exampleInputEmail2" placeholder="CVV" maxLength="3" />
           &nbsp;&nbsp;<label for="exampleInputEmail2">Online Wallet</label>
         </div>
       </form>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary" onClick={this.subscribe} data-dismiss="modal">Pay</button>
       </div>
     </div>
   </div>
   </div>  
   </div>
    }
    if(this.state.subscribedtoLinkedIn===false)
    {
        BUTTONFORLINKEDIN=
        <div>
        <div className="row justify-content-center mb-2 mt-2">
        <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.CaptureCompany} value="LinkedIn">View</button></div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Payment Section</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
          <div class="form-group">
            <input type="radio" name="test" id="exampleInputEmail1" aria-describedby="emailHelp" />
            &nbsp;&nbsp;<label for="exampleInputEmail1">Debit / Credit Card</label><br></br>
            <input type="radio" name="test" id="exampleInputEmail2" placeholder="CVV" maxLength="3" />
            &nbsp;&nbsp;<label for="exampleInputEmail2">Online Wallet</label>
          </div>
        </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={this.subscribe} data-dismiss="modal">Pay</button>
        </div>
      </div>
    </div>
    </div>  
    </div>
    }
    if(this.state.subscribedtoNetflix===false)
    {
         BUTTONFORNETFLIX=
         <div>
         <div className="row justify-content-center mb-2 mt-2">
         <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.CaptureCompany} value="Netflix">View</button></div>
     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog" role="document">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">Payment Section</h5>
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
         <div class="modal-body">
         <form>
           <div class="form-group">
             <input type="radio" name="test" id="exampleInputEmail1" aria-describedby="emailHelp" />
             &nbsp;&nbsp;<label for="exampleInputEmail1">Debit / Credit Card</label><br></br>
             <input type="radio" name="test" id="exampleInputEmail2" placeholder="CVV" maxLength="3" />
             &nbsp;&nbsp;<label for="exampleInputEmail2">Online Wallet</label>
           </div>
         </form>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary" onClick={this.subscribe} data-dismiss="modal">Pay</button>
         </div>
       </div>
     </div>
     </div>  
     </div>
    }

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

                          <div className="row mt-3 mb-1 justify-content-center" >
                                <div className="col col-md-10">
                                    <h2>Google</h2>
                                        <div style={{display:'flex'}}>
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <img className="contain" src="https://img.icons8.com/wired/64/2ecc71/overview-pages-2.png" style={{width:'50%'}} alt="overview" />
                                                <Link to="#" className="card-link">Overview</Link>
                                                </div>
                                                </div>
                                            
                                            
                         
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>40</p>
                                                <Link to="#" className="card-link">Reviews</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>167</p>
                                                <Link to="#" className="card-link">Jobs</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>223</p>
                                                <Link to="#" className="card-link">Salaries</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>315</p>
                                                <Link to="#" className="card-link">Interviews</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>69</p>
                                                <Link to="#" className="card-link">Benefits</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>60</p>
                                                <Link to="#" className="card-link">Photos</Link>
                                                </div>
                                                </div>
                                            
                                        
                                        </div>
                                        
		</div>
                                </div>

                     
                                <CruzCardCompanyGoogle paid={this.state.subscribedtoGoogle} value="google"/>
                                {BUTTONFORGOOGLE}                     

                                <div className="row mt-3 mb-1 justify-content-center" >
                                <div className="col col-md-10">
                                    <h2>Facebook</h2>
                                        <div style={{display:'flex'}}>
                                        
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <img className="contain" src="https://img.icons8.com/wired/64/2ecc71/overview-pages-2.png" style={{width:'50%'}} alt="overview" />
                                                <Link to="#" className="card-link">Overview</Link>
                                                </div>
                                                </div>
                                            
                                            
                         
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>40</p>
                                                <Link to="#" className="card-link">Reviews</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>167</p>
                                                <Link to="#" className="card-link">Jobs</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>223</p>
                                                <Link to="#" className="card-link">Salaries</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>315</p>
                                                <Link to="#" className="card-link">Interviews</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>69</p>
                                                <Link to="#" className="card-link">Benefits</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>60</p>
                                                <Link to="#" className="card-link">Photos</Link>
                                                </div>
                                                </div>
                                            
                                        
                                        </div>
                                        
		</div>
                                </div>
                                <CruzCardCompanyFacebook paid={this.state.subscribedtoFacebook}/>
                                {BUTTONFORFACEBOOK}
                                <div className="row mt-3 mb-1 justify-content-center" >
                                <div className="col col-md-10">
                                    <h2>Amazon</h2>
                                        <div style={{display:'flex'}}>
                                        
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <img className="contain" src="https://img.icons8.com/wired/64/2ecc71/overview-pages-2.png" style={{width:'50%'}} alt="overview" />
                                                <Link to="#" className="card-link">Overview</Link>
                                                </div>
                                                </div>
                                            
                                            
                         
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>40</p>
                                                <Link to="#" className="card-link">Reviews</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>167</p>
                                                <Link to="#" className="card-link">Jobs</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>223</p>
                                                <Link to="#" className="card-link">Salaries</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>315</p>
                                                <Link to="#" className="card-link">Interviews</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>69</p>
                                                <Link to="#" className="card-link">Benefits</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>60</p>
                                                <Link to="#" className="card-link">Photos</Link>
                                                </div>
                                                </div>
                                            
                                        
                                        </div>
                                        
		</div>
                                </div> 
                                <CruzCardCompanyAmazon paid={this.state.subscribedtoAmazon}/> 
                                {BUTTONFORAMAZON}
                                <div className="row mt-3 mb-1 justify-content-center" >
                                <div className="col col-md-10">
                                    <h2>LinkedIn</h2>
                                        <div style={{display:'flex'}}>
                                        
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <img className="contain" src="https://img.icons8.com/wired/64/2ecc71/overview-pages-2.png" style={{width:'50%'}} alt="overview" />
                                                <Link to="#" className="card-link">Overview</Link>
                                                </div>
                                                </div>
                                            
                                            
                         
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>40</p>
                                                <Link to="#" className="card-link">Reviews</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>167</p>
                                                <Link to="#" className="card-link">Jobs</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>223</p>
                                                <Link to="#" className="card-link">Salaries</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>315</p>
                                                <Link to="#" className="card-link">Interviews</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>69</p>
                                                <Link to="#" className="card-link">Benefits</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>60</p>
                                                <Link to="#" className="card-link">Photos</Link>
                                                </div>
                                                </div>
                                            
                                        
                                        </div>
                                        
		</div>
                                </div>
                                <CruzCardCompanyLinkedIn paid={this.state.subscribedtoLinkedIn} onSubscribe={this.subscribe}/>
                                {BUTTONFORLINKEDIN}
                                <div className="row mt-3 mb-1 justify-content-center" >
                                <div className="col col-md-10">
                                    <h2>Netflix</h2>
                                        <div style={{display:'flex'}}>
                                        
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <img className="contain" src="https://img.icons8.com/wired/64/2ecc71/overview-pages-2.png" style={{width:'50%'}} alt="overview" />
                                                <Link to="#" className="card-link">Overview</Link>
                                                </div>
                                                </div>
                                            
                                            
                         
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>40</p>
                                                <Link to="#" className="card-link">Reviews</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>167</p>
                                                <Link to="#" className="card-link">Jobs</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>223</p>
                                                <Link to="#" className="card-link">Salaries</Link>
                                                </div>
                                                </div>
                                            
                                            
                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>315</p>
                                                <Link to="#" className="card-link">Interviews</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>69</p>
                                                <Link to="#" className="card-link">Benefits</Link>
                                                </div>
                                                </div>
                                            

                                            
                                                <div className="card overview-border" style={{width: '10rem'}}>
                                                <div className="card-body">
                                                <p>60</p>
                                                <Link to="#" className="card-link">Photos</Link>
                                                </div>
                                                </div>
                                            
                                        
                                        </div>
                                        
		</div>
                                </div>
                                <CruzCardCompanyNetflix paid={this.state.subscribedtoNetflix}/> 
                                {BUTTONFORNETFLIX}                             
                            </div>


        );
    }
}


export default Companies;