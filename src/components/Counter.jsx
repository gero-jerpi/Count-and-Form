"use client";
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="contador">  
            <h1>Contador</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}