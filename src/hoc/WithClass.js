import React from 'react';

const withClass = (WrapperComponent, classes) => {
    return props => {
        return <div className={classes}>
            <WrapperComponent />
        </div>
    }
}

export default withClass;
