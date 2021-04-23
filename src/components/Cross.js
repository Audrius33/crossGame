import React from 'react';

const Cross = ({send}) => {
    return (
        <div className="cross">
            <div onClick={send} className="cross1"></div>
        </div>
    );
};

export default Cross;