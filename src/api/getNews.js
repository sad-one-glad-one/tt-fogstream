import {
    setErrorAction,
    toggleIsLoadingAction
} from '../store/PageReducer'

import axios from 'axios'

import { setNewsAction } from '../store/NewsReducer'

const API_KEY = '83963dbf43d847c7b3da0b438ec3685b'
const URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-30&sortBy=publishedAt&apiKey=${API_KEY}`

export const getNews = () => {
    return function(dispatch) {
        dispatch(toggleIsLoadingAction(true))

        axios.get(URL)
            .then(response => {
                dispatch(setNewsAction(response.data.articles))
            })
            .catch(error => {
                dispatch(setErrorAction(error.message))
            })
            .finally(() => dispatch(toggleIsLoadingAction(false)))
    }
}
