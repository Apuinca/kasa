import * as React from "react";

import "./Liste.scss";

export function Liste({ type, children }) {

    console.dir({ children });
    if (type == "ul") {
        console.log("dans Liste\r\ntype = " + type);

        return (<ul>
            {children}
        </ul>)
    }
    else {
        console.log("dans Liste\r\ntype = " + type);

        return (
            <ol>
                {children}
            </ol>
        )
    }
}

export default Liste;