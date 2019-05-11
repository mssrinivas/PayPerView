import React, { Component } from 'react';

class CruzCard extends Component {
    
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
                        <img classNameName="w-100 contain" src="https://img.icons8.com/color/48/7a7a7a/netflix.png" alt="netflix" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                        <ul className="list-inline mr-auto">
                            <li className="list-inline-item"><a className="text-xs-center" target="_blank" href="#">Overview</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">No Offer</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">Bad Experience</a></li>
                            <li className="list-inline-item"><a className="text-xs-center" href="#">Average Interview</a></li>
                        </ul>
                        <h5>Pros</h5>
                        <p>

                            Innovative Product/Platform company. Please love working for this company, and want to be associated to Netflix, as it is one of the fastest growing company in the Streaming industry.</p>
                        <h5>Cons</h5>
                        <p>

                            No free lunches like many Bay Area Companies</p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCard;