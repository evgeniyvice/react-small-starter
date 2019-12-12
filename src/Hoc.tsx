import * as React from "react"

export function withHoc(WrappedComponent: React.ComponentType) {
    return class extends React.Component {
        render() {
            return (
                <div>
                    <div>this is HOC</div>
                    <WrappedComponent />
                </div>
            )
        }
    }
}
