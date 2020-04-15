import React, { Component } from 'react';

class First extends Component {
    render() {
        // return (
        //     <div>
        //         <h1>My first component</h1>
        //         <p>
        //             Welcome :)
        //         </p>
        //     </div>
        // )
        return React.createElement(
            'div', null,
            React.createElement('h1', null, 'My first component through React.createElement'),
            React.createElement('p', null, 'Welcome :-)')
        )
    }
}

export default First;