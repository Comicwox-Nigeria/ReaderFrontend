import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ImagePlaceholder from '../common/placeholder.jpg';
// import PropTypes from 'prop-types';

class Recommended extends Component {

    render() {

        const { recommendedComics } = this.props;

        let setOfRecommendedComics;

        if (recommendedComics.error === true){
            console.log(recommendedComics);
            setOfRecommendedComics = <h6 className='text-center'>{recommendedComics.message}</h6>;
        }
        else if (recommendedComics.length < 3) {
            setOfRecommendedComics = <h6 className='text-center' style={{marginLeft: '50px'}}>You do not have any recommended comic</h6>;
        }

        else if (recommendedComics[0] === 'null') {
            // setOfRecommendedComics = <h6 className='text-center'>You do not have any recommended comic</h6>;
            console.log('There is a null');
        }

        else {
                // console.log(recommendedComics.length);
            setOfRecommendedComics = recommendedComics.map((comic) => {
                if (comic === null) {
                    return <div key={Math.floor((Math.random() * 100) + 1)} className='col-md-4 col-lg-4 col-xs-12 col-sm-4 recommended-comic' >
                            <Link><img className='cover-image' src={ImagePlaceholder} alt='Cover' style={{ backgroundColor: 'black' }} /></Link>
                        </div>

                } else {
                    return <div key={comic._id} className='col-md-4 col-lg-4 col-xs-12 col-sm-4 recommended-comic' >
                            <Link to={`/comic/${comic._id}`} ><img className='cover-image' src={comic.comicImage} alt='Cover' style={{ backgroundColor: 'black' }} /></Link>
                        </div>
                }
            });

            /*setOfRecommendedComics = recommendedComics.map(function (comic) {
                if (comic === null) {
                    return <h6 className='text-center'>You do not have any recommended comic</h6>;
                } else {
                    return
                    <div key={comic._id} className='col-4 col-md-4 col-lg-4 col-xs-4 col-sm-4'>
                        <Link to={`/comic/${comic._id}`} ><img className='cover-image' src={comic.comicImage} alt='Cover' /></Link>
                    </div>;
                }
            });*/
        }


        return (


            <div className='cover-recommended-container'>

                <div className='container recommended-container'>

                    <h3 className='recommended-text'>RECOMMENDED</h3>

                    <div className='row recommended-comic-image'>

                        { setOfRecommendedComics }

                    </div>

                </div>
            </div>

        );
    }
}

Recommended.propTypes = {};

export default Recommended;
