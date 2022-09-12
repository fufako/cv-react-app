import React, { Component } from "react"

class Experience extends Component {
  constructor() {
    super()
    this.state = {
      company: "",
      title: "",
      city: "",
      start: "",
      end: "",
    }
  }

  render() {
    return (
      <div id="Experience">
        <form>
          <input placeholder="Company" />
          <input placeholder="Position" />
          <input placeholder="City" />
          <input placeholder="From" />
          <input placeholder="To" />
        </form>
      </div>
    )
  }
}

export default Experience
