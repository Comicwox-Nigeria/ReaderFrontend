import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class CommentItem extends Component {
    render() {

        const { comment } = this.props;
        return (
            <div className='one-comment'>
                <span style={{ fontWeight: 'bold' }}>Username: </span> {comment.readerUsername}
                <p><span style={{ fontWeight: 'bold' }}>Comment: </span> {comment.text} </p>
            </div>
        );
    }
}

CommentItem.propTypes = {};

export default CommentItem;
