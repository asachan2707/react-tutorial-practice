import React, { useState, useCallback } from 'react';
import List from './list';

export default function UseCallback() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // Can be used useMemo
    const getItems = useCallback((inc = 1) => {
        return [number + inc, number + 1 + inc, number + 2 + inc];
    }, [number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    }

    return (
        <div style={theme}>
            <span>
                <input
                    type="number"
                    value={number}
                    // eslint-disable-next-line radix
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            </span>
            <span>
                <List getItems={getItems} />
            </span>
        </div>
    );
}