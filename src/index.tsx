import {render} from "react-dom";
import {Counter} from "./components/counter/Counter";

render(
    <div>
        <h1>Hello world</h1>
        <Counter/>
    </div>,
    document.getElementById("root")
)
