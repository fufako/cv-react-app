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
  handleNameChange = (fname) => {
    this.setState({ fname })
  }
  render() {
    return (
      <div id="Personal">
        <form>
          <input
            placeholder="First Name"
            onChange={(e) => {
              this.setState({
                fname: e.target.value,
              })
            }}
          />
          <input
            placeholder="Last Name"
            onChange={(e) => {
              this.setState({
                lname: e.target.value,
              })
            }}
          />
          <input
            placeholder="Address"
            onChange={(e) => {
              this.setState({
                address: e.target.value,
              })
            }}
          />
          <input
            placeholder="Phone number"
            onChange={(e) => {
              this.setState({
                phone: e.target.value,
              })
            }}
          />
          <input
            placeholder="E-Mail"
            onChange={(e) => {
              this.setState({
                mail: e.target.value,
              })
            }}
          />
          <input
            placeholder="Description"
            onChange={(e) => {
              this.setState({
                description: e.target.value,
              })
            }}
          />
        </form>
      </div>
    )
  }
}

export default Personal
