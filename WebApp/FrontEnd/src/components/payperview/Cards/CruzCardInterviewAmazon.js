import React, { Component } from 'react';

class CruzCardInterviewAmazon extends Component {
    
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
           // button=<div className="row justify-content-center mb-2 mt-2"><button  className="btn btn-primary" onClick={this.subscription} style={{fontSize:'16px'}} data-toggle="tooltip" data-placement="right" title="Lets you subscribe this particular information">Subscribe</button></div>
        }

        
        
        return ( 
            <div  className="row mt-2 mb-2 justify-content-center">
            <div className="col-md-10 mt-2 mb-2 info-row" style={{color:'white'}}>
                <div className={cName}>
                
                    <div className="col-md-3">
                        <img classNameName="w-100 contain" src="https://www.pushwoosh.com/wp-content/uploads/2013/08/amazon-1.png" alt="amazon" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                        <h5>Position Name</h5>
                        <p>
                            Software Engineer II
                        </p>
                        <h5>Interview</h5>
                        <p>
                        Met a number of people on the team and they seemed terrific. Phone and in person. They wanted to understand what I'd done in the past and how I would approach the project.
                        </p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardInterviewAmazon;