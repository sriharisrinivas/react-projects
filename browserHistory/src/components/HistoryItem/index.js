import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const onClickDeleteIcon = () => onDelete(id)

  return (
    <li className="history-card-container">
      <p className="date">{timeAccessed}</p>
      <div className="logo-title-url">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        testid="delete"
        type="button"
        className="button"
        onClick={onClickDeleteIcon}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
