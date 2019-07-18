import React from "react";

import { Link } from "react-router-dom";
import ImagePlaceholder from "../../common/placeholder.jpg";

class FreshUpdate extends React.Component {

    render() {

        const { newUploads } = this.props;

        let setOfFreshComics;
        // let setOfFreshComics2;

        if (newUploads.error === true) {
            setOfFreshComics = <h6 className='text-center'>{newUploads.message}</h6>;
            // setOfFreshComics2 = <h6 className='text-center'>{newUploads.message}</h6>;
        }

        else {
            if (newUploads.length > 13) {

                // let newUpdate = newUploads;
                let newUpdate = newUploads.slice(0, 18);

                setOfFreshComics = newUpdate.map((comic) => {
                    if (comic === null) {
                        return <div key={Math.floor((Math.random() * 100) + 1)} style={{ paddingBottom: '18px' }}>
                            <Link>
                                <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
                                <p>Empty</p>
                                <p>Empty</p>
                                <span>Empty</span>
                            </Link>
                        </div>

                    } else {
                        return <div key={comic._id}  style={{ paddingBottom: '18px' }}>
                            <Link to={`/comic/${comic._id}`}>
                                <img src={comic.comicImage}  alt='Comic Cover' className='filter-image'/>
                                <p>{comic.comicTitle}</p>
                                <p>{comic.studioName}</p>
                                <span>{comic.viewsCount}</span>
                            </Link>
                        </div>

                    }
                });


                /*let newUpdate2 = newUploads.slice(8, 15);

                setOfFreshComics2 = newUpdate2.map((comic) => {
                    if (comic === null) {
                        return <div key={Math.floor((Math.random() * 100) + 1)} >
                            <Link>
                                <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
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

                    {/*<div className='col-md-12'>*/}


                        <div className="regular">

                            { setOfFreshComics }

                        </div>

                    {/*</div>*/}

                    {/*<div className='col-md-1 regular3'>*/}
                        {/*<img src={NextIcon} alt='Next Icon'/>*/}
                    {/*</div>*/}
                </div>


            </React.Fragment>
        );
    }
}

export default FreshUpdate;
