import { SET_FORM_STATE } from '../actions/form'

const INITIAL_STATE = {
    isFormValid: false
}

export const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FORM_STATE:
            return { ...state, isFormValid: action.payload }
        default:
            return state
    }
}