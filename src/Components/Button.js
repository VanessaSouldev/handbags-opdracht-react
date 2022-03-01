import React from 'react';
import './Button.css';

function Button ({typeOfButton,toggleDisabled, buttonName}) {

    return (
    <button
            type={typeOfButton}
            onClick={() => console.log({buttonName})}
            disabled={toggleDisabled} >
        {buttonName}
    </button>
    );
}

export default Button;