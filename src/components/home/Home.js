import React, {Component} from 'react';

import Slider from './Slider';

import FilterContainer from './container/FilterContainer';

import Featured from './Featured';

import Recommended from './Recommended';

import { connect } from 'react-redux';

import { getRecommended, getSubscriptionForDash, getFeatured, getFreshUpdate, getLastestChapterComics, getPopularComics } from "../../actions/comicAction";

import Spinner from '../common/spinner';

// import PropTypes from 'prop-types';

class Home extends Component {

    componentDidMount() {
        this.props.getFeatured();
        this.props.getFreshUpdate();
        this.props.getLastestChapterComics();
        this.props.getPopularComics();
        if (this.props.auth.isAuthenticated) {
            this.props.getRecommended(this.props.auth.reader.id);
            this.props.getSubscriptionForDash(this.props.auth.reader.id);
        }
    }


    render() {

        const { freshUpdate, newUploads, popularComics, recommendedComics, featuredComic, loading } = this.props.comic;

        let checkAuth, isLoadingFilter, isLoadingFeatured;

        if (this.props.auth.isAuthenticated) {
            if (loading) {
                checkAuth = <Spinner/>
            } else {
                checkAuth = <Recommended recommendedComics = {recommendedComics} />;
            }

        } else {
            checkAuth = <h3 className='text-center' style={{marginBottom: '50px', marginTop:'50px'}}> You must be logged in to see your recommended comics</h3> ;
        }

        if (loading ) {
            isLoadingFilter = <Spinner/>;
            isLoadingFeatured = <Spinner/>;
            checkAuth = <Spinner/>;
        } else {
            isLoadingFilter = <FilterContainer freshUpdate={freshUpdate} newUploads={newUploads} popularComics={popularComics} loading={loading}/>;
            isLoadingFeatured = <Featured featuredComic={featuredComic}/>;
        }

        return (
            <React.Fragment>
                <div className='no-overflow'>

                    <Slider/>

                    { isLoadingFilter }

                    <br/>
                    <br/>

                    { isLoadingFeatured }

                    <hr/>

                    { checkAuth }
                    {/*<Recommended/>*/}

                </div>

            </React.Fragment>
        );
    }
}

// Home.propTypes = {};

const mapStateToProps = (state) => ({
    comic: state.comic,
    auth: state.auth
});

export default connect(mapStateToProps, { getRecommended, getSubscriptionForDash, getFeatured, getFreshUpdate, getLastestChapterComics, getPopularComics })(Home);
