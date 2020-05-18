import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
                    
    <section className="" id="customers_steps">
    <div className="container">
        <div className="text-xs-center">
            <h2></h2>
            <h2 className="title1" >How it works (CUSTOMERS)</h2>
           

            <div className="col-xs-12 col-sm-12 col-md-2">
                <div className="how-it-works-wrap">
                    <img src="https://resto.com.my/images/home/signup.jpg " className="img-thumbnail"/>
                    <h4>Register</h4>
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-2">
                <div className="how-it-works-wrap">
                    <img src="https://resto.com.my/images/home/scan.jpg " className="img-thumbnail"/>
                    <h4>Scan</h4>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2">
                <div className="how-it-works-wrap">
                    <img src="https://resto.com.my/images/home/order.png " className="img-thumbnail"/>
                    <h4>Order</h4>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2">
                <div className="how-it-works-wrap" id="img1">
                    <img src="https://resto.com.my/images/home/pay.jpg " className="img-thumbnail"/>
                    <h4>Pay</h4>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2">
                <div className="how-it-works-wrap" id="img2">
                    <img src="https://resto.com.my/images/home/eat.jpg " className="img-thumbnail"/>
                    <h4>Eat</h4>
                </div>
            </div>

            <div className="col-md-12 text-white" style={{margin:"30px 00"}}>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success btn-pao active">PAO (Pay as Ordered)</button>
                    <button type="button" className="btn btn-success btn-pas">PAS (Pay as Served)</button>
                </div>

            </div>
        </div>
    </div>
    </section>
	
	<section className="videosec">
	<div className="container">
	<iframe width="1050" height="405" src="https://www.youtube.com/embed/ov13Yr3MLCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	</section>
	
	<section className="app-section">
    <div className="app-wrap">
        <div className="container">
            <div className="row text-img-block text-xs-left">
                <div className="container">
                    <div className="col-xs-12 col-sm-5 right-image text-center">
                        <figure> <img src="https://resto.com.my/images/bg/1-2.png" alt="Right Image" className="img-fluid"/> </figure>
                    </div>
                    <div className="col-xs-12 col-sm-7 left-text">
                        <h3>Download Our App</h3>
                        <p>Now you can make food happen pretty much wherever you are thanks to the free easy-to-use Digital Dine-In App.</p>
                        <div className="social-btns">
                            <a href="#" className="app-btn apple-button clearfix">
                                <div className="pull-left"><i className="fa fa-apple"></i> </div>
                                <div className="pull-right"> <span className="text">Available on the</span> <span className="text-2">App Store</span> </div>
                            </a>
                            <a href="#" className="app-btn android-button clearfix">
                                <div className="pull-left"><i className="fa fa-android"></i> </div>
                                <div className="pull-right"> <span className="text">Available on the</span> <span className="text-2">Play store</span> </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            </div>
        )
    }
}

export default Home
