import React, {Component} from 'react';

import Logo1 from '../common/ComicwoxTransparentmark.png';
// import Logo1 from '../common/images/logo/cxfavicon.jpg';
import Logo2 from '../common/images/logo/ComicwoxTransparentv2.png';

// import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div>

                <div className="row">

                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="first-side">
                            <img src={Logo1} alt='logo-cover' className="img-fluid footer-logo1"/>
                            <br/>
                            <img src={Logo2} alt='logo-cover' className="img-fluid footer-logo"/>
                            <br/>
                            <p className="comic-para">Comicwox &copy; <span id="year">{new Date().getFullYear()}</span></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="second-side">
                            <span className="second-side-extra">
                                <br/>
                                <br/>
                                <br/>
                                <div>
                                    <p>CONTACT</p>
                                    <p>+234 708 203 8918</p>
                                    <p>comicwox@gmail.com</p>

                                    <ul className="nav social_icon">
                                        <li><a href="#"><i style={{fontSize: '30px'}} className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i style={{fontSize: '30px'}} className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i style={{fontSize: '30px'}} className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-xs-12">
                        <div className="third-side">
                            <div className="container">

                                <h5>NEWSLETTER</h5>
                                <p>Catch all our latest news and updates</p>

                                <form className="my-form-inline">
                                    <input type="email" className="" placeholder="YOUR EMAIL"/>
                                    <button type="submit" className="">SIGN UP</button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

// Footer.propTypes = {};

export default Footer;
