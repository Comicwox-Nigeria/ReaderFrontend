import React, {Component} from 'react';
import { connect } from 'react-redux';

import CommentArea from './CommentArea';

// import PropTypes from 'prop-types';

class ComicComments extends Component {

    render() {

        const { singleComic, id } = this.props;

        let listOfComments, isUserLoggedIn;

        const { isAuthenticated } = this.props.auth;

        const comments = (singleComic || {}).commentForChapter;

        const singleComment = (comments || {});


        if (isAuthenticated) {
            isUserLoggedIn = <CommentArea id={id}/>
        } else {
            isUserLoggedIn =
                <p className='alert-error text-danger'>
                    You must be logged-in to drop a comment
                </p>;
        }


        if (singleComment.length > 0) {
            listOfComments = singleComment.map((comment) =>
                <div key={comment._id} className='one-comment'>
                    <span style={{ fontWeight: 'bold' }}>Username: </span> {comment.readerUsername}
                    <p><span style={{ fontWeight: 'bold' }}>Comment: </span> {comment.text} </p>
                </div>
            );
        } else {
            listOfComments = <h4>No comments.......</h4>
        }


        return (
            <div className='container'>
                <div className="card comic-comments">
                    <div className="card-header my-card-header">
                        Comments
                    </div>
                    <div className="card-body">

                        {listOfComments}

                    </div>
                    <div className="card-footer">
                        <div className='col-md-12 mb-3 drop-comment'>

                            {isUserLoggedIn}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ComicComments.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(ComicComments);
