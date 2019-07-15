import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addCommentUnderComicAndChapter } from "../../../actions/comicAction";


class CommentArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const { reader } = this.props.auth;

        const { id } = this.props;

        const newComment = {
            username: reader.username,
            text: this.state.text
        };

        this.props.addCommentUnderComicAndChapter(newComment, id);

        this.setState({ text: ''})

    }

    render() {

        const { errors } = this.state;

        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>

                    {errors.message && <p className='my-invalid-feedback' style={{ color: 'red' }}>{errors.message}</p>}

                    <textarea
                        placeholder='Drop a comment'
                        name='text'
                        className='form-control'
                        rows="3"
                        cols="100"
                        value={this.state.text}
                        onChange={this.onChange}
                    >

                    </textarea>

                    <br/>

                    <button className="btn btn-primary" type="submit">Comment</button>
                </form>
            </React.Fragment>
        );
    }
}

CommentArea.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    comic: state.comic
});

export default connect(mapStateToProps, { addCommentUnderComicAndChapter })(CommentArea);
