import React, {Component, Fragment} from 'react';

import { Link } from "react-router-dom";

import Logo from '../common/ComicwoxTransparent.png';

import { connect } from 'react-redux';

import './SideDrawer.css';

import exit from './exit.svg';
import ham from './list-menu.png';

// import PropTypes from 'prop-types';

class SideDrawer extends Component {

    render() {

        const { show } = this.props;

        const isAuthenticated = this.props.auth.isAuthenticated;

        let navbarList;

        if (isAuthenticated) {
            navbarList = (
                <li><Link to="/dashboard" className='side-link'><span className="my-supposed-button-side-drawer">DASHBOARD</span></Link></li>
            );
        } else {
            navbarList = (
                <li><Link to="/login" className='side-link'><span className="my-supposed-button-side-drawer">LOGIN</span></Link></li>
            );
        }

        let drawerClasses = 'side-drawer';
        if (show) {
            drawerClasses = 'side-drawer open';
        }

        return (
            <Fragment>
                <nav className={drawerClasses}>
                    <div className='toolbar_logo side-drawer-logo'><Link to='/'><img src={Logo} alt='ComicWox Logo' className="img-fluid mylogo"/></Link></div>
                    <ul className='side-drawer-menu'>
                        <li><Link className='side-link' to='/'>HOME</Link></li>
                        {/*<li><Link className='side-link' to="/studios">STUDIOS</Link></li>*/}
                        <li><a href="http://comicwoxblog.com/" target="_blank">BLOG</a></li>
                        <li><Link className='side-link' to="/about-us">ABOUT</Link></li>
                        <li><Link className='side-link' to="/contact-us">CONTACT</Link></li>
                        {navbarList}

                        <p className="side-drawer-comic-para" style={{marginTop: '60px'}}>Comicwox &copy; <span id="year">{new Date().getFullYear()}</span></p>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}

// Navbar.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(SideDrawer);
