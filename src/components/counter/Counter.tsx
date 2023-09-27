import React, {useState} from "react"
import styles from "./Counert.module.scss"
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
            <button className={styles.margin} onClick={increment}>Click</button>
            <button className={styles.margin} onClick={reload}>Reload</button>
        </div>
    );
}
