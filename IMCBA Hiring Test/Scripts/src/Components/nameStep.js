import React from 'react';
import { validateNameStep } from '../Validate/validate';
import LabelInput from './labelInput';

const NameStep = (props) => {
    const { history, location, match, staticContext, validate, ...otherProps } = props;

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            onClickNext();
        }
    }
    const onClickNext = () => {
        const errors = validate(validateNameStep);
        if (!(errors && Object.keys(errors).length > 0)) {
            history.push('/address');
        }
    }
    return (
        <>
            <LabelInput onKeyPress={enterPressed} label={"First Name"} id={"FirstName"} type={"input"} {...otherProps} required minLength="1" maxLength="40" />
            <LabelInput onKeyPress={enterPressed} label={"Last Name"} id={"LastName"} type={"input"} {...otherProps} required minLength="1" maxLength="40" />
            <div className="btn-group btn-group-justified" role="group">
                <div className="btn-group" role="group">
                    <button type="button" onClick={onClickNext} className="btn btn-default">Next</button>
                </div>
            </div>
        </>
    );
}

export default NameStep;