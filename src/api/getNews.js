import axios from 'axios'

import {
  setErrorAction,
  toggleIsLoadingAction,
} from '../store/PageReducer'

import { setArticleAction, setNewsAction } from '../store/NewsReducer'

const API_KEY = 'a7ebca5a5c504107ae201d6ca09481f3'
const URL = 'https://newsapi.org/v2/top-headlines'
const country = 'us'
const category = 'business'
let page = 1

export const getNews = () => {
  const params = {
    apiKey: API_KEY,
    pageSize: 30,
    page: page,
    country,
    category,
  }

  return function(dispatch) {
    dispatch(toggleIsLoadingAction(true))

    axios.get(URL, { params })
      .then(response => {
        dispatch(setNewsAction(response.data.articles))
        page += 1
      })
      .catch(error => {
        dispatch(setErrorAction(error.message))
      })
      .finally(() => dispatch(toggleIsLoadingAction(false)))
  }
}

export const getArticle = (title) => {
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
