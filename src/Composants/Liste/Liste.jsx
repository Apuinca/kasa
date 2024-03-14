import * as React from "react";

import "./Liste.scss";

export function Liste({ type, children }) {
    if (type == "ul") {
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