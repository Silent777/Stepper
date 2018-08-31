import { SAVE_FORM_DATA } from '../actions/saveFormData'

const INITIAL_STATE = {
    formsData: {}
}

export const formsDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_FORM_DATA:
            const newData = Object.assign(state.formsData, action.payload)
            return { ...state, formsData: newData}
        default:
            return state
    }
}