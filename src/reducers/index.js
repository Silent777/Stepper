import  { combineReducers } from 'redux'
import { stepsReducer } from './stepsReducer'
import { formReducer } from './formReducer'
import { activeStageReducer } from './activeStageReducer'
import { formsDataReducer } from './formsDataReducer'

export default combineReducers({
    step: stepsReducer,
    isFormValid: formReducer,
    stage: activeStageReducer,
    formsData: formsDataReducer
})