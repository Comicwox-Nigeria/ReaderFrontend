import React, {Component} from 'react';

// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addToFavorite, addView, getFavorites } from "../../../actions/comicAction";

import Spinner from "../../home/Home";

class ComicHeader extends Component {


    onAddToViews(comicID, username) {

        const fakeBodyHere = {
            username: username
        };

        this.props.addView(comicID, username, fakeBodyHere);

    }


    onAddToFavorite(comicTitle, comicID, username) {

        const fakeBodyHere = {
            username: username
        };
        this.props.addToFavorite(comicTitle, comicID,fakeBodyHere);

        alert(`You have added ${comicTitle} to your favorites`);
    }

    checkIfFavorited(favorite, comicID, comicTitle, userID, username) {

        if (favorite.length > 0) {
            const favReturned = favorite.find(function (fav, index) {

                return fav._id === comicID

            });

            if (favReturned) {
                return <button className='withChange' disabled><i className="fa fa-heart"></i> Favorited</button>
            } else {
                return <button onClick={this.onAddToFavorite.bind(this, comicTitle, comicID, username)} className='mybutton'>
                    <i className="fa fa-heart"></i> Favorite</button>
            }
        }

        if (favorite.length === 0) {
            return <button onClick={this.onAddToFavorite.bind(this, comicTitle, comicID, username)} className='mybutton'>
                    <i className="fa fa-heart"></i> Favorite</button>
        }
    }



    render() {

        const { isAuthenticated } = this.props.auth;

        const { singleComic, favorite } = this.props;

        const userID = this.props.reader._id;

        const username = this.props.reader.username;

        // const { username, emailAddress } = this.props.auth.reader;

        /*const { favorite } = this.props.auth.reader;*/

        const comicTitle = (singleComic || {}).comicTitle;
        const comicID = (singleComic || {})._id;
        const comicImage = (singleComic || {}).comicImage;
        const comicDesc = (singleComic || {}).comicDesc;
        const studioName = (singleComic || {}).studioName;
        const comicChapter = (singleComic || {}).comicChapter;
        // const chapterURL = (singleComic || {}).chapterURL;
        const viewsCount = (singleComic || {}).viewsCount;

        let checkAuth;

        if (this.props.auth.isAuthenticated) {
            checkAuth = <span>{this.checkIfFavorited(favorite, comicID, comicTitle, userID, username)}</span>

        } else {
            checkAuth = <p className='' style={{ color: 'white', fontSize: '13px', marginTop: '-1px'}}> You must be logged-in to add comic to your favorite</p> ;
        }

        return (
            <div className='container'>
                <div className='featured-container row'>
                    <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12 comic-cover'>
                        <img src={comicImage} alt='Cover' id='comic-header-cover'/>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 comic-desc'>
                        <div className='inner-comic-desc'>
                            <h1 style={{ color: 'white'}}>{comicTitle}</h1>
                            <p>
                                <span style={{ fontSize: '12px', color: 'white' }}>{comicDesc}</span>
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 comic-side-features'>
                        <a>
                            {this.onAddToViews(comicID, username)}

                            {checkAuth}

                         </a>
                        <p className='features-here'>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>Studio</span>: {studioName}
                            <br/>
                            <span style={{ fontWeight: 'bold', color: 'white'}}>Chapter</span>: {comicChapter}
                            <br/>
                            <span style={{ fontWeight: 'bold', color: 'white'}}>Views</span>: {viewsCount}
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

ComicHeader.propTypes = {};

const mapStateToProps = (state) => ({
   auth: state.auth,
   comic: state.comic
});

export default connect(mapStateToProps, { addToFavorite, addView, getFavorites  })(ComicHeader);
