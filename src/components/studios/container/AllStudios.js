import React, {Component} from 'react';

import { getStudios } from "../../../actions/studioAction";

import CoverImage from "../../common/images/comicCover.jpg";

import Spinner from "../../comicWithChapters/ComicWithChapter";

import { connect } from 'react-redux';

import StudioList from './StudioList';

// import PropTypes from 'prop-types';

class AllStudios extends Component {

    render() {

        const { studios } = this.props.studio;

        const { loading } = this.props.studio;

        let isLoadingStudioList;

        if (loading) {
            isLoadingStudioList = <Spinner/>;
        } else {
            isLoadingStudioList = <StudioList studios={studios} />;
        }

        return (
            <div className='my-studio-container'>
                <div className="container" style={{marginTop: '60px', width:'900px'}}>
                    <h2 className='text-center'
                        style={{ color:'red', fontWeight:'bold', letterSpacing: '2px', paddingBottom: '50px'}}>

                        STUDIOS

                        <hr/>

                    </h2>

                    <div className="row">

                        { isLoadingStudioList }

                    </div>

                    <br/>
                    <br/>

                    {/*<nav aria-label="Page navigation example" style={{ backgroundColor: 'white'}}>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>

                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>

                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>*/}


                </div>
            </div>
        );
    }
}

AllStudios.propTypes = {};

const mapStateToProps = (state) => ({
   studio: state.studio
});

export default connect(mapStateToProps, { getStudios })(AllStudios);
