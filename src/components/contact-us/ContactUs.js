import React, {Component} from 'react';

class ContactUs extends Component {
    render() {
        return (
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
                                            <li className='col-md-4'><a href="https://www.facebook.com/comicwox/" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-facebook-f"></i></a></li>
                                            <li className='col-md-4'><a href="https://twitter.com/comicwoxII" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-twitter"></i></a></li>
                                            <li className='col-md-4'><a href="https://www.instagram.com/comicwox/?hl=en" target='_blank'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </p>
                                    <br/>
                                    <p><li className='col-md-12'><a href='#'><i style={{fontSize: '30px', color: '#570000'}} className="fa fa-envelope"></i></a> &nbsp;&nbsp; comicwox@gmail.com</li></p>

                                </div>
                            </div>









                            {/*<div className='contact-us-container'>*/}

                                {/*<div className='left-contact-form'>

                                    <div className='container'>
                                        <span><i className="fa fa-envelope"></i></span>
                                        <h4>
                                           Got
                                           Questions ?
                                        </h4>

                                        <p>
                                            Please leave us  a message
                                        </p>
                                    </div>

                                </div>*/}

                                {/*<div className='right-contact-form'>

                                    <div className='container'>
                                        <form className="needs-validation">
                                            <div className="form-row">
                                                <div className='col-md-12 mb-3'>
                                                    <label>Message</label>
                                                    <textarea name='message' className='form-control' rows="10" cols="100"></textarea>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Name</label>
                                                    <input name='name' type="text" className="form-control" placeholder="Your Name" required />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Email</label>
                                                    <input name='email' type="text" className="form-control" placeholder="Your Email" value="Otto" required />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit">SEND</button>
                                        </form>
                                    </div>
                                </div>*/}

                                {/*<br/>*/}
                                {/*<br/>*/}
                            {/**/}
                            {/*</div>*/}

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
