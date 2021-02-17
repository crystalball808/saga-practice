import { FETCH_POSTS, GET_POSTS } from './types'


const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
            case FETCH_POSTS:
                return {
                    ...state,
                    posts: action.payload
                }
        default:
            return state
    }
}