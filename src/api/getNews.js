import axios from 'axios'

import {
  setErrorAction,
  toggleIsLoadingAction,
} from '../store/PageReducer'

import { setArticleAction, setNewsAction } from '../store/NewsReducer'

const API_KEY = 'ee185ee9320d4b6ab3e3719db17130ef'
const URL = 'https://newsapi.org/v2/top-headlines'
const country = 'us'
const category = 'business'

export const getNews = () => {
  const params = {
    apiKey: API_KEY,
    pageSize: 3,
    page: 1,
    country,
    category,
  }

  return function(dispatch) {
    dispatch(toggleIsLoadingAction(true))

    axios.get(URL, { params })
      .then(response => {
        dispatch(setNewsAction(response.data.articles))
        params.page += 1
      })
      .catch(error => {
        dispatch(setErrorAction(error.message))
      })
      .finally(() => dispatch(toggleIsLoadingAction(false)))
  }
}

export const fetchArticle = (title) => {
  const params = {
    apiKey: API_KEY,
    q: title,
    country,
    category,
  }
    
  return function(dispatch) {
    dispatch(toggleIsLoadingAction(true))

    axios.get(URL, { params })
      .then(response => {
        dispatch(setArticleAction(response.data.articles))
        params.page += 1
      })
      .catch(error => {
        dispatch(setErrorAction(error.message))
      })
      .finally(() => dispatch(toggleIsLoadingAction(false)))
  }
}
