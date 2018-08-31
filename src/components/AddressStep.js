import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import   SelectField  from './SelectField'
 
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

class AddressStep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country : '',
            zip: '',
            // isValidFormOne: false,
        }
    }

    update() {
        if (this.state.zip.length > 4 && this.state.country){
            this.props.storeStep(2)
            this.props.setFormState(true)
            this.props.saveFormData(this.state)
        } else if(!this.state.country) {
            this.props.storeStep(0)
        } else {
            this.props.setFormState(false)
            this.props.storeStep(1)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        setTimeout(() => this.update())
    };

    getSelectValue = (value) => {
        if (typeof value.value !== 'undefined' && value.value.length > 0) {
            this.setState({country: value.value})
            this.props.storeStep(1)
        } else {
            this.props.storeStep(0)
            this.setState({country: ''})
        }
        setTimeout(() => this.update())
    }

    renderCountryField() {
        const country = <div>
            I live in <div style={{width: '200px', display: 'inline-flex', height: '50px'}}> <SelectField getSelectValue={this.getSelectValue}/> </div>
        </div>
        return country
    }

    renderZipField() {
        const { classes } = this.props;
        const zip = this.state.country ?
            <div>My zip code is <TextField
                id="zip"
                name="zip"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
            />
            </div>
            : null
        return zip
    }
    
    render() {
        return (
            <div>
                {this.renderCountryField()}
                {this.renderZipField()}
            </div>
        )
    }
}

export default withStyles(styles)(AddressStep);