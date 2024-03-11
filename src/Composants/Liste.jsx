import * as React from "react";

export function Liste({ type, children }) {
    console.log("dans Liste\r\ntype = " + type);
    console.dir({ children });
    if ({ type } === "ul") {
        return (<ul>
            {children}
        </ul>)
    }
    else {
        return (
            <ol>
                {children}
            </ol>
        )
    }
}

export default Liste;