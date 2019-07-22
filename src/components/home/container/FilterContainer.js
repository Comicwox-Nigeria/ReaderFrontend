import React from "react";

import { connect } from 'react-redux';

import { Link, withRouter } from "react-router-dom";

import FreshUpdate from "./FreshUpdates";
import Popular from "./Popular";
import NewUploads from "./NewUploads";

import { getSearchedComic } from "../../../actions/comicAction";

import classnames from 'classnames';

class SimpleSlider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expandme: false,
            display: 'New Uploads',
            search: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        // const searchData = {
        //     search: this.state.search
        // };
        //
        // this.props.getSearchedComic(searchData, this.props.history);
    }

    pickDisplay(name) {
        this.setState({
            display: name
        })
    }

    renderDisplay(name, freshUpdate, newUploads, popularComics ) {
        switch (name) {
            case 'Fresh Update':
                return <FreshUpdate newUploads={newUploads} />;

            case 'Popular':
                return <Popular popularComics={popularComics} />;

            case 'New Uploads':
                return <NewUploads freshUpdate={freshUpdate}  />;

            default:
                return <FreshUpdate freshUpdate={freshUpdate} />;
        }
    }

    checkView(view) {
        if (view === this.state.display) {
            return true;
        }  else {
            return false;
        }
    }

    expandNav = (e) => {
        this.setState({
            expandme: !this.state.expandme
        })
    }

    render() {

        const { freshUpdate, newUploads, popularComics } = this.props;

        return (
            <React.Fragment>

                <div role="navigation" className="navbar navbar-expand-lg navbar-dark rep-nav" style={{ backgroundColor: 'black', height:'70px', textAlign: 'center', paddingBottom: this.state.expandme ? '280px' : '0px' }}>
                    <button style={{ border: '2px solid red' }} onClick={this.expandNav} className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="mr-auto my-filters" >

                            <li className={classnames('nav-item', {
                                'active': this.checkView('Popular')
                            })}
                                onClick={this.pickDisplay.bind(this, 'Popular')}>
                                <a className="nav-link" style={{ color: 'white' }} onClick={this.pickDisplay.bind(this, 'Popular')}>POPULAR COMICS</a>
                            </li>

                            <li className={classnames('nav-item', {
                                'active': this.checkView('New Uploads')
                            })}
                                onClick={this.pickDisplay.bind(this, 'New Uploads')}>
                                {/*This is using the New Uploads Component because I am to tired to change it*/}
                                <a className="nav-link" style={{ color: 'white' }} onClick={this.pickDisplay.bind(this, 'New Uploads')}>RECENT UPDATES</a>
                            </li>

                            <li className={classnames('nav-item', {
                                'active': this.checkView('Fresh Update')
                            })}
                                onClick={this.pickDisplay.bind(this, 'Fresh Update')}>
                                {/*This is using the Fresh Update Component because I am to tired to change it*/}
                                <a className="nav-link" style={{ color: 'white' }} onClick={this.pickDisplay.bind(this, 'Fresh Update')}>NEW UPLOADS</a>
                            </li>

                        </ul>
                        <form onSubmit={this.onSubmit} className="form-inline my-2 my-md-0 my-ini-form" style={{ backgroundColor: 'red',  borderRadius: '5px', marginTop:'10px'  }}>
                            <div className="inner-addon left-addon">
                                <i className='fa fa-search my-search-icon'></i>
                                <input disabled className="form-control mr-sm-2 my-search-input"
                                       type="search"
                                       placeholder="Search"
                                       name='search'
                                       onChange={this.onChange}
                                       style={{ backgroundColor: 'red', border: '1px solid red', color: 'white', borderRadius: '5px' }}
                                       aria-label="Search"
                                />
                            </div>
                            {/*<input className="form-control" type="text" placeholder="Search"/>*/}
                        </form>
                    </div>
                </div>

                {this.renderDisplay(this.state.display, freshUpdate, newUploads, popularComics )}


            </React.Fragment>
        );
    }
}

export default connect(null , { getSearchedComic })(SimpleSlider);
