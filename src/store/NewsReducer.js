const defaultState = {
    news: [],
}

const SET_NEWS = "SET_NEWS"

export const newsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.payload],
            }

        default:
            return state
    }
}

export const setNewsAction = (payload) => ({type: SET_NEWS, payload})
