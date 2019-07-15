import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import StudioWallpaper from './container/StudioWallpaper';
import AllStudios from './container/AllStudios';

import { connect } from 'react-redux';
import { getStudios, getStudio } from "../../actions/studioAction";

class Studios extends Component {

    componentDidMount() {
        this.props.getStudios();
    }

    render() {
        return (
            <React.Fragment>

                <StudioWallpaper/>

                <AllStudios/>

            </React.Fragment>
        );
    }
}

Studios.propTypes = {};


const mapStateToProps = (state) => ({
    studio: state.studio
});

export default connect(mapStateToProps, { getStudio, getStudios })(Studios);
