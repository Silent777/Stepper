export const SET_ACTIVE_STAGE = 'SET_ACTIVE_STAGE'

export function setActiveStage (stage) {
    return {
        type: SET_ACTIVE_STAGE,
        payload: stage
    }
}