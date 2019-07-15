import React, {Component} from 'react';

import ComicWallpaper from './container/ComicWallpaper';
import ComicChapters from './container/ComicChapters';
import ComicComments from './container/ComicComments';
import ComicHeader from './container/ComicHeader';

import {connect} from "react-redux";

import {getChapterOneAndSubChapters, getComicChapters, getFavorites, addView} from "../../actions/comicAction";

import Spinner from '../common/spinner';

// import PropTypes from 'prop-types';

class ComicWithChapter extends Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        this.props.getChapterOneAndSubChapters(id);

        this.props.getComicChapters(id);

        if (this.props.auth.isAuthenticated) {
            this.props.getFavorites();
            // this.props.addView(id, this.props.auth.reader.username);
        }

    }

    render() {

        const { singleComic } = this.props.comic.comicWithOne;

        const { comicChapterWithOne } = this.props.comic;

        const favorite  = this.props.auth.reader.favorite;

        const reader = this.props.auth.reader;

        const { id } = this.props.match.params;

        const { loading } = this.props.comic;

        let isLoadingHeader, isLoadingChapters, isLoadingComments;

        if (this.props.auth.isAuthenticated) {
            if (loading || favorite === undefined || reader === undefined || singleComic === undefined || favorite === null || reader === null || singleComic === null) {
                isLoadingHeader = <Spinner/>;
                isLoadingChapters = <Spinner/>;
                isLoadingComments = <Spinner/>;
            } else {
                isLoadingHeader = <ComicHeader reader={reader} favorite={favorite} singleComic={singleComic}/>;
                isLoadingChapters = <ComicChapters id={id} comicChapterWithOne={comicChapterWithOne}/>;
                isLoadingComments = <ComicComments singleComic={singleComic} id={id}/>;
            }
        } else {
            if (loading || reader === undefined || singleComic === undefined || reader === null || singleComic === null) {
                isLoadingHeader = <Spinner/>;
                isLoadingChapters = <Spinner/>;
                isLoadingComments = <Spinner/>;
            } else {
                isLoadingHeader = <ComicHeader reader={reader} singleComic={singleComic}/>;
                isLoadingChapters = <ComicChapters id={id} comicChapterWithOne={comicChapterWithOne}/>;
                isLoadingComments = <ComicComments singleComic={singleComic} id={id}/>;
            }
        }


        return (
            <React.Fragment>

                <ComicWallpaper singleComic={singleComic} />

                <br/>
                <br/>

                { isLoadingHeader }

                <br/>
                <br/>

                { isLoadingChapters }


                <br/>
                <br/>

                { isLoadingComments }

                <br/>
                <br/>

            </React.Fragment>
        );
    }
}

ComicWithChapter.propTypes = {};


const mapStateToProps = (state) => ({
    auth: state.auth,
    comic: state.comic,
    errors: state.errors
});

export default connect(mapStateToProps, { getChapterOneAndSubChapters, getComicChapters, getFavorites, addView })(ComicWithChapter);
