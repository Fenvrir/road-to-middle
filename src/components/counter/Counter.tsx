import React, {useState} from "react"
import "./Counert.scss"
export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const reload = () => {
        setCounter(0)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>Click</button>
            <button style={{marginLeft: "30px"}} onClick={reload}>Reload</button>
        </div>
    );
}
