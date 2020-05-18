import React from 'react'
import axios from 'axios'
import queryString from 'query-string';

class Itemdetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            list:[],
            addons:true,
            ing:false,
            desc:false,
            review:false
        }

    }
    operation(){
        this.setState({
            addons:true,
            ing:false,
            desc:false,
            review:false
        })
    }
    operation1(){
        this.setState({
            ing:true,
            addons:false,
            desc:false,
            review:false
        })
    }
    operation2(){
        this.setState({
            ing:false,
            addons:false,
            desc:true,
            review:false
        })
    }
    operation3(){
        this.setState({
            ing:false,
            addons:false,
            desc:false,
            review:true
        })
    }

        componentDidMount(){
            let branchid = queryString.parse(this.props.location.search)
            let cateid = queryString.parse(this.props.location.search)
            //console.log(params.branch)
    
            const URL='http://resto.com.my/api/pos/touch_order/item_lists?branch_id='+branchid.branch+'&item_id='+cateid.item_id
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
                console.log(res.data.item_lists);
                this.setState({list:res.data.item_lists})
            })
           
            .catch(error =>{
                console.log(error);
            })
    
           
            
        }
    
    render() {
     const {list}=this.state
         return (
             <div>
                    <section className="restaurants-page">
        <div className="container">
            <div className="row">
                {
                    !!(list.length)?
                    list.map(listiemsdetails=>
				 <div className="col-xs-12 col-sm-7 col-md-7 col-lg-4 leftbottom" key={listiemsdetails.id}> 
				 <h3>{listiemsdetails.name}</h3>
					<div className="imgcvrdetails">
					
					 <img className="rightm"  src={
                                            !!(listiemsdetails.item_img)?listiemsdetails.item_img:
                                            "dist/images/logo/feasto-orange-1.png"
                                            }/>
					</div>
					
				 </div>
                    ):null
                }
				 <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8 rightsidebars"> 
                 {
                     !!(list.length)?
                     list.map(listiemsdetails=>
					<div className="rightadd" key={listiemsdetails.id}>
					<span  className="spanadd">
							<a  className="dishdd">{listiemsdetails.name}</a>
							
						</span>
						<a className="slicename">{listiemsdetails.cuisine_name}</a>
					   <span className="namefor">
							<i className="fa fa-usd detailusd" ></i>  <a className="itmpricename" >{listiemsdetails.price}</a>
						</span>
						<input className="addbutton buttndetail" type="button" value="ADD"/>
					</div>
                     ):null
                 }
					<div className="sub-categorynew">
					   <a className="filters addon" onClick={()=>this.operation()}>Add-Ons</a>
					   <a className="filters ing" onClick={()=>this.operation1()} >Ingredients</a>
					   <a className="filters desc" onClick={()=>this.operation2()}>Descriptions</a>
					   <a className="filters review" onClick={()=>this.operation3()}>Review</a>
					</div>
                    {

                    this.state.addons?
                    
					<div className="addons">
                        {
                        !!(list.length)?
                    list.map(listiems=>
                        listiems.topping_details.map(post=>
					<div className="col-xs-12 col-sm-7 col-md-7 col-lg-3" key={post.sub_toppings_id}>
						<div className="bg-gray addonsimgs">
							<div className="row">
				<div className="imgcvr">
					<div className="entry-logo">
						<a className="img-fluid" href="">
							<img src="dist/images/logo/ice.jpg" alt="Food logo"/>
						</a>
					</div>
					<div className="entry-dscr tagesfnt">
							<a className="spanadd">{post.topping_name}</a>
							
					   <span className="detailalign">
							<i className="fa fa-usd"  ></i>  <a href="">{post.price}</a>
						</span>
						<input className="addbtnews" type="button" value="ADD"/>
						
				</div>
			   
			</div>
			</div>                               

						</div>												
	

					</div>
                   
                    )
                    ):null
                    }
					</div>
                :null    
                }
                {
                    this.state.ing?
				 <div className="ingd">
                     
                     
                        
						<ul >
                            {
                                !!(list.length)?
                                list.map(listiems=>
                                !!(listiems.ingredients_details)?
                                 listiems.ingredients_details.map(postd=>
							<li key={postd.id}>{postd.name}</li>
                                ):null  
                                ):null
                            
                            }
						
						</ul>
                        
                       
						
				 </div>
                :null
                }
                {
                    this.state.desc?
                    
                        !!(list.length)?
                        list.map(listiemsdetails=>
                 <div className="descc" key={listiemsdetails.name}>
						<p>{listiemsdetails.description}</p>
						
				 </div>
                        ):null
                :null
                }
				 {
                     this.state.review?
				 <div className="reviewtab">
					<div className="titlerv">
					<span className="starnr"> 
					<i className="fa fa-star startimgne" aria-hidden="true"></i>
						4.5</span>
						<h4>Best product Really Like!</h4>
						<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					</div>
					<div className="titlerv">
					<span className="starnr"> 
					<i className="fa fa-star startimgne" aria-hidden="true"></i>
						4.5</span>
						<h4>Best product Really Like!</h4>
						<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					</div>
					<div className="titlerv">
					<span className="starnr"> 
					<i className="fa fa-star startimgne" aria-hidden="true"></i>
						4.5</span>
						<h4>Best product Really Like!</h4>
						<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					</div>
					<div className="titlerv">
					<span className="starnr"> 
					<i className="fa fa-star startimgne" aria-hidden="true"></i>
						4.5</span>
						<h4>Best product Really Like!</h4>
						<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					</div>
				 </div>
				 :null
                 }
				 </div>
           </div>
		</div>
 
				
				

   </section>



             </div>
         )
    }
}
export default Itemdetails