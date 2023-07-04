import React, { useState, useEffect } from "react"

export default function UseEffectLearn() {
    console.log('render');
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, []);
    
    return (
        <>
            <div id="div1">
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <h1>{resourceType}</h1>
                {items.map(item => {
                    return <pre>{JSON.stringify(item)}</pre>
                })}
            </div>
            <div>{windowWidth}</div>
        </>
    )
}