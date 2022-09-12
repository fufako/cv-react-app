import React, { Component } from "react"
import Personal from "./components/Personal"
import Experience from "./components/Experience"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Personal />
        <Experience />
      </div>
    )
  }
}

export default App
