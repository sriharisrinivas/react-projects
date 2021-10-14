import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, downloadUrl} = appDetails

  return (
    <a
      href={downloadUrl}
      rel="noreferrer"
      target="_blank"
      className="link-item"
    >
      <li className="app-item">
        <img className="app-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </a>
  )
}

export default AppItem
