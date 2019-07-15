import React, {Component} from 'react';
import { Link } from "react-router-dom";

import Moment from 'react-moment';

// import PropTypes from 'prop-types';

class ComicChapters extends Component {
    render() {

        const { comicChapterWithOne } = this.props;

        let setOfChapters = comicChapterWithOne.map((comic) =>
                <tr key={comic._id}>
                    <th scope="row"><Link to={`/comics/chapter/${comic._id}`}  className='myLink'>1</Link></th>
                    <td><Link to={`/comics/chapter/${comic._id}`} className='myLink'>{comic.comicTitle}</Link></td>
                    <td><Link to={`/comics/chapter/${comic._id}`} className='myLink'><Moment format='DD|MM|YYYY'>{comic.uploadDate}</Moment></Link></td>
                    <td><Link to={`/comics/chapter/${comic._id}`} className='myLink'>{comic.viewsCount}</Link></td>
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

export default ComicChapters;
