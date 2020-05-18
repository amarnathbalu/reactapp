import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
    <div className="container">
       
        <div className="row top-footer">
            <div className="col-xs-12 col-sm-3 footer-logo-block color-gray">
                <a href="#"> <img src="dist/images/logo/logo-white.png" alt="Footer logo"/> </a> <span>Order Delivery &amp; Take-Out </span> </div>
            <div className="col-xs-12 col-sm-2 about color-gray">
                <h5>About Us</h5>
                <ul>
                    <li><a href="#">About us</a> </li>
                    <li><a href="#">History</a> </li>
                    <li><a href="#">Our Team</a> </li>
                    <li><a href="#">We are hiring</a> </li>
                </ul>
            </div>
            <div className="col-xs-12 col-sm-2 how-it-works-links color-gray">
                <h5>How it Works</h5>
                <ul>
                    <li><a href="#">Enter your location</a> </li>
                    <li><a href="#">Choose restaurant</a> </li>
                    <li><a href="#">Choose meal</a> </li>
                    <li><a href="#">Pay via credit card</a> </li>
                    <li><a href="#">Wait for delivery</a> </li>
                </ul>
            </div>
            <div className="col-xs-12 col-sm-2 pages color-gray">
                <h5>Legal</h5>
                <ul className="">
                    <li className=""><a   href="">Terms & Conditions</a></li> 
                    <li className=""><a href="">Refund & Cancellation</a></li> 

                    <li className=""><a href=">">Privacy Policy</a></li> 
                    <li className=""><a href="">Cookies Policy</a></li> 
                    <li className=""><a href="">Guidelines Policy</a></li> 
                    <li className=""><a href="">API Policy</a></li> 
                </ul>
            </div>
            <div className="col-xs-12 col-sm-3 popular-locations color-gray">
                <h5>Popular locations</h5>
                <ul>
                    <li><a href="">Kuala Lumpur</a> </li>
                    <li><a href="">Putrajaya</a> </li>
                    <li><a href="">George Town</a> </li>
                    <li><a href="">Johor Bahru</a> </li>
                    <li><a href="">Kota Kinabalu</a> </li>
                    <li><a href="">Ipoh</a> </li>
                    <li><a href="">Kuching</a> </li>
                    <li><a href="">Malacca City</a> </li>
                    <li><a href="">Petaling Jaya</a> </li>
                </ul>
            </div>
        </div>
        <div className="bottom-footer hide">
            <div className="row">
                <div className="col-xs-12 col-sm-3 payment-options color-gray">
                    <h5>Payment Options</h5>
                    <ul>
                        <li>
                            <a href="#"> <img src="dist/images/paypal.png" alt="Paypal"/> </a>
                        </li>
                        <li>
                            <a href="#"> <img src="dist/images/mastercard.png" alt="Mastercard"/> </a>
                        </li>
                        <li>
                            <a href="#"> <img src="dist/images/maestro.png" alt="Maestro"/> </a>
                        </li>
                        <li>
                            <a href="#"> <img src="dist/images/stripe.png" alt="Stripe"/> </a>
                        </li>
                        <li>
                            <a href="#"> <img src="dist/images/bitcoin.png" alt="Bitcoin"/> </a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-4 address color-gray">
                    <h5>Address</h5>
                    <p>Concept design of oline food order and deliveye,planned as restaurant directory</p>
                    <h5>Phone: <a href="tel:+080000012222">080 000012 222</a></h5> </div>
                <div className="col-xs-12 col-sm-5 additional-info color-gray">
                    <h5>Addition informations</h5>
                    <p>Join the thousands of other restaurants who benefit from having their menus on TakeOff</p>
                </div>
            </div>
        </div>
    </div>
</footer>


            </div>
        )
    }
}

export default Footer
