import * as React from "react"
import { withHoc } from "./hoc"

export const Some = withHoc(() => {
    return (
        <div className="App">
            <h1>Hello, HOC!</h1>
        </div>
    )
})
