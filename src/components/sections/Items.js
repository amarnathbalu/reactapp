import React from 'react'
import axios from 'axios'
import queryString from 'query-string';
import { Link } from "react-router-dom";


class Items extends React.Component {
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            list:[],
            items:[]
        }
    }
    componentDidMount(){
        let params = queryString.parse(this.props.location.search)

        //console.log(params.branch)

        const URL="http://resto.com.my/api/mobile/items/categories_details?branch_id="+params.branch
        const itemurl="http://resto.com.my/api/pos/touch_order/AllItemsListsData?branch_id="+params.branch+"&category_id=6"
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
            //console.log(res.data.categories_lists);
            this.setState({list:res.data.categories_lists})
        })
        axios.get(itemurl, 
            {
                headers: {
                    'x-api-key': 'Sdrops!23' ,
                   'Access-Control-Allow-Origin': '*',
                   crossdomain: true,
                   'Content-Type': null

                } 
             })

        .then(response=>{
            //console.log(res.data.categories_lists);
            this.setState({items:response.data.Data})
        })
        .catch(error =>{
            console.log(error);
        })

       
        
    }
    render() {
        const  {list}=this.state
        const  {items}=this.state
        let params = queryString.parse(this.props.location.search)
         return (
             <div>

<div className="result-show hide">
            <div className="container">

                <div className="row">
                    <div className="col-sm-3 pull-right">
                        <p>
                            <span className="primary-color">
                                <strong></strong>
                            </span> Results so far 
                        </p> 
                    </div>
                </div>

            </div>
        </div>
   
   <div className="col-xs-12 col-sm-5 col-md-5 col-lg-3 staticsie">
                    <div className="sidebar clearfix m-b-20">
                        <div className="main-block">
                            <div className="sidebar-title white-txt">
                                <h6>Dish Categories </h6>  </div>
                               
                                
                           
                                <ul>
                                {
                                    list.length ?
                                list.map(post =>
                                    
									<li key={post.id}>                                                
										{post.name} 
									</li>
									
                                ):null
                                        }     
                                </ul>
                            
                            
                        </div>
                       
						
                        
                    </div>
					
				
                </div>

				
  
    <section className="restaurants-page">
        <div className="container">
            <div className="row">

				
 <div className="col-xs-12 col-sm-7 col-md-7 col-lg-9"> 
 {
     items.length ?
    items.map(itemlist =>
        
	<div className="col-xs-12 col-sm-7 col-md-7 col-lg-4" key={itemlist.id}>                    
		<div className="bg-gray restaurant-entry detailimg">
			<div className="row">
				<div className="imgcvr">
                <Link onClick={e => { e.preventDefault();
                     window.location.href = '/itemdetails?branch='+params.branch+'&item_id='+itemlist.id }} >
					<div className="entry-logo">
						<a className="img-fluid">
                            <img
                            src={
                                !!(itemlist.item_img)?itemlist.item_img:
                                "dist/images/logo/feasto-orange-1.png"
                                } alt="Food logo"/>
						</a>
					</div>
				</Link>
					<div className="entry-dscr">
					<div className="promotion-2">PROMOTED
												<div className="triangle"></div>
												</div>
						<span className="titleheaders">
							<a className="titlenamech">{itemlist.name}</a>
							
						</span>
						<a  className="slice">{itemlist.item_type_name}</a>
					   <span  className="pricename">
							<i className="fa fa-usd usdchng"></i>  <a  className="fontsd" href="">{itemlist.price}</a>
						</span>
						<input className="addbutton" type="button" value="View"/>
						
					
				</div>
			   
			</div>
			
			</div>                               

		</div>												
	</div>
    ):null
    }

</div>	
				
				
</div>
</div>
   </section>


            </div>
            )
    }
}
    export default Items