import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

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

class PersonalInformationStep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            // isValidFormOne: false,
        }
    }

    update() {
        if(this.state.name.length > 3) {
            this.props.storeStep(1)
        } else { this.props.storeStep(0) }
        if (this.isEmailValid(this.state.email) && this.state.name.length > 3){
            this.props.storeStep(2)
        }
        if (this.isEmailValid(this.state.email) && this.state.name.length > 3 && this.state.phone.length > 3){
            this.props.storeStep(3)
            this.props.setFormState(true)
            this.props.saveFormData(this.state)
        } else {
            this.props.setFormState(false)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        
        setTimeout(() => this.update())
    };

    isEmailValid = (email) => {
        let re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        let isValid = re.test((String(email).toLowerCase()))
        return isValid
    }

    renderNameField() {
        const { classes } = this.props;
        const name = <div>My name is <TextField
            id="name"
            name="name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
        />
        </div>
        return name
    }

    renderEmailField() {
        const { classes } = this.props;
        const email = this.state.name.length > 3 ?
            <div>I’m using <TextField
                id="email"
                name="email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
            />  email
            </div>
            : null
        return email
    }

    renderPhoneField() {
        const { classes } = this.props;
        const phone = this.isEmailValid(this.state.email) && this.state.name.length > 3 ? <div>And my phone number is  <TextField
            id="phone"
            name="phone"
            className={classes.textField}
            value={this.state.phone}
            onChange={this.handleChange}
            margin="normal"
        />
        </div> : null
        return phone
    }

    render() {
        return (
            <div>
                {this.renderNameField()}
                {this.renderEmailField()}
                {this.renderPhoneField()}
            </div>
        )
    }
}

export default withStyles(styles)(PersonalInformationStep);