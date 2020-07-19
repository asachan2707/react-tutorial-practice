import React, { useState, useEffect } from 'react';

// Access properties via props

// export default function List(props) {
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         setItems(props.getItems());
//         console.log('Updating the items: ', props.getItems());
//     }, [props.getItems]);

//     return items.map(item => <div key={item}>{item}</div>);
// }


// Access properties via object

export default function List({ getItems }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems(3));
        console.log('Updating the items: ', getItems());
    }, [getItems]);

    return items.map(item => <div key={item}>{item}</div>);
}