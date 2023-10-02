const defaultState = {
  news: [],
  article: {},
}

const SET_NEWS = 'SET_NEWS'
const SORT_NEWS = 'SORT_NEWS'
const SET_ARTICLE = 'SET_ARTICLE'

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
  case SET_NEWS:
    return {
      ...state,
      news: [...state.news, ...action.payload],
    }
  case SORT_NEWS:
    return {
      ...state,
      news: [...action.payload],
    }
  case SET_ARTICLE:
    return {
      ...state,
      article: action.payload[0], // достаем 1й элемент, т.к. может найтись несколько статей
    }

  default:
    return state
  }
}

export const setNewsAction = (payload) => ({ type: SET_NEWS, payload })
export const sortNewsAction = (payload) => ({ type: SORT_NEWS, payload })
export const setArticleAction = (payload) => ({ type: SET_ARTICLE, payload })
