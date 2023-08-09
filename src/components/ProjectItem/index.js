import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="fashion">Fashion</h1>
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
        <hr className="hr-line" />
        <div className="small-type-container">
          <img
            src="https://img.freepik.com/free-photo/horizontal-shot-curious-grey-haired-senior-man-points-index-finger-away-blank-space-shows-place-your-advertisement-wears-casual-jumper-isolated-blue-wall_273609-44300.jpg?w=900&t=st=1691509130~exp=1691509730~hmac=9c277b1182ce0e4c1d0cf13c043ad48d02c3ea89dad10ad54ec9bd27c5b178ed"
            alt="img"
            className="image-old"
          />
          <div>
            <h1 className="heading">FitBit in Corroption</h1>
            <p className="paragraph">san Diago,Californa</p>
          </div>
          <a href="readmore">Readmore</a>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
