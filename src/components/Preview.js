import Personal from "./Personal"
import avatar from "./images/placeholder.png"

const Preview = (props) => {
  const info = props.info
  return (
    <div id="personal-preview">
      <div className="preview-header">
        <div className="preview-header-top">
          {info.fname} {info.lname}
        </div>
        <div className="preview-header-bottom">{info.title}</div>
      </div>
      <div className="sidebars-container">
        <div id="sidebar-left">
          <div id="description">
            <h3>Description</h3>
            <p>{info.description}</p>
          </div>

          <div id="experience-preview">
            <h3>Experience</h3>
            <div className="experience-info-container">
              <div className="dates">
                {info.start} -{info.end}
              </div>
              <div className="company-info">
                <p>{info.title}</p>
                <p>
                  {info.company}, {info.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="sidebar-right">
          <img src={avatar} alt="avatar_placeholder" />
          <h5>Address</h5>
          {info.address}
          <h5>Phone number</h5>
          {info.phone}
          <h5>E-Mail</h5>
          {info.mail}
        </div>
      </div>
    </div>
  )
}

export default Preview
