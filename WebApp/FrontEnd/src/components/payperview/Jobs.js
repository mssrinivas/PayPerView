import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CruzCard from './Cards/card.js';
import axios from 'axios';
import './Jobs.css';
import { BASE_URL } from '../constants';
import CruzCardJobAmazon from './Cards/CruzCardJobAmazon';
import CruzCardJobFacebook from  './Cards/CruzCardJobFacebook';
import CruzCardJobLinkedIn from './Cards/CruzCardJobLinkedIn';
import CruzCardJobNetflix from './Cards/CruzCardJobNetflix';
import CruzCardJobGoogle from './Cards/CruzCardJobGoogle';

class Jobs extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            subscribed:false
        }
        this.subscribe = this.subscribe.bind(this)
    }

    subscribe = (e)=>{
        const url=BASE_URL + '/user/Payments'
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
                            <a className="nav-link" style={{color:'black'}} href="/payperview/Jobs">Jobs</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                       
                        <div className="padleftCompany">          
                        <div  style={{display:'flex'}} >&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/useraccount">MyProfile</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a className="nav-link" style={{color:'black'}} href="/login">LogOut</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>  
                        </div>
                            </div>
                         </nav>
                                <CruzCardJobNetflix paid={true}/> 
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobFacebook paid={true}/>
                                <CruzCardJobFacebook paid={true}/>
                                <CruzCardJobNetflix paid={true}/> 
                                <CruzCardJobFacebook paid={true}/>
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobAmazon paid={true}/> 
                                <CruzCardJobLinkedIn paid={true}/>
                                <CruzCardJobAmazon paid={true}/> 
                                <CruzCardJobFacebook paid={true}/>
                                <CruzCardJobNetflix paid={true}/> 
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobFacebook paid={true}/>
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobAmazon paid={true}/> 
                                <CruzCardJobAmazon paid={true}/> 
                                <CruzCardJobGoogle paid={true}/>
                                <CruzCardJobFacebook paid={true}/>
                    </div>


        );
    }
}

export default Jobs;