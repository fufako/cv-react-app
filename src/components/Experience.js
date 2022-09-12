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
  render() {
    return (
      <div id="Experience">
        <div id="experience-form">
          <form>
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
          </form>
        </div>
        <div id="experience-preview">
          <div id="company" className="experience-preview-info">
            <h3>Company</h3>
            {this.state.company}
          </div>
          <div id="title" className="experience-preview-info">
            <h3>Position</h3>
            {this.state.title}
          </div>
          <div id="city" className="experience-preview-info">
            <h3>City</h3>
            {this.state.city}
          </div>
          <div id="start" className="experience-preview-info">
            <h3>Form</h3>
            {this.state.start}
          </div>
          <div id="To" className="experience-preview-info">
            <h3>To</h3>
            {this.state.end}
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
