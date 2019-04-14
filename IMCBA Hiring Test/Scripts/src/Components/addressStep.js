import React, { useState, useEffect } from 'react';
import LabelInput from './labelInput';
import LabelSelect from './labelSelect';
import { validateAddressStep } from '../Validate/validate';
import axios from 'axios';


export default function AddressStep(props) {
    const { history, location, match, staticContext, validate, ...otherProps } = props;

    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        async function fetchProvince() {
            const result = await axios.get(
                'api/Provinces'
            );

            setProvinces(result.data);
        }
        fetchProvince();
    }, []);

    useEffect(() => {
        async function fetchCities() {
            const result = await axios.post(
                'api/Cities',
                {
                    province: props.values.Province
                }
            );

            setCities(result.data);
        }
        fetchCities();
    }, [props.values.Province]);

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            onClickNext();
        }
    }

    const onClickNext = () => {
        const errors = validate(validateAddressStep);
        if (!(errors && Object.keys(errors).length > 0)) {
            history.push('/email');
        }
    }

    const onClickPrevious = () => {
        history.push('/');
    }

    return (
        <>
            <LabelInput onKeyPress={enterPressed} label={"Street Address"} id={"StreetAddress"} {...otherProps} required minLength="1" maxLength="128"/>
            <LabelInput onKeyPress={enterPressed} label={"Unit/Apt"} id={"UnitApt"} {...otherProps} maxLength="128" />
            <LabelSelect onKeyPress={enterPressed} label={"Province / Territory"} id={"Province"} {...otherProps} required minLength="1" maxLength="32" list={provinces}/>
            <LabelSelect onKeyPress={enterPressed} label={"City"} id={"City"} {...otherProps} required minLength="1" maxLength="32" list={cities}/>
            
            <div className="btn-group btn-group-justified" role="group">
                <div className="btn-group" role="group">
                    <button type="button" onClick={onClickPrevious} className="btn btn-default">Previous</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" onClick={onClickNext} className="btn btn-default">Next</button>
                </div>
            </div>
        </>
    );
}