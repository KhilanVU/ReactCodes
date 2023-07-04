import React, { useState } from "react"

function countInitial() {
    console.log("run initial");
    return 4;
}

export default function UseStateLearn() {
    // const [count, setCount] = useState(() => countInitial());
    const [state, setState] = useState({ count: 4, theme: 'blue' });
    const count = state.count;
    const theme = state.theme;

    function decrementCount() {
        // setCount(prevCount => prevCount - 1);
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 }
        });
    }

    function incrementCount() {
        // setCount(prevCount => prevCount + 1);
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        });
    }
    return (
        <>
            <div id="div1">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <span>{theme}</span>
                <button onClick={incrementCount}>+</button>
            </div>
        </>
    )
}