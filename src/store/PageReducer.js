const defaultState = {
  error: [],
  isLoading: false,
}

const SET_ERRORS = 'SET_ERRORS'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
  case SET_ERRORS:
    return { ...state, error: action.payload }
  case TOGGLE_IS_LOADING:
    return { ...state, isLoading: action.payload }

  default:
    return state
  }
}

export const setErrorAction = (payload) => ({ type: SET_ERRORS, payload })
export const toggleIsLoadingAction = (payload) => ({ type: TOGGLE_IS_LOADING, payload })
