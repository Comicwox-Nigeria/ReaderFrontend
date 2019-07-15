import React from "react";
// import Slider from "react-slick";
// import CoverImage from "../../common/images/comicCover.jpg";

import { Link } from "react-router-dom";
// import PrevIcon from "../../common/left-chevron.png";
// import NextIcon from "../../common/right-chevron.png";
import ImagePlaceholder from "../../common/placeholder.jpg";

class Subscription extends React.Component {

    shuffle (array) {

        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };

    render() {

        const { subscribedComics } = this.props;

        let subscribedComicsNew;

        subscribedComicsNew = this.shuffle(subscribedComics);

        let setOfSubComics;
        // let setOfSubComics2;

        if (subscribedComicsNew.error === true) {
            setOfSubComics = <h6 className='text-center'>{subscribedComicsNew.message}</h6>;
            // setOfSubComics2 = <h6 className='text-center'>{subscribedComicsNew.message}</h6>;
        }

        else {

            if (subscribedComicsNew.length < 1) {
                console.log('No comic')
            } else {
                if (subscribedComicsNew.length > 1) {

                    let newUpdate = subscribedComicsNew.slice(0, 18);

                    setOfSubComics = newUpdate.map((comic) => {
                        if (comic === null) {
                            return <div key={Math.floor((Math.random() * 100) + 1)}>
                                <Link>
                                    <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
                                    <p>Empty</p>
                                    <p>Empty</p>
                                    <span>Empty</span>
                                </Link>
                            </div>

                        } else {
                            return <div key={comic._id}>
                                <Link to={`/comic/${comic._id}`}>
                                    <img src={comic.comicImage} alt='Comic Cover' className='filter-image'/>
                                    <p>{comic.comicTitle}</p>
                                    <p>{comic.studioName}</p>
                                    <span>{comic.viewsCount}</span>
                                </Link>
                            </div>

                        }
                    });


                    /*let newUpdate2 = subscribedComicsNew.slice(8, 15);

                    setOfSubComics2 = newUpdate2.map((comic) => {
                        if (comic === null) {
                            return <div key={Math.floor((Math.random() * 100) + 1)}>
                                <Link>
                                    <img src={ImagePlaceholder} alt='Comic Cover' className='filter-image'/>
                                    <p>Empty</p>
                                    <p>Empty</p>
                                    <span>Empty</span>
                                </Link>
                            </div>

                        } else {
                            return <div key={comic._id}>
                                <Link to={`/comic/${comic._id}`}>
                                    <img src={comic.comicImage} alt='Comic Cover' className='filter-image'/>
                                    <p>{comic.comicTitle}</p>
                                    <p>{comic.studioName}</p>
                                    <span>{comic.viewsCount}</span>
                                </Link>
                            </div>

                        }
                    });*/
                } else {
                    setOfSubComics = <h6 className='text-center'>No Subscription</h6>;
                    // setOfSubComics2 = <h6 className='text-center'>No Subscription</h6>;
                }
            }

        }

        return (
            <React.Fragment>

                <h3 className='recommended-text'>SUBSCRIPTION</h3>

                <div className='myrow'>
                    {/*<div className='col-md-1 regular4'>*/}
                    {/*<img src={PrevIcon} alt='Prev Icon'/>*/}
                    {/*</div>*/}

                    <div className="regular">

                        { setOfSubComics }

                    </div>

                    {/*<div className='col-md-1 regular3'>*/}
                    {/*<img src={NextIcon} alt='Next Icon'/>*/}
                    {/*</div>*/}
                </div>


            </React.Fragment>
        );
    }
}

export default Subscription;
