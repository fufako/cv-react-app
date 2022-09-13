import Personal from "./Personal"

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
      <div id="sidebar-right">
        <div id="description">
          <h3>Description</h3>
          {info.description}
        </div>

        <div id="experience-preview">
          {info.company}
          {info.city}
          {info.start}
          {info.end}
        </div>
      </div>

      <div id="sidebar-left">
        <h5>First Name</h5>
        {info.address}
        <h5>Phone number</h5>
        {info.phone}
        <h5>E-Mail</h5>
        {info.mail}
      </div>
    </div>
  )
}

export default Preview
