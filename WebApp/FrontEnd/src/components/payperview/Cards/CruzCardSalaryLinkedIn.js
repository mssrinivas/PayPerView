import React, { Component } from 'react';

class CruzCardSalaryLinkedIn extends Component {
    
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
            //button=<div className="row justify-content-center mb-2 mt-2"><button  className="btn btn-primary" onClick={this.subscription} style={{fontSize:'16px'}} data-toggle="tooltip" data-placement="right" title="Lets you subscribe this particular information">Subscribe</button></div>
        }

        
        
        return ( 
            <div  className="row mt-2 mb-2 justify-content-center">
            <div className="col-md-10 mt-2 mb-2 info-row" style={{color:'white'}}>
                <div className={cName}>
                
                    <div className="col-md-3">
                    <img classNameName="w-100 contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAbKhV6eGA1_K5bQ_95UnfGm709i6p6Qel7sVMNGB35gG7cUH" alt="linkedin" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                       
                          <h5>Salaries at LinkedIn</h5>
                        <p>
                            Senior Software Engineer 140,000$/yr
                            Sales Manager 90,000$/yr
                        </p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardSalaryLinkedIn;