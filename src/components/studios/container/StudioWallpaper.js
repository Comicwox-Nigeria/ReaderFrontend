import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Background1 from "../../common/images/comicWallpaper.jpg";

class StudioWallpaper extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="backdrop-comic-chapter">
                    <div className="carousel-inner">
                        <img className='comic-wallpaper' src={Background1} alt='Background 1'/>
                    </div>
                </div>

                <div className='comic-wallpaper-text'>
                    <p className='comicTitle' style={{ color: 'white'}}>LIST OF STUDIOS</p>
                </div>

            </React.Fragment>
        );
    }
}

StudioWallpaper.propTypes = {};

export default StudioWallpaper;
