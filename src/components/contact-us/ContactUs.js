import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div className='my-contact-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-xs-12 col-lg-12'>

                        <div className='my-contact-container'>
                            {/*<h3 style={{ color: '#570000'}} className='text-center'>CONTACT US</h3>*/}

                            <br/>


                            <div className="card text-center">
                                <div style={{ color: '#570000'}} className="card-header">
                                    CONTACT US
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Got Questions ?
                                    </h5>
                                    <br/>
                                    <br/>
                                    <p className="card-text" style={{maxWidth: '200px', margin: '0 auto'}}>
                                        <ul className='row'>
                                            <li className='col-md-4 col-sm-4 col-xs-4'><a href="https://www.facebook.com/comicwox/" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-facebook-f"></i></a></li>
                                            <li className='col-md-4 col-sm-4 col-xs-4'><a href="https://twitter.com/comicwoxII" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-twitter"></i></a></li>
                                            <li className='col-md-4 col-sm-4 col-xs-4'><a href="https://www.instagram.com/comicwox/?hl=en" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </p>
                                    <br/>
                                    <p><li className='col-md-12'><a href='#'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-envelope"></i></a> &nbsp;&nbsp; comicwox@gmail.com</li></p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            </div>
           /*{/!* <div className='my-contact-container'>

            <div className="container">

                <div className="wrapper">

                    <div className="company-info">
                        <h3>Phoenix Web Design</h3>

                        <ul>
                            <li><i className="fa fa-road"></i> 44 Main Street</li>
                            <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                            <li><i className="fa fa-envelope"></i> test@phoenix.com</li>
                        </ul>
                    </div>

                    <div className="contact">
                        <h3>E-mail Us</h3>

                        <div className="">
                            <h5 className="">
                                Got Questions ?
                            </h5>
                            <br/>
                            <br/>
                            <p className="" style={{maxWidth: '200px', margin: '0 auto'}}>
                                <ul className='row'>
                                    <li className='col-md-4'><a href="https://www.facebook.com/comicwox/" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-facebook-f"></i></a></li>
                                    <li className='col-md-4'><a href="https://twitter.com/comicwoxII" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-twitter"></i></a></li>
                                    <li className='col-md-4'><a href="https://www.instagram.com/comicwox/?hl=en" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-instagram"></i></a></li>
                                </ul>
                            </p>
                            <br/>
                            <p><li className='col-md-12'><a href='#'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-envelope"></i></a> &nbsp;&nbsp; comicwox@gmail.com</li></p>

                        </div>

                        <form id="contact-form">

                            <p>
                                <label>Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>

                            <p>
                                <label>Company</label>
                                <input type="text" name="company" id="company" />
                            </p>

                            <p>
                                <label>E-mail Address</label>
                                <input type="email" name="email" id="email" required />
                            </p>

                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </p>

                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" id="message"></textarea>
                            </p>

                            <p className="full">
                                <button type="submit">Submit</button>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
            </div>*!/}*/

        );
    }
}

export default ContactUs;
