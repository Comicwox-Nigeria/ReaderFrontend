import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { loginReader } from "../../actions/authAction";

import PropTypes from 'prop-types';

import ComicWoxBackdrop from "../common/Comicwoxbg4.jpg";

import './Login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const readerData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginReader(readerData, this.props.history);
    }


    render() {

        const { errors } = this.state;

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 mytotal">
                        <div className="login100-pic my-image-banner js-tilt col-md-8" data-tilt>
                            <img src={ComicWoxBackdrop} alt="Logo"/>
                        </div>

                        <form onSubmit={this.onSubmit} className="login100-form my-login-form col-md-4 validate-form">
                            <span className="login100-form-title">
                                Member Login
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz"  style={{ marginTop: '-40px'}}>

                                <input
                                    className="input100"
                                    type="email" name="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                />

                                <span className="focus-input100"></span>

                                <span className="symbol-input100">
							        <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>

                            </div>

                            {errors.email && <p className='my-invalid-feedback'>{errors.email}</p>}

                            <div className="wrap-input100 validate-input" data-validate="Password is required">

                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />

                                <span className="focus-input100"></span>

                                <span className="symbol-input100">
							        <i className="fa fa-lock" aria-hidden="true"></i>
						        </span>

                            </div>


                            {errors.password && <p className='my-invalid-feedback'>{errors.password}</p>}



                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-12">
						<span className="txt1" style={{ color: 'darkred'}}>
							Forgot &nbsp;
						</span>
                                <a className="txt2" style={{ color: 'darkred'}}>
                                    Username / Password?
                                </a>
                            </div>

                            <div className="text-center p-t-50">
                                <Link to='/create-account' className="txt2" href="#" style={{ color: '#ff0000', fontWeight:'bold'}}>
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginReader: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   auth: state.auth,
   errors: state.errors
});

export default connect(mapStateToProps, { loginReader })(withRouter(Login));

