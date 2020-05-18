import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

class Restaurant_details extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            list:[]
        }
    }
    componentDidMount(){
        const URL="https://resto.com.my/api/frontEnd/restaurant/restaurantsDetails"
        axios.get(URL, 
            {
                headers: {
                    'x-api-key': 'Sdrops!23' ,
                   'Access-Control-Allow-Origin': '*',
                   crossdomain: true,
                   'Content-Type': null

                } 
             })

        .then(res=>{
            console.log(res.data.Data);
            this.setState({list:res.data.Data})
        })
        .catch(error =>{
            console.log(error);
        })

        
    }

    render() {
       const  {list}=this.state
       const saa=list.length
        return (
            <div>
                 
        <div className="container">
            
             <div className="category">
                <div className="categorybrd" >
                <b>{saa} Restaurants</b>
                </div>
                <div className="sub-category">
                
               
                <select data-placeholder="Choose a Category..." className="chosen-select" tabIndex="2">
                    <option value=" "></option>
               <option value="United States">Relavence</option>
               <option value="United Kingdom">Cost For Two</option>
               <option value="Afghanistan">Rating</option>
               </select>
               </div>
            </div>
            
			

            	{
                    
                    list.length ?
                    list.map(post =>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-3" key={post.branch_id} >
                    
                    <div className="bg-gray restaurant-entry">
                        <div className="row">
                            <div className="imgcvr">
                                <div className="entry-logo">
                                <Link onClick={e => { e.preventDefault(); window.location.href = '/itemlist?branch='+post.branch_id }} >
                                    <a className="img-fluid" >
                                        <img src={
                                            !!(post.branch_image)?post.branch_image:
                                            "dist/images/logo/feasto-orange-1.png"
                                            } alt="Food logo"/>
                                    </a>
                                    </Link>
                                </div>
                               
                                <div className="entry-dscr"> 
                                     <h5> {post.restaurant_name} </h5>
                                     <span>{!!(post.cuisine_details)?                                        
                                     post.cuisine_details.substring(0, 39):"Cuisine -"}</span>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                        
                                        <span className="star"> <i className="fa fa-star startimg" aria-hidden="true"></i>
                    {post.rating}</span></li>
                                        <span className="locmark">{!!(post.locality)?                                        
                                     post.locality:"Location Not Available"}</span>
                                        <span className="offer"><img src="dist/images/off.png" width="30" height="30"/>
                                        10 % Off on all items
                                        </span>
                                    </ul>
                                  
                                </div>
                               
                            </div>
                           
                        </div>
                      
                    </div>
                

                   

    </div>
                    ):null
}
            </div>
        </div>
        )    
        } 
}

export default Restaurant_details
