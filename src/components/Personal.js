import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers"
import React, { Component } from "react"
import Preview from "./Preview"

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: "",
      lname: "",
      address: "",
      phone: "",
      mail: "",
      description: "",
      company: "",
      title: "",
      city: "",
      start: "",
      end: "",
      university: "",
      uniCity: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
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
  updateCompany = (e) => {
    this.setState({ company: e.target.value })
  }
  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  updateCity = (e) => {
    this.setState({ city: e.target.value })
  }
  updateStart = (e) => {
    this.setState({ start: e.target.value })
  }
  updateEnd = (e) => {
    this.setState({ end: e.target.value })
  }
  updateUniversity = (e) => {
    this.setState({ university: e.target.value })
  }
  updateUniCity = (e) => {
    this.setState({ uniCity: e.target.value })
  }
  updateDegree = (e) => {
    this.setState({ degree: e.target.value })
  }
  updateSubject = (e) => {
    this.setState({ subject: e.target.value })
  }
  updateFrom = (e) => {
    this.setState({ from: e.target.value })
  }
  updateTo = (e) => {
    this.setState({ to: e.target.value })
  }

  render() {
    return (
      <div id="Personal">
        <div id="personal-form">
          <form>
            <h3>Personal Information</h3>
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
              id="description-input"
              placeholder="Description"
              onChange={(e) => {
                this.updateDescription(e)
              }}
            />
            <h3>Experience</h3>
            <input
              placeholder="Company"
              onChange={(e) => {
                this.updateCompany(e)
              }}
            />
            <input
              placeholder="Position"
              onChange={(e) => {
                this.updateTitle(e)
              }}
            />
            <input
              placeholder="City"
              onChange={(e) => {
                this.updateCity(e)
              }}
            />
            <input
              placeholder="From"
              onChange={(e) => {
                this.updateStart(e)
              }}
            />
            <input
              placeholder="To"
              onChange={(e) => {
                this.updateEnd(e)
              }}
            />
            <h3>Education</h3>
            <input
              placeholder="University name"
              onChange={(e) => {
                this.updateUniversity(e)
              }}
            />
            <input
              placeholder="City"
              onChange={(e) => {
                this.updateUniCity(e)
              }}
            />
            <input
              placeholder="Degree"
              onChange={(e) => {
                this.updateDegree(e)
              }}
            />
            <input
              placeholder="Subject"
              onChange={(e) => {
                this.updateSubject(e)
              }}
            />
            <input
              placeholder="Form"
              onChange={(e) => {
                this.updateFrom(e)
              }}
            />
            <input
              placeholder="To"
              onChange={(e) => {
                this.updateTo(e)
              }}
            />
          </form>
        </div>
        <Preview info={this.state} />
      </div>
    )
  }
}

export default Personal
