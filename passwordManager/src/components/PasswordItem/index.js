import './index.css'

const PasswordItem = props => {
  const {itemDetails, onDelete, showPasswords} = props
  console.log(`passwords: ${showPasswords}`)
  const {id} = itemDetails

  const onDeleteButtonClicked = () => {
    onDelete(id)
  }
  return (
    <li className="item-container">
      <div className="item-image-container">
        <h1 className="profile-card">{itemDetails.username[0]}</h1>
      </div>
      <div className="data">
        <p className="details">{itemDetails.website}</p>
        <p className="details">{itemDetails.username}</p>
        <p className="details">{itemDetails.password}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={onDeleteButtonClicked}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
