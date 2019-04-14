import React from 'react';
import LabelInput from './labelInput';


export default function ContactUsForm(props) {
    const { history, location, match, staticContext, ...otherProps } = props;

    const onClickPrevious = () => {
        history.push('/address');
    }

    return (
        <>
            <LabelInput label={"Email"} id={"Email"} {...otherProps} required minLength="1" maxLength="128" />
            <div className="btn-group btn-group-justified" role="group">
                <div className="btn-group" role="group">
                    <button type="button" onClick={onClickPrevious} className="btn btn-default">Previous</button>
                </div>
                <div className="btn-group" role="group">
                    <button type="submit" className="btn btn-info">Submit</button>
                </div>
            </div>
        </>
    );
}



