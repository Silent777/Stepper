export const SAVE_FORM_DATA = 'SAVE_FORM_DATA'

export function saveFormData (data) {
    return {
        type: SAVE_FORM_DATA,
        payload: data
    }
}