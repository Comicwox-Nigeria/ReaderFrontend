import React, {Component} from 'react';

class ComicHeader extends Component {

    render() {

        const { singleComic } = this.props;

        const comicTitle = (singleComic || {}).comicTitle;
        const comicImage = (singleComic || {}).comicImage;
        const comicDesc = (singleComic || {}).comicDesc;
        const studioName = (singleComic || {}).studioName;
        const comicChapter = (singleComic || {}).comicChapter;
        const chapterURL = (singleComic || {}).chapterURL;
        const viewsCount = (singleComic || {}).viewsCount;

        return (
            <div className='container'>
                <div className='featured-container row'>
                    <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12 comic-cover'>
                        <img src={comicImage} alt='Cover' />
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 comic-desc'>
                        <div className='inner-comic-desc'>
                            <h1 style={{ color: 'white' }}>{comicTitle}</h1>
                            <p><span style={{ fontWeight: 'bold', color: 'white' }}>Description</span><br/>
                                <span style={{ fontSize: '12px', color: 'white'  }}>{comicDesc}</span>
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 comic-side-features'>
                        <a href={`http://${chapterURL}`} target='_blank'><button><i className="fa fa-play"></i> READ</button></a>
                        <p className="features-here">
                            <span style={{ fontWeight: 'bold', color: 'white' }}>Studio</span>: {studioName}
                            <br/>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>Chapter</span>: {comicChapter}
                            <br/>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>Views</span>: {viewsCount}
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

ComicHeader.propTypes = {};

export default ComicHeader;
