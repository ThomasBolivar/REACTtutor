import React, { useState,useEffect } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    useEffect(() => {

        setTimeout(()=>{
            document.title = `Clicked ${count} times`;
        },2000)
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click on me
            </button>
        </div>
    );
}
export default Counter