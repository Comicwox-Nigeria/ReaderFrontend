import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { addView } from "../../../actions/comicAction";

// import PropTypes from 'prop-types';

class ComicChapters extends Component {

    addingToView(comicTitle, username) {

        this.props.addView(comicTitle, username);

    }

    render() {

        const { username } = this.props.auth.reader;

        const { comicChapterWithOne } = this.props;

        let setOfChapters = comicChapterWithOne.map((comic) =>
                <tr key={comic._id}>
                    <th onClick={this.addingToView.bind(this, comic.comicTitle, username)} scope="row"><Link to={`/comics/chapter/${comic._id}`}  className='myLink'>1</Link></th>
                    <td onClick={this.addingToView.bind(this, comic.comicTitle, username)} ><Link to={`/comics/chapter/${comic._id}`} className='myLink'>{comic.comicTitle}</Link></td>
                    <td onClick={this.addingToView.bind(this, comic.comicTitle, username)} ><Link to={`/comics/chapter/${comic._id}`} className='myLink'><Moment format='DD|MM|YYYY'>{comic.uploadDate}</Moment></Link></td>
                    {/*<td onClick={this.addingToView.bind(this, comic.comicTitle, username)} ><Link to={`/comics/chapter/${comic._id}`} className='myLink'>{comic.viewsCount}</Link></td>*/}
                </tr>
        );

        return (
            <React.Fragment>

                <h2 className='recommended-text'>CHAPTERS</h2>

                <br/>

                <div className='container'>
                    <table className="table table-hover my-table-comic-chapter">
                        <tbody>
                            {/*{console.log(comics)}*/}
                            {setOfChapters}
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    }
}

ComicChapters.propTypes = {};

const mapStateToProps = (state) => ({
    auth: state.auth,
    comic: state.comic,
    errors: state.errors
});

export default connect(mapStateToProps, { addView })(ComicChapters);
