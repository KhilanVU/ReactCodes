import React, { useReducer } from "react"

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

export default function UseReducerLearn() {
    // With the help of reducer state changes only when we want it to be changed.
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    // const [count, setCount] = useState(0);

    function decrement() {
        dispatch({ type: 'increment' })
        // setCount(prevCount => prevCount - 1);
    }

    function increment() {
        dispatch({ type: 'decrement' })
        // setCount(prevCount => prevCount + 1);
    }
    return (
        <>
            <div id="div1">
                <button onClick={decrement}>-</button>
                <span>{state.count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}