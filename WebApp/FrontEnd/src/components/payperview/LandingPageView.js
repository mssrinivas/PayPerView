import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import CruzCard from './card.js';
import axios from 'axios';


class LandingPageView extends Component {
    
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
        

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom:'0.5px solid #BCBCBC'}}>
                    <h3 style={{color:'#0CAA41'}}><b>Glasswindow</b></h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div style={{display:'flex'}}>
                            <a className="nav-link" style={{color:'black'}} href="#">Jobs</a>
                            <a className="nav-link" style={{color:'black'}} href="#">Companies</a>
                            <a className="nav-link" style={{color:'black'}} href="#">Salary</a>
                            <a className="nav-link" style={{color:'black'}} href="#">Interviews</a>
                            <a className="nav-link" style={{color:'black'}} href="#">Salary Calculator</a>
                        </div>
                        <form className="form-inline my-2 my-lg-0 mr-auto">
                            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-primary my-2 my-sm-0 ml-2" style={{fontSize:'18px'}} type="button">Search</button>
                        </form>
                    </div>
                </nav>


                    <div className="row justify-content-center mt-1 mb-1" style={{borderBottom:'0.5px solid #BCBCBC'}} >
                        <form className="form-inline my-2 my-lg-0 mb-2 mt-2">
                            <input className="form-control col-md-3 mr-sm-2" type="search" placeholder="Company" aria-label="Search"/>
                                
                            <div class="btn-group mr-auto ml-sm-4 mb-2" style={{fontSize:'18px'}}>
                                <button type="button" className="btn btn-primary dropdown-toggle" style={{fontSize:'16px'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jobs</button>
                            <div class="dropdown-menu">
                                <p className="dropdown-item" >Companies</p>
                                <p className="dropdown-item" >Salaries</p>
                                <p className="dropdown-item" >Reviews</p>
                            </div>
                            </div>

                                <input className="form-control mr-sm-1 mb-2" type="search" placeholder="Location" aria-label="Search"/>
                                    <button className="btn btn-primary my-2 my-sm-0" style={{fontSize:'18px'}} type="button">Search</button>
                        </form>
                    </div>

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
                                <div className="row mt-2 mb-2 justify-content-center">
                                    <div className="col-md-10">
                                        <h4>Candidate Reviews for Top Jobs at Netflix</h4>
                                    </div>
                                </div>

                                

                                <CruzCard paid={true}/>
                                <CruzCard paid={this.state.subscribed} onSubscribe={this.subscribe}/>
                                <CruzCard paid={this.state.subscribed} onSubscribe={this.subscribe}/>

                                


                            </div>


        );
    }
}


export default LandingPageView;