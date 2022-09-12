import React, { Component } from "react"
import PersonalPreview from "./PersonalPreview"

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

  updateName = (e) => {
    this.setState({ fname: e.target.value })
  }
  updateNameLast = (e) => {
    this.setState({ lname: e.target.value })
  }
  updateAddress = (e) => {
    this.setState({ address: e.target.value })
  }
  updatePhone = (e) => {
    this.setState({ phone: e.target.value })
  }
  updateMail = (e) => {
    this.setState({ mail: e.target.value })
  }
  updateDescription = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
    return (
      <div id="Personal">
        <div id="personal-form">
          <form>
            <input
              placeholder="First Name"
              onChange={(e) => {
                this.updateName(e)
              }}
            />
            <input
              placeholder="Last Name"
              onChange={(e) => {
                this.updateNameLast(e)
              }}
            />
            <input
              placeholder="Address"
              onChange={(e) => {
                this.updateAddress(e)
              }}
            />
            <input
              placeholder="Phone number"
              onChange={(e) => {
                this.updatePhone(e)
              }}
            />
            <input
              placeholder="E-Mail"
              onChange={(e) => {
                this.updateMail(e)
              }}
            />
            <input
              placeholder="Description"
              onChange={(e) => {
                this.updateDescription(e)
              }}
            />
          </form>
        </div>
        <div id="personal-preview">
          <div id="first-name" className="personal-preview-info">
            <h3>First Name</h3>
            {this.state.fname}
          </div>
          <div id="last-name" className="personal-preview-info">
            <h3>Last Name</h3>
            {this.state.lname}
          </div>
          <div id="address" className="personal-preview-info">
            <h3>First Name</h3>
            {this.state.address}
          </div>
          <div id="phone" className="personal-preview-info">
            <h3>Phone number</h3>
            {this.state.phone}
          </div>
          <div id="mail" className="personal-preview-info">
            <h3>E-Mail</h3>
            {this.state.mail}
          </div>
          <div id="description" className="personal-preview-info">
            <h3>Description</h3>
            {this.state.description}
          </div>
        </div>
      </div>
    )
  }
}

export default Personal
