import React, {Component} from 'react';

import { connect } from 'react-redux';

import Spinner from '../common/spinner';

import SearchResult from "./searchResult";
import Background1 from "../common/images/comicWallpaper.jpg";
import classnames from "classnames";

// import PropTypes from 'prop-types';

class SearchedComics extends Component {

    /*constructor(props) {
        super(props);

        this.state = {
          featuredComic: [],
          newUploads: [],
          popularComics: [],
          recommendedComics: [],
          freshUpdate: []
        };
    }*/

    componentDidMount() {

    }


    render() {

        const { loading } = this.props.comic;

        let isSearchResult;

        if (loading) {
            isSearchResult = <Spinner/>;
        } else {
            isSearchResult = <SearchResult />;
        }

        return (

            <React.Fragment>

                <div className="backdrop-comic-chapter">
                    <div className="carousel-inner">
                        <img className='comic-wallpaper' src={Background1} alt='Background 1'/>
                    </div>
                </div>


                <nav className="navbar navbar-expand" style={{ backgroundColor: 'black', height:'80px'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="form-inline my-2 my-lg-0 my-form-here" style={{ backgroundColor: 'red',  borderRadius: '5px'  }}>
                            <div className="inner-addon left-addon">
                                <i className='fa fa-search my-search-icon'></i>
                                <input className="form-control mr-sm-2 my-search-input"
                                       type="search"
                                       placeholder="Search"
                                       style={{ backgroundColor: 'red', border: '1px solid red', color: 'white', borderRadius: '5px' }}
                                       aria-label="Search"
                                />
                            </div>
                        </form>
                    </div>
                </nav>


                { isSearchResult }

            </React.Fragment>

        );
    }
}

// Home.propTypes = {};

const mapStateToProps = (state) => ({
    comic: state.comic,
    auth: state.auth
});

export default connect(mapStateToProps, {  })(SearchedComics);
