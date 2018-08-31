import { SET_ACTIVE_STAGE } from '../actions/activeStage'

const INITIAL_STATE = {
    stage: 0
}

export const activeStageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_STAGE:
            return { ...state, stage: action.payload }
        default:
            return state
    }
}