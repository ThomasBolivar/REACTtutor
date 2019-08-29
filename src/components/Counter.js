import React, {useState, useEffect} from 'react';

function Counter() {
    /**
     *  userState returns two values, that's why we need destructuring
     */
    const [count, setCount] = useState(0);

    /**
     * userEffect is the componentDidMount, componentDidUpdate,  componentWillUnmount in one
     * */
    useEffect(() => {

        setTimeout(() => {
            document.title = `Clicked ${count} times`;
        }, 500)
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