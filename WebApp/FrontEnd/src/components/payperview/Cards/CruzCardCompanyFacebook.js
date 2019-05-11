import React, { Component } from 'react';

class CruzCardCompanyFacebook extends Component {
    
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
                    <img classNameName="w-100 contain" src="http://ramboscountrystore.com/wp-content/uploads/2010/10/facebook-logo-2.jpg" alt="facebook" />
                        
                    </div>
                    <div className="col-md-9 mt-2 mb-2">
    
                        <h5>About</h5>
                        <p>
                            Facebook is one of the social media giants. People at Facebook work in small teams and move fast to develop new products, constantly iterating.
                        </p>
                        <h5>Headquarters</h5>
                        <p>
                            Facebook is headquartered at Menlo Park in California
                        </p>
                        <h5>Industry</h5>
                        <p>
                            Facebook is one of the leaders in the internet space particularly in social media domain
                        </p>
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardCompanyFacebook;