import React from 'react';

export default function LabelInput(props) {
    const { values, errors, handleChange, ...otherProps } = props;
    return (
        <div className={`form-group ${errors[props.id] && 'has-error has-feedback'}`}>
            <label className="control-label" htmlFor={props.id}>{props.label}</label>
            <input className="form-control input-sm" value={values[props.id]} onChange={handleChange} {...otherProps} />
            {errors[props.id] && (
                <p className="help-block">{errors[props.id]}</p>
            )}
        </div>
    );
}    