import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CruzCardJobGoogle from './Cards/CruzCardJobGoogle';
import CruzCardJobAmazon from './Cards/CruzCardJobAmazon';
import CruzCardJobFacebook from './Cards/CruzCardJobFacebook';
import CruzCardJobNetFlix from './Cards/CruzCardJobNetflix';
import CruzCardJobLinkedIn from './Cards/CruzCardJobLinkedIn'
import axios from 'axios';
// import './LandingPageView.css';


import { BASE_URL } from '../constants';
class LandingPageView extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            subscribed:false
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

        let NAVLOGIN = (<div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Account
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item " >Profile</a>
            <a className="dropdown-item" >Purchases</a>
            <a className="dropdown-item" >Billing</a>
            <a className="dropdown-item" >Log Out</a>
            <a className="dropdown-item" onClick={this.handleLogout} >Logout</a>
        </div>
</div>)
        

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
                        
                        <div>          
                            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                                <ul class="navbar-nav mr-auto">
                                {NAVLOGIN}
                                </ul>
                                </div>                              
                                </div>
                            </div>

                         </nav>
                           
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobGoogle paid={true} onSubscribe={this.subscribe}/>
                                <CruzCardJobGoogle paid={this.state.subscribed} onSubscribe={this.subscribe}/>
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
                                <CruzCardJobFacebook paid={this.state.subscribed}/>
                                <CruzCardJobFacebook paid={this.state.subscribed} onSubscribe={this.subscribe}/>
                                <CruzCardJobFacebook paid={this.state.subscribed} onSubscribe={this.subscribe}/>
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
                                <CruzCardJobAmazon paid={true}/>
                                <CruzCardJobAmazon paid={this.state.subscribed} onSubscribe={this.subscribe}/>
                                <CruzCardJobAmazon paid={this.state.subscribed} onSubscribe={this.subscribe}/>  
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
                                <CruzCardJobLinkedIn paid={true}/>
                                <CruzCardJobLinkedIn paid={this.state.subscribed} onSubscribe={this.subscribe}/>
                                <CruzCardJobLinkedIn paid={this.state.subscribed} onSubscribe={this.subscribe}/>  
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
                                <CruzCardJobNetFlix paid={true}/>
                                <CruzCardJobNetFlix paid={true} onSubscribe={this.subscribe}/>
                                <CruzCardJobNetFlix paid={this.state.subscribed} onSubscribe={this.subscribe}/>  
                            </div>


        );
    }
}


export default LandingPageView;