/* eslint-disable no-unused-vars */
import { useState } from "react";

const Demo = () => {
    const [object, setObject] = useState({
        count: 0,
        color: "white"
    });
    const { count, color } = object;
    //, "pink", "green", "yellow", "gold", "aqua"
    const handleClick = () => {
        setObject({
            count: count + 1,
            color: random(color)
        });
    }
    const random = (color) => {
        const arr = ["red", "blue"];
        let newColor = arr[Math.trunc(Math.random() * arr.length)];
        while (color === newColor) {
            newColor = arr[Math.trunc(Math.random() * arr.length)]
        }
        return newColor;
    }

    return (
        <div className="container mt-5" style={{ backgroundColor: `${color}` }}>
            <div className="col">
                <button className="btn btn-primary"
                    onClick={handleClick}
                >Count : {count}
                </button>
            </div>

        </div>
    )
}

export default Demo;