import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CruzCard from './Cards/card.js';
import axios from 'axios';
import './Companies.css';

import CruzCardCompanyAmazon from './Cards/CruzCardCompanyAmazon';
import CruzCardCompanyFacebook from './Cards/CruzCardCompanyFacebook';
import CruzCardCompanyGoogle from './Cards/CruzCardCompanyGoogle';
import CruzCardCompanyLinkedIn from './Cards/CruzCardCompanyLinkedIn';
import CruzCardCompanyNetflix from './Cards/CruzCardCompanyNetflix';

class Companies extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            subscribed:false
        }

        this.subscribe = this.subscribe.bind(this)
    }

    subscribe = (e)=>{
        const url=""
        axios.post(url).then((response)=>{
            if(response.status===200){
                const balance = response.data.balance;
                alert("We successfully received your payment. Your balance is "+balance+" HBR")
                this.setState({subscribed:true})
            }else{
                alert("Hedera couldn't process your payment")
            }
        })
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
                        <form className="form-inline my-2 my-lg-0 mr-auto">
                            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-primary my-2 my-sm-0 ml-2" style={{fontSize:'18px'}} type="button">Search</button>
                        </form>  
                        <div>          
                            <div id="navbarNavDropdown" class="navbar-collapse collapse">
                                <ul class="navbar-nav mr-auto">
                                {NAVLOGIN}
                                </ul>
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

                           
                                <CruzCardCompanyGoogle paid={true}/>
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
                                <CruzCardCompanyFacebook paid={this.state.subscribed}/>
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
                                <CruzCardCompanyAmazon paid={true}/> 
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
                                <CruzCardCompanyLinkedIn paid={this.state.subscribed} onSubscribe={this.subscribe}/>
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
                                <CruzCardCompanyNetflix paid={true}/> 
                            </div>


        );
    }
}


export default Companies;