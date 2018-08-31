import React, { Component } from 'react';
import MainStepper from './components/Stepper'
import PersonalInformationStep from './components/PersonalInformationStep'
import AddressStep from './components/AddressStep'
import GeneralInfoStep from './components/GeneralInfoStep'
import { connect } from 'react-redux'
import { storeStep } from './actions/steper'
import { setFormState } from './actions/form'
import { setActiveStage } from './actions/activeStage'
import { saveFormData } from './actions/saveFormData'
import DotsStepper from './components/DotsStepper'
import './App.css';

const mapStateToProps = state => {
    return {
        step: state.step,
        isFormValid: state.isFormValid,
        stage: state.stage,
        formsData: state.formsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeStep: (step) => {
            dispatch(storeStep(step))
        },
        setFormState: (condition) => {
            dispatch(setFormState(condition))
        },
        setActiveStage: (stage) => {
            dispatch(setActiveStage(stage))
        },
        saveFormData: (data) => {
            dispatch(saveFormData(data))
        }
    }
}

class App extends Component {
    renderStage(stage) {
        switch (stage) {
            case 0: {
                return <div>
                        <DotsStepper steps={3} active={this.props.step.step}/>
                        <PersonalInformationStep
                            step={this.props.step}
                            storeStep={this.props.storeStep}
                            setFormState={this.props.setFormState}
                            saveFormData={this.props.saveFormData} />
                    </div>

            }
            case 1: {
                return <div>
                    <DotsStepper steps={2} active={this.props.step.step}/>
                    <AddressStep 
                        setFormState={this.props.setFormState}
                        storeStep={this.props.storeStep}
                        saveFormData={this.props.saveFormData} />
                </div> 
            }
            case 2: {
                return <div>
                    <DotsStepper steps={2} active={this.props.step.step}/>
                    <GeneralInfoStep 
                        setFormState={this.props.setFormState}
                        storeStep={this.props.storeStep}
                        saveFormData={this.props.saveFormData} />
                </div> 
            }
            default:
                return null
        }
    }



    render() {
        return (
            <div className="App">
                <MainStepper
                    isFormValid={this.props.isFormValid.isFormValid}
                    storeStep={this.props.storeStep}
                    stage={this.props.stage.stage}
                    setActiveStage={this.props.setActiveStage}
                    setFormState={this.props.setFormState}
                    saveFormData={this.props.saveFormData}
                    formsData={this.props.formsData} />
                {this.renderStage(this.props.stage.stage)}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
