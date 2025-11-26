import React from 'react';
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Input = ({className, label, isTouched, error, name, ...restProps}) => {
    return (
        <Form.Group className={className} controlId={name}>
            {label ? <Form.Label column='sm'>{label}</Form.Label> : null}
            <Form.Control {...restProps} name={name} aria-label={restProps.placeholder} />
            {isTouched && error ? (
                <div className='text-danger'>{error}</div>
            ) : null}
        </Form.Group>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    isTouched: PropTypes.bool,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    as: PropTypes.string,
    bsPrefix: PropTypes.string,
    htmlSize: PropTypes.number,
    size: PropTypes.oneOf(['sm', 'lg']),
    plaintext: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
    id: PropTypes.string,
    isValid: PropTypes.bool,
    isInvalid: PropTypes.bool,
};

export default Input;