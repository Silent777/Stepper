import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
        display: 'flex',
        margin: 'auto',
        marginTop: '30px'
    },
    dots: {
        margin: 'auto',
        background: 'none',
    }
};

class DotsStepper extends React.Component {
    componentWillReceiveProps(p) {
        this.update(p.active)
    }

    update(step) {
        let el = document.querySelector('#dots').children[0].children[0]
        if (el) {
            for (let i = 0; i < step + 2; i++) {
                if (el.children[i]) {
                    el.children[i].style.background = 'rgba(0, 0, 0, 0.26)'
                }
            }
            for (let i = 0; i < step; i++) {
                el.children[i].style.background = 'blue'
            }
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="dots" className={classes.root}>
                <MobileStepper
                    variant="dots"
                    steps={this.props.steps}
                    position="static"
                    activeStep={null}
                    className={classes.dots}
                />
            </div>
        );
    }
}

DotsStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DotsStepper);