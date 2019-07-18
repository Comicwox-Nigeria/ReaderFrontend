import React from "react";
// import CoverImage from "../../common/images/comicCover.jpg";

import { Link } from "react-router-dom";
// import PrevIcon from "../../common/left-chevron.png";
// import NextIcon from "../../common/right-chevron.png";
import ImagePlaceholder from "../../common/placeholder.jpg";

class NewUploads extends React.Component {

    render() {

        const { freshUpdate } = this.props;

        let setOfFreshComics;
        // let setOfFreshComics2;

        if (freshUpdate.error === true){
            setOfFreshComics = <h6 className='text-center'>{freshUpdate.message}</h6>;
            // setOfFreshComics2 = <h6 className='text-center'>{freshUpdate.message}</h6>;
        }

        else {
            // console.log(recommendedComics.length);
            if (freshUpdate.length > 13) {

                let newUpdate = freshUpdate.slice(0, 18);

                setOfFreshComics = newUpdate.map((comic) => {
                    if (comic === null) {
                        return <div key={Math.floor((Math.random() * 100) + 1)} style={{ paddingBottom: '18px' }}>
                            <Link>
                                <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
                                <p>Empty</p>
                                <p>Empty</p>
                                <p>Empty</p>
                                <span>Empty</span>
                            </Link>
                        </div>

                    } else {
                        return <div key={comic._id} style={{ paddingBottom: '18px' }}>
                            <Link to={`/comic/${comic._id}`}>
                                <img src={comic.comicImage}  alt='Comic Cover' className='filter-image'/>
                                <p>{comic.comicTitle}</p>
                                <p>{comic.studioName}</p>
                                <p style={{ color: 'red' }}>Chapter: {comic.comicChapter}</p>
                                <span>{comic.viewsCount}</span>
                            </Link>
                        </div>

                    }
                });


                /*let newUpdate2 = freshUpdate.slice(8, 15);

                setOfFreshComics2 = newUpdate2.map((comic) => {
                    if (comic === null) {
                        return <div key={Math.floor((Math.random() * 100) + 1)} >
                            <Link>
                                <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
                                <p>Empty</p>
                                <p>Empty</p>
                                <p>Empty</p>
                                <span>Empty</span>
                            </Link>
                        </div>

                    } else {
                        return <div key={comic._id}  >
                            <Link to={`/comic/${comic._id}`}>
                                <img src={comic.comicImage}  alt='Comic Cover' className='filter-image'/>
                                <p>{comic.comicTitle}</p>
                                <p>{comic.studioName}</p>
                                <p style={{ color: 'red' }}>Chapter: {comic.comicChapter}</p>
                                <span>{comic.viewsCount}</span>
                            </Link>
                        </div>

                    }
                });*/
            }

        }

        return (
            <React.Fragment>

                <div className='myrow'>
                    {/*<div className='col-md-1 regular4'>*/}
                        {/*<img src={PrevIcon} alt='Prev Icon'/>*/}
                    {/*</div>*/}


                        <div className="regular">


                        { setOfFreshComics }

                        </div>

                    {/*<div className='col-md-1 regular3'>*/}
                        {/*<img src={NextIcon} alt='Next Icon'/>*/}
                    {/*</div>*/}
                </div>


            </React.Fragment>
        );
    }
}

export default NewUploads;
