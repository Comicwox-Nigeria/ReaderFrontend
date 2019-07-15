import {
    LOADING,
    GET_A_COMIC,
    GET_A_COMIC_CHAPTER,
    GET_FRESH_UPDATE,
    GET_NEW_UPLOADS,
    GET_POPULAR,
    GET_SEARCHED_COMICS,
    GET_RECOMMENDED,
    GET_COMIC_WITH_SUB_COMIC,
    GET_COMIC_WITH_SUB_COMIC_CHAPTERS,
    GET_FEATURED,
    GET_SUBSCRIPTION_DASH
} from '../actions/types';

const initialState = {
    freshUpdate: [],
    newUploads: [],
    popularComics: [],
    recommendedComics: [],
    subscribedComics: [],
    featuredComic: [],
    singleComic: [],
    searchedComics: [],
    comicWithOne: [],
    comicChapterWithOne: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_FRESH_UPDATE:
            return {
                ...state,
                // loading: false,
                freshUpdate: action.payload
            };

        case GET_FEATURED:
            return {
                ...state,
                // loading: false,
                featuredComic: action.payload
            };

        case GET_NEW_UPLOADS:
            return {
                ...state,
                // loading: false,
                newUploads: action.payload
            };

        case GET_POPULAR:
            return {
              ...state,
                loading: false,
                popularComics: action.payload
            };

        case GET_RECOMMENDED:
            return {
              ...state,
                loading: false,
                recommendedComics: action.payload
            };

        case GET_SUBSCRIPTION_DASH:
            return {
              ...state,
                loading: false,
                subscribedComics: action.payload
            };

        case GET_A_COMIC:
            return {
                ...state,
                loading: false,
                comicWithOne: action.payload
            };

        case GET_A_COMIC_CHAPTER:
            return {
                ...state,
                loading: false,
                singleComic: action.payload
            };

        case GET_COMIC_WITH_SUB_COMIC:
            return {
                ...state,
                loading: false,
                comicWithOne: action.payload
            };

        case GET_COMIC_WITH_SUB_COMIC_CHAPTERS:
            return {
                ...state,
                loading: false,
                comicChapterWithOne: action.payload
            };

        case GET_SEARCHED_COMICS:
            return {
                ...state,
                loading: false,
                searchedComics: action.payload
            };

        default:
            return state

    }
}
