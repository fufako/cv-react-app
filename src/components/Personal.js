import React, { Component } from "react"

class Personal extends Component {
  constructor() {
    super()
    this.state = {
      fname: "",
      lname: "",
      address: "",
      phone: "",
      mail: "",
      description: "",
    }
  }

  render() {
    return (
      <div id="Personal">
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Address" />
          <input placeholder="Phone number" />
          <input placeholder="E-Mail" />
          <input placeholder="Description" />
        </form>
      </div>
    )
  }
}

export default Personal
