import React, { Component } from 'react';

class CruzCardInterviewNetflix extends Component {
    
    constructor(props){

        super(props)
        this.subscription = this.subscription.bind(this)

    }

    subscription = (e)=>{
        console.log("subsscription");
        if(this.props.paid){
            return
        }else{
            this.props.onSubscribe();
        }
    }

    render() { 
        
        var cName=""
        var button = ""
        if(this.props.paid){
            //cName="col-md-10 mt-2 mb-2 info-row undecipher"
            cName = "row pt-2 undecipher"
            button=""
        }else{
            //cName="col-md-10 mt-2 mb-2 info-row decipher";
            cName = "row pt-2 decipher"
            button=<div className="row justify-content-center mb-2 mt-2"><button  className="btn btn-primary" onClick={this.subscription} style={{fontSize:'16px'}} data-toggle="tooltip" data-placement="right" title="Lets you subscribe this particular information">Subscribe</button></div>
        }

        
        
        return ( 
            <div  className="row mt-2 mb-2 justify-content-center">
            <div className="col-md-10 mt-2 mb-2 info-row" style={{color:'white'}}>
                <div className={cName}>
                
                    <div className="col-md-3">
                    <img classNameName="w-100 contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHlGAToWObRdh-1ZQK5GktK7TQYqB3r1IlPXT4Bmd8_z10-hI" alt="netflix" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                     
                        <h5>Position Name</h5>
                        <p>
                            Senior Infrastructure Engineer
                        </p>
                        <h5>Interview</h5>
                        <p>
                            Applied online. Received an email one week later scheduling phone interview. Phone interview lasted twenty minutes. Interviewer commented that I did not have enough experience for the position. Did not receive any further communication from the company.
                        </p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardInterviewNetflix;