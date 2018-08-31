import { STORE_STEP } from '../actions/steper'

const INITIAL_STATE = {
    step: 0
}

export const stepsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STORE_STEP:
            return { ...state, step: action.payload }
        default:
            return state
    }
}