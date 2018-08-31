export const SET_FORM_STATE = 'SET_FORM_STATE'

export function setFormState (isValid) {
    return {
        type: SET_FORM_STATE,
        payload: isValid
    }
}