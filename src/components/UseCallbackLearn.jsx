import React, { useCallback, useState } from "react";
import List from "../List";

export default function UseCallbackLearn() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    // useCallback - not required to worry about referential equality
    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 1 + incrementor]
    })

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}