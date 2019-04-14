import axios from 'axios';
import React, { useState } from 'react';
import { withRouter, Switch, Route } from "react-router-dom";
import useForm from '../Hook/useForm';
import validateForm from '../Validate/validate';
import AddressStep from './addressStep';
import EmailStep from './emailStep';
import NameStep from './nameStep';
import SuccessStep from './successStep';

const ContactUsForm = (props) => {


    const [ errorSave, setErrorSave ] = useState("");

    const save = async () => {
        const result = await axios.post(
            'api/Save',
            values
        );

        if (result.data.success) {
            props.history.push('/success');
        } else {
            setErrorSave(result.data.message)
        }
    }

    const {
        values,
        errors,
        validate,
        handleChange,
        handleSubmit,
    } = useForm({
        FirstName: '',
        LastName: '',
        StreetAddress: '',
        UnitApt: '',
        City: '',
        ProvinceTerritory: '',
        Email: ''
    }, save, validateForm);
 
    return (
         <>
            {errorSave && (
                <div class="alert alert-danger alert-dismissible fade in" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                    {errorSave}
                </div>
            )}
            <form onSubmit={handleSubmit} noValidate >
                <Switch>
                    <Route path="/" exact render={(props) => <NameStep {...props} values={values} errors={errors} onChange={handleChange} validate={validate} />} />
                    <Route path="/address" render={(props) => <AddressStep {...props} values={values} errors={errors} onChange={handleChange} validate={validate} />} />
                    <Route path="/email" render={(props) => <EmailStep {...props} values={values} errors={errors} onChange={handleChange} />} />
                    <Route path="/success" component={SuccessStep} />
                </Switch>
            </form>
        </>
    );
}

export default withRouter(ContactUsForm);

