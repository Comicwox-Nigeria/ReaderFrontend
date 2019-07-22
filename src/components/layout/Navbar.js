import React, {Component, Fragment} from 'react';

import { Link } from "react-router-dom";

import Logo from '../common/images/logo/ComicwoxTransparentv2.png';

import { connect } from 'react-redux';

import exit from './exit.svg';
import ham from './list-menu.png';

import DrawerToggleButton from "./DrawerToggleButton";

// import PropTypes from 'prop-types';

class Navbar extends Component {

    render() {

        const { drawerClickHandler } = this.props;

        const isAuthenticated = this.props.auth.isAuthenticated;

        let navbarList;

        if (isAuthenticated) {
            navbarList = (
                <li><Link to="/dashboard"><span className="my-supposed-button">DASHBOARD</span></Link></li>
            );
        } else {
            navbarList = (
                <li className='linkyy'><Link to="/login"><span className="my-supposed-button">LOGIN</span></Link></li>
            );
        }

        return (

            <Fragment>

                <header className='toolbar'>

                    <nav className='toolbar_navigation'>

                        <div className='toolbar_logo'><Link to='/'><img src={Logo} alt='ComicWox Logo' className="img-fluid mylogo"/></Link></div>
                        <div className='spacer'/>
                        <div className='toolbar_navigation_items'>
                            <ul className='first-layer-nav'>
                                <li className='linkyy'><Link to='/' >HOME</Link></li>
                                {/*<li><Link to="/studios">STUDIOS</Link></li>*/}
                                <li className='linkyy'><a href="http://comicwoxblog.com/" target="_blank">BLOG</a></li>
                                <li className='linkyy'><Link to="/about-us">ABOUT</Link></li>
                                <li className='linkyy'><Link to="/contact-us">CONTACT</Link></li>
                                {navbarList}
                            </ul>
                        </div>

                        <div className='toolbar_toggle_button'>
                            <DrawerToggleButton click={drawerClickHandler}/>
                        </div>
                    </nav>

                    {/*<nav className="site-header fixed-top">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <img src={Logo} alt='ComicWox Logo' className="img-fluid mylogo"/>
                                </div>

                                <div className="col-7 somenav">
                                    <ul className="first-layer-nav">
                                        <li><Link to='/'>HOME</Link></li>
                                        <li><Link to="/studios">STUDIOS</Link></li>
                                        <li><a href="http://comicwoxblog.com/" target="_blank">BLOG</a></li>
                                        <li><Link to="/about-us">ABOUT</Link></li>
                                        <li><Link to="/contact-us">CONTACT</Link></li>
                                        {navbarList}
                                    </ul>
                                </div>
                            </div>
                            <div className="button mybtn">
                                <a className="btn-open"><img src={ham} alt='ComicWox Logo' style={{ width: '25px', height: '25px', marginTop: '-10px' }}/></a>
                            </div>
                        </div>
                    </nav>*/}

                    {/*<div className="overlay">
                        <div className="wrap">
                            <ul className="wrap-nav">
                                <li><Link to='/'>HOME</Link></li>
                                <li><Link to="/studios">STUDIOS</Link></li>
                                <li><a href="http://comicwoxblog.com/" target="_blank">BLOG</a></li>
                                <li><Link to="/about-us">ABOUT</Link></li>
                                <li><Link to="/contact-us">CONTACT</Link></li>
                                {navbarList}
                            </ul>
                            <div className="social">
                                <a href="" target='_blank'>
                                    <div className="social-icon">
                                        <i className="fa fa-facebook-f"></i>
                                    </div>
                                </a>
                                <a href="" target='_blank'>
                                    <div className="social-icon">
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                </a>
                                <a href="" target='_blank'>
                                    <div className="social-icon">
                                        <i className="fa fa-instagram"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>*/}

                </header>
            </Fragment>
        );
    }
}

// Navbar.propTypes = {};

const mapStateToProps = (state) => ({
   auth: state.auth
});

export default connect(mapStateToProps, {})(Navbar);
