import * as React from 'react'

export function withHoc(
  WrappedComponent: React.ComponentType,
): React.ComponentType {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render(): JSX.Element {
      return (
        <div>
          <div>this is HOC</div>
          <WrappedComponent />
        </div>
      )
    }
  }
}
