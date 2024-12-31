import React from "react";
import PropTypes from "prop-types";

const Digit = (props) => {
    
    return (
        <div className="digit bg-dark border border-3 rounded-1 border-black me-2">
            <h1 className="text-white d-flex justify-content-center mt-2 number digitSize mt-2">{props.digit}</h1>
        </div>
    )
};

Digit.propTypes = {digit: PropTypes.string,}


export default Digit;