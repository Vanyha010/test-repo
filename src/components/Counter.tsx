import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </>
    );
}
