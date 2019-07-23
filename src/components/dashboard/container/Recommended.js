import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { editProfile } from "../../../actions/dashboardAction";

import {Link} from "react-router-dom";
import ImagePlaceholder from "../../common/placeholder.jpg";


class Recommended extends Component {

    constructor (props) {
        super(props);

        this.state = {
            genre1: '',
            genre2: '',
            genre3: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmitComic = this.onSubmitComic.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmitComic(e) {

        e.preventDefault();

        const profileData = {
            username: this.props.auth.reader.username,
            genre1: this.state.genre1,
            genre2: this.state.genre2,
            genre3: this.state.genre3
        };

        this.props.editProfile(profileData, this.props.history);

    }


    render() {

        const { recommendedComics } = this.props;

        const { errors } = this.state;

        let setOfRecommendedComics;



        if (recommendedComics.error === true){

            console.log(recommendedComics);
            // setOfRecommendedComics = <h6 className='text-center'>{recommendedComics.message}</h6>;

            setOfRecommendedComics =
                <form className='form-inline' onSubmit={this.onSubmitComic}>

                    <div className="box-body col-md-12 col-lg-12 col-sm-12"  style={{ width: '100%' }}>
                        {/*<label>Genre 1</label>*/}
                        <select
                            onChange={this.onChange}
                            name="genre1"
                            value={this.state.genre1}
                            className='form-control'
                            style={{ width: '100%' }}
                        >
                            <option>Genre 1</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Superhero">Superhero</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Supernatural">Supernatural</option>
                            <option value="Sports">Sports</option>
                            <option value="Romance">Romance</option>
                            <option value="Highschool">Highschool</option>
                            <option value="Comedy">Comedy</option>
                            <option value="One shot">One shot</option>
                            <option value="Mystical">Mystical</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Drama">Drama</option>
                            <option value="Military">Military</option>
                            <option value="Politics">Politics</option>
                            <option value="Outer space">Outer space</option>
                            <option value="Biography">Biography</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Manga">Manga</option>
                        </select>
                    </div>

                    <br/>

                    {errors.genre1 && <p className='my-invalid-feedback'>{errors.genre1}</p>}

                    <div className="box-body col-md-12 col-lg-12 col-sm-12"  style={{ width: '100%' }}>
                        {/*<label>Genre 2 </label>*/}
                        <select
                            onChange={this.onChange}
                            name="genre2"
                            value={this.state.genre2}
                            className='form-control'
                            style={{ width: '100%' }}
                        >
                            <option>Genre 2</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Superhero">Superhero</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Supernatural">Supernatural</option>
                            <option value="Sports">Sports</option>
                            <option value="Romance">Romance</option>
                            <option value="Highschool">Highschool</option>
                            <option value="Comedy">Comedy</option>
                            <option value="One shot">One shot</option>
                            <option value="Mystical">Mystical</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Drama">Drama</option>
                            <option value="Military">Military</option>
                            <option value="Politics">Politics</option>
                            <option value="Outer space">Outer space</option>
                            <option value="Biography">Biography</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Manga">Manga</option>
                        </select>
                    </div>

                    <br/>

                    {errors.genre2 && <p className='my-invalid-feedback'>{errors.genre2}</p>}

                    <div className="box-body col-md-12 col-lg-12 col-sm-12"  style={{ width: '100%' }}>
                        {/*<label>Genre 3</label>*/}
                        <select
                            onChange={this.onChange}
                            name="genre3"
                            value={this.state.genre3}
                            className='form-control'
                            style={{ width: '100%' }}
                        >
                            <option>Genre 3</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Superhero">Superhero</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Supernatural">Supernatural</option>
                            <option value="Sports">Sports</option>
                            <option value="Romance">Romance</option>
                            <option value="Highschool">Highschool</option>
                            <option value="Comedy">Comedy</option>
                            <option value="One shot">One shot</option>
                            <option value="Mystical">Mystical</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Drama">Drama</option>
                            <option value="Military">Military</option>
                            <option value="Politics">Politics</option>
                            <option value="Outer space">Outer space</option>
                            <option value="Biography">Biography</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Manga">Manga</option>
                        </select>
                    </div>

                    <br/>

                    {errors.genre3 && <p className='my-invalid-feedback'>{errors.genre3}</p>}

                    <br/>

                    <div className="box-footer col-12" >
                        <button style={{ width: '100%', marginTop: '20px' }} type="submit" className="btn btn-primary">Add Recommended Genre</button>
                    </div>

                </form>


        } else {

            // console.log(recommendedComics);

            if (recommendedComics.length > 2) {
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
            }
            else {

            }
        }


        return (
            <div className='container recommended-container'>

                <h3 className='recommended-text'>RECOMMENDED</h3>

                <div className='row recommended-comic-image'>

                    { setOfRecommendedComics }

                </div>

            </div>
        );
    }
}

Recommended.propTypes = {};

const mapStateToProps = (state) => ({
   auth: state.auth,
   errors: state.errors,
   comic: state.comic
});

export default connect(mapStateToProps, { editProfile })(Recommended);
