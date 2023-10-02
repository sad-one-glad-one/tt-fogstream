const defaultState = {
  error: [],
  isLoading: false,
  isSidebarVisible: false,
}

const SET_ERRORS = 'SET_ERRORS'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY'

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
  case SET_ERRORS:
    return { ...state, error: action.payload }
  case TOGGLE_IS_LOADING:
    return { ...state, isLoading: action.payload }
  case TOGGLE_SIDEBAR_VISIBILITY:
    return { ...state, isSidebarVisible: action.payload }

  default:
    return state
  }
}

export const setErrorAction = (payload) => ({ type: SET_ERRORS, payload })
export const toggleIsLoadingAction = (payload) => ({ type: TOGGLE_IS_LOADING, payload })
export const toggleSidebarVisibilityAction = (payload) => ({ type: TOGGLE_SIDEBAR_VISIBILITY, payload })
