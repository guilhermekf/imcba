import React from 'react';

export default function LabelSelect(props) {
    const { values, errors, handleChange, list, ...otherProps } = props;
    return (
        <div className={`form-group ${errors[props.id] && 'has-error has-feedback'}`}>
            <label className="control-label" htmlFor={props.id}>{props.label}</label>
            <select className="form-control input-sm" value={values[props.id]} onChange={handleChange} {...otherProps} >
                <option value="">Select...</option>
                {list.map(item => (
                    <option key={item.Value || item} value={item.Value ||  item}>{item.Text || item}</option>
                ))}
            </select>
            {errors[props.id] && (
                <p className="help-block">{errors[props.id]}</p>
            )}
        </div>
    );
}    