import React from 'react'

import axios from 'axios'
import queryString from 'query-string'
import Slider from '@farbenmeer/react-spring-slider';
import PropTypes from 'prop-types'

 class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            resdet:[]
        }


	
        
    }
    componentDidMount(){
        let pramss = queryString.parse(window.location.search)
        const restdetail="https://resto.com.my/api/frontEnd/restaurant/restaurantsDetails?branch_id="+pramss.branch
        
        //console.log(pramss)
        axios.get(restdetail, 
            {
                headers: {
                    'x-api-key': 'Sdrops!23' ,
                   'Access-Control-Allow-Origin': '*',
                   crossdomain: true,
                   'Content-Type': null

                } 
             })

        .then(res=>{
          //  console.log(res.data.Data);
            this.setState({resdet:res.data.Data})
            
        })
        .catch(error =>{
            console.log(error);
        })

        
    }

    render() {
        
        const  {resdet}=this.state
       // console.log(resdet[0].reviewDetails)
        const countf=''
        const onSlideChange = index => console.log(`changed to slide ${index}`);

        const BulletComponent = ({onClick, isActive}) => (
            <li
                style={{
                    width: '25px',
                    height: '25px',
                    backgroundColor: 'red',
                    margin: '0 2px',
                    opacity: isActive && '0.5'
                }}
                onClick={onClick}
            />
        );
    
        BulletComponent.propTypes = {
            onClick: PropTypes.func.isRequired,
            isActive: PropTypes.bool.isRequired
        };
    
        const ArrowComponent = ({onClick, direction}) => {
            return (
                <div
                    style={{
                        border: '1px solid black',
                        padding: '1em',
                        backgroundColor: 'white'
                    }}
                    onClick={onClick}
                >
                    {direction}
                </div>
            );
        };
    
        ArrowComponent.propTypes = {
            onClick: PropTypes.func.isRequired,
            direction: PropTypes.string.isRequired
        };
        if (window.location.pathname === '/about'){
            return(
                <div className="bg-image bannerimgabt" 
         style={{height:"615px"}}>
		  <div className="container">
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                <a className="navbar-brand" href=""> 
                    <img className="img-rounded" src="dist/images/logo/logo-white.png" alt=""/>
                </a>
                <div className="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/home">Home <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/about">About Us <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " 
                               href="/restaurant_details">Restaurants <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item hide">
                            <a className="nav-link " 
                               href="">Reviews <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " 
                               href="">Contact <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Register <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Login <span className="sr-only">(current)</span></a> 
                        </li>

                    </ul>
                </div>
            </div>
		<div className="aboutuscn"></div>
        <div className="aboutusc">
			<a>OUR MISSION</a>
			<h2>Never have a bad food</h2>
		</div>
		 </div>

            )
        }
       else if (window.location.pathname === '/home'){
            return(
                
<Slider activeIndex={3} 
			 
			hasBullets 
			BulletComponent={BulletComponent}
			ArrowComponent={ArrowComponent}
			onSlideChange={onSlideChange}>
			<div><img width="100%" className="img-rounded" src="dist/images/hm3.jpg" alt=""/></div>
			<div><img width="100%" src="dist/images/hm9.jpeg" alt=""/></div>
			<div><img width="100%" className="img-rounded" src="dist/images/hm3.jpg" alt=""/></div>
		</Slider>
      )
        }
        else if ((window.location.pathname === '/itemlist') ||(window.location.pathname === '/itemdetails')){
            
            return ( 
               
                <div>
                
               <div id="header" className="header-scroll top-header " style={{display: "none"}}>
  <div className="container">
          
                <a className="navbar-brand" href=""> 
                    <img className="img-rounded" src="dist/images/logo/logo-white.png" alt=""/>
                </a>
				<div className="topbar">
				
				<input type="text" className="form-control search-new detailsearch" placeholder="Search your favorite food"/> 
				<input type="button" className="searchbtn" value="Search"/> <i className="fa fa-search searchbt" aria-hidden="true"></i></div>
				
                <div className="collapse navbar-toggleable-md  float-lg-right menudetail" id="mainNavbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="/home">Home <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Register <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Login <span className="sr-only">(current)</span></a> 
                        </li>
						<li className="nav-item link-white cartfunction">
						
                            <a className="nav-link " 
                               href=""><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart <span className="sr-only">(current)</span></a>
							   
                        </li>

                    </ul>
					
                </div>
           

		   </div>
		</div>
       
       
                <div className="bg-image bannerimgcolor itemhd" >
		         <div className="container">
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                <a className="navbar-brand" href=""> 
                    <img className="img-rounded" src="dist/images/logo/logo-white.png" alt=""/>
                </a>
                <div className="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/home">Home <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" 
                               href="/about">About Us <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " 
                               href="/restaurant_details">Restaurants <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item hide">
                            <a className="nav-link " 
                               href="">Reviews <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " 
                               href="">Contact <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Register <span className="sr-only">(current)</span></a> 
                        </li>
                        <li className="nav-item link-white">
                            <a className="nav-link " 
                               href="">Login <span className="sr-only">(current)</span></a> 
                        </li>

                    </ul>
                </div>
              
            </div>
            
            {
                    
                    resdet.length ?
                    resdet.map(post => 
                        
		<div className="carttop" key={post.branch_id}>
			<img src={!!(post.branch_image)?post.branch_image:"dist/images/logo/feasto-orange-1.png"
                                            }  className="topimg"/>
			<h4 className="restaurantname"> {post.restaurant_name} </h4>
			<p className="streetname">{!!(post.cuisine_details)?                                        
                                     post.cuisine_details.substring(0, 50):"Cuisine -"}</p>
			<p className="streetname-1">{post.branch_address},{post.branch_address2}</p>
			<span className="streetname-2">
			<i className="fa fa-star startimg" aria-hidden="true" ></i>
			{post.rating} / {post.reviewDetails.length} + Ratings </span>
			<input type="text" placeholder="Search your Favorite"className="form-control search-cart"/>
		 </div>
           ):null
        }
		 </div>
         
         
         </div>
                  
            )
        }
    else{
        return (          
            
            <div className="bg-image bannerimg heightimg"  >
                <div className="container">
                   <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">&#9776;</button>
                   <a className="navbar-brand" href=""> 
                       <img className="img-rounded" src="dist/images/logo/logo-white.png" />
                   </a>
                   <div className="collapse navbar-toggleable-md  float-lg-right" id="mainNavbarCollapse">
                       <ul className="nav navbar-nav">
                           <li className="nav-item">
                               <a className="nav-link" 
                                  href="/home">Home <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" 
                                  href="/about">About Us <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item">
                               <a className="nav-link " 
                                  href="/restaurant_details">Restaurants <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item hide">
                               <a className="nav-link " 
                                  href="">Reviews <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item">
                               <a className="nav-link " 
                                  href="">Contact <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item link-white">
                               <a className="nav-link " 
                                  href="">Register <span className="sr-only">(current)</span></a> 
                           </li>
                           <li className="nav-item link-white">
                               <a className="nav-link " 
                                  href="">Login <span className="sr-only">(current)</span></a> 
                           </li>
   
                       </ul>
                   </div>
               </div>
               <div className="inputcovhmres">
		
        <select data-placeholder="Choose a Location..." className="chosen-select locationdiv" tabindex="2">
           <option value=""></option>
           <option value="United States">United States</option>
           <option value="United Kingdom">United Kingdom</option>
           <option value="Afghanistan">Afghanistan</option>
           </select>
        <input type="text" className="form-control search-new" placeholder="Search your favorite food"/> 
        <input type="button" className="searchbtnhm" value="Search"/> <i className="fa fa-search searchbthm" aria-hidden="true"></i>

        </div>
      
            
            
            </div>
        )
       }
    }
}
export default Header