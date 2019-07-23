import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Recommended from './container/Recommended';
import Subscription from './container/Subscription';

// import { getFavorite } from "../../actions/dashboardAction";
import { getRecommended, getSubscriptionForDash } from "../../actions/comicAction";

import Spinner from '../common/spinner';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getRecommended(this.props.auth.reader.id);
        this.props.getSubscriptionForDash(this.props.auth.reader.id);
    }

    render() {

        const { recommendedComics, subscribedComics, loading } = this.props.comic;

        let isLoadingRecommended, isLoadingSubscription;

        if (loading) {
            isLoadingSubscription = <Spinner/>;
            isLoadingRecommended = <Spinner/>;
        } else {
            isLoadingSubscription = <Subscription subscribedComics={subscribedComics} />
            isLoadingRecommended = <Recommended recommendedComics={recommendedComics} />
        }



        return (

            <div style={{ marginTop: '150px'}}>

                { isLoadingSubscription }

                <br/>
                <br/>

                { isLoadingRecommended }

            </div>
        );
    }
}

Dashboard.propTypes = {};


const mapStateToProps = (state) => ({
    auth: state.auth,
    comic: state.comic
});

export default connect(mapStateToProps, { getRecommended, getSubscriptionForDash })(Dashboard);
