import React, {Component} from 'react';

import ComicWallpaper from './container/ComicWallpaper';
import ComicComments from './container/ComicComments';
import ComicHeader from './container/ComicHeader';

import {connect} from "react-redux";

import {getASingleComic} from "../../actions/comicAction";

import Spinner from '../common/spinner';

// import PropTypes from 'prop-types';

class SingleComic extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        this.props.getASingleComic(id);

    }


    render() {


        const { singleComic } = this.props.comic.singleComic;

        // const comicTitle = (singleComic || {}).comicTitle;

        const { id } = this.props.match.params;

        const { loading } = this.props.comic;

        let isLoadingHeader, isLoadingComments;

        if (loading) {
            isLoadingHeader = <Spinner/>;
            isLoadingComments = <Spinner/>;
        } else {
            isLoadingHeader = <ComicHeader singleComic={singleComic}/>;
            isLoadingComments = <ComicComments singleComic={singleComic} id={id}/>;
        }

        return (
            <React.Fragment>

                <ComicWallpaper singleComic={singleComic} />

                <br/>
                <br/>

                { isLoadingHeader }

                <br/>
                <br/>

                { isLoadingComments }

                <br/>
                <br/>

            </React.Fragment>
        );
    }
}

SingleComic.propTypes = {};


const mapStateToProps = (state) => ({
    auth: state.auth,
    comic: state.comic,
    errors: state.errors
});

export default connect(mapStateToProps, { getASingleComic })(SingleComic);
