import React, { Component } from 'react';

class CruzCardCompanyAmazon extends Component {
    
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
    
                 
                        <h5>About</h5>
                        <p>
                            Amazon empowers small and medium-sized businesses to reach millions of customers through it's cloud services.
                            Small businesses find success selling gourmet foods and specialty items in Amazon's stores.
                            Amazon invests in transportation capabilities to provide fast, free shipping to customers.
                        </p>
                        <h5>Headquarters</h5>
                        <p>
                            Amazon is headquarted at Seattle, WA
                            
                        </p>
                        <h5>Industry</h5>
                        <p>
                            Amazon is one of the leaders in e-commerce and it's cloud services.
                        </p>
                        {/* <h5>Cons</h5>
                        <p>

                            No free lunches like many Bay Area Companies</p> */}
                    </div>
                </div>
                {button}
                
            </div>
            
        </div>
         );
    }
}
 
export default CruzCardCompanyAmazon;