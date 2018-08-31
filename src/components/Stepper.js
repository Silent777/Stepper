import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {

    },
    stepper: {
        padding: '30px 0'
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,

    },
});

function getSteps() {
    return ['Personal information', 'Address', 'General Information'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'RocketRoute would like to give you the best product. This survey will take few	seconds';
        case 1:
            return 'We need your address to confirm our best offer country';
        case 2:
            return 'These answers provides deeper insights to craft something special income';
        default:
            return 'Thanks for your answers. We will get back to you within 24 hours with our amazing product';
    }
}

class MainStepper extends React.Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
    };


    isStepOptional = step => {
        return
    };

    handleNext = (e) => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.props.setActiveStage(this.props.stage + 1)
        this.props.storeStep(0)
        this.props.setFormState(false)
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
        if(e.target.innerHTML === "Finish") {
            console.log(this.props.formsData)
        }
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.props.setActiveStage(this.props.stage - 1)
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
        this.props.setActiveStage(0)
        console.log(this.props.formsData)
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        let nextBtn = this.props.isFormValid
            ? <Button
                id="nextBtn"
                variant="contained"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> :
            <Button
                id="nextBtn"
                variant="contained"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
                disabled
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                Thanks for your answers. We will get back to you within 24 hours with our amazing product
              </Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
              </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                </Button>
                                    {this.isStepOptional(activeStep) && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleSkip}
                                            className={classes.button}
                                        >
                                            Skip
                  </Button>
                                    )}
                                        {nextBtn}
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

MainStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(MainStepper);
