import * as React from 'react'
import {hot} from 'react-hot-loader'
import {Some} from './Some'
import './App.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Hello, TypeScript!</h1>
      <Some></Some>
    </div>
  )
}

export default hot(module)(App)
