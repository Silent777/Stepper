import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 200,
    },
    menu: {
        width: 200,
    },
});

class GeneralInfoStep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income: '',
            familyMembers: '',
            // isValidFormOne: false,
        }
    }

    update() {
        if (this.isPositiveInteger(this.state.income)) {
            this.props.storeStep(1)
        } else {
            this.props.storeStep(0)
        }

        if (
            this.isPositiveInteger(this.state.income) && 
            Number.parseInt(this.state.familyMembers , 10) >= 0) 
        {
            this.props.storeStep(2)
            this.props.setFormState(true)
            this.props.saveFormData(this.state)
        } 
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        setTimeout(() => this.update())
    };

    renderIncomeField() {
        const { classes } = this.props
        const income = <div>
            My family makes $<TextField
                id="income"
                name="income"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
            /> per year
            </div>
        return income
    }
    isPositiveInteger = (s) => {
        return /^\+?[1-9][\d]*$/.test(s);
    }

    renderFamilyMembersField() {
        const choices = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((choice) => <MenuItem value={choice} key={choice}>{choice}</MenuItem>)

        const familyMembers = this.isPositiveInteger(this.state.income) ?
            <div>
                There is <Select
                    value={this.state.familyMembers}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'familyMembers',
                        id: 'familyMembers',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {choices}
                </Select> person in my tax household
            </div>
            : null
        return familyMembers
    }

    render() {
        return (
            <div>
                {this.renderIncomeField()}
                {this.renderFamilyMembersField()}
            </div>
        )
    }
}

export default withStyles(styles)(GeneralInfoStep);