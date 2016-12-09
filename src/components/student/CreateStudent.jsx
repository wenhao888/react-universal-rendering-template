import React, {Component} from "react";
import { Field, reduxForm } from 'redux-form';


class CreateStudent extends Component {
    render() {
        console.log("create student");

        return (
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}


CreateStudent = reduxForm({
    form: 'CreateStudent' // a unique name for this form
})(CreateStudent);

export default CreateStudent;