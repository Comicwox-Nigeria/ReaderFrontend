import React, {Component} from 'react';

import Background1 from '../common/bg1.jpg';
import Background2 from '../common/bg2.jpg';
import Background3 from '../common/ulofyu.jpg';

import PrevIcon from '../common/images/icon/back.png';
import NextIcon from '../common/images/icon/next.png';

// import PropTypes from 'prop-types';

class Slider extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active step3"></li>
                    <li data-target="#myCarousel" data-slide-to="1" className="step3"></li>
                    <li data-target="#myCarousel" data-slide-to="2" className="step3"></li>
                </ol>


                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="my-overlay"></div>
                        <img src={Background1} alt='Background 1'/>
                        <div className="my-container-1">
                            <div className="carousel-caption text-center">
                                <h1 className="carousel-caption-h1">New Releases</h1>
                                <br/>
                                <p className="carousel-caption-p" style={{ color: 'white'}}>Action | Drama | Fantasy</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="my-overlay"></div>
                        <img src={Background2} alt='Background 2'/>
                        <div className="my-container-1">
                            <div className="carousel-caption text-center">
                                <h1 className="carousel-caption-h1">Catch up with your FAV</h1>
                                <br/>
                                <p className="carousel-caption-p" style={{ color: 'white'}}>Mystery | Adventure | Comedy</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="my-overlay"></div>
                        <img src={Background3} alt='Background 3'/>
                        <div className="my-container-1">
                            <div className="carousel-caption text-center">
                                <h1 className="carousel-caption-h1"></h1>
                                <br/>
                                <p className="carousel-caption-p" style={{ color: 'white'}}>Action | Drama | Fantasy</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="carousel-control">
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="prev-icon" aria-hidden="true"><img src={PrevIcon} alt='Back Icon'/></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="next-icon" aria-hidden="true"><img src={NextIcon} alt='Next Icon'/></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}

Slider.propTypes = {};

export default Slider;
