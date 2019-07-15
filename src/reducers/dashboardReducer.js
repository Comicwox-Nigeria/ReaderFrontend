import { LOADING, GET_DASHBOARD_RECOMMENDED_COMIC, GET_FAV_COMIC } from '../actions/types';

const initialState = {
  recommendedComics: [],
  favoriteComic: [],
  loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_DASHBOARD_RECOMMENDED_COMIC:
            return {
                ...state,
                recommendedComics: action.payload,
                loading: false
            };

        case GET_FAV_COMIC:
            return {
              ...state,
              favoriteComic: action.payload,
              loading: false
            };

        default:
            return state
    }
}
