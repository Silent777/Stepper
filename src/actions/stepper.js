export const STORE_STEP = 'STORE_STEP'

export function storeStep (step) {
    return {
        type: STORE_STEP,
        payload: step
    }
}