import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

// import CoverImage from '../common/images/comicCover.jpg';

class Featured extends Component {

    render() {

        const { featuredComic } = this.props;

        return (
            <div className='container'>
                <div className='featured-container row'>
                    {/*<div id='featured-container-here'>*/}
                        <div className='col-xs-12 col-sm-12 col-md-2 col-lg-2 comic-cover'>
                            <img src={featuredComic.comicImage} alt='Cover' />
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-8 col-lg-6 comic-desc adding-comic-feature'
                        >
                            <div className='inner-comic-desc'>
                                <span className='featured-span'>FEATURED</span>
                                <br/>
                                <br/>
                                <h1>{featuredComic.comicTitle}</h1>
                                <p>
                                    {/*<span style={{ fontWeight: 'bold', color:'#ffffff'}}>Description</span><br/>*/}
                                    <span style={{ fontSize: '12px', color:'#ffffff' }}>{featuredComic.comicDesc}</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-3 comic-side-features'>
                            <Link to={`/comic/${featuredComic._id}`}><button><i className="fa fa-play"></i>VIEW</button></Link>
                            <p className='features-here'>
                                <span style={{ fontWeight: 'bold'}}>Studio</span>: {featuredComic.studioName}
                                <br/>
                                <span style={{ fontWeight: 'bold'}}>Chapter</span>: {featuredComic.comicChapter}
                            </p>
                        </div>
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

Featured.propTypes = {};

export default Featured;
