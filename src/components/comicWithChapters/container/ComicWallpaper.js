import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Background1 from '../../common/bg11.jpg';


class ComicWallpaper extends Component {
    render() {

        const { singleComic } = this.props;

        const comicTitle = (singleComic || {}).comicTitle;
        const studioName = (singleComic || {}).studioName;
        let tag = (singleComic || {}).tags;

        // let tagString = tag.split();


        return (
            <React.Fragment>
            <div className="backdrop-comic-chapter">
                <div className="carousel-inner">
                    <img className='comic-wallpaper' src={Background1} alt='Background 1'/>
                </div>
            </div>

            <div className='comic-wallpaper-text'>
                <p className="" style={{ color: 'white' }}>{studioName}</p>
                <p className='comicTitle' style={{ color: 'white' }}>{comicTitle}</p>
                <p className="" style={{ color: 'white' }}>{tag}</p>
            </div>

            </React.Fragment>
        );
    }
}

ComicWallpaper.propTypes = {};

export default ComicWallpaper;
