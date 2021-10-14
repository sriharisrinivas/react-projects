import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from './components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showPasswords: false,
    searchInput: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    const newlySavedItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newlySavedItem],
    }))
  }

  deleteButtonClicked = id => {
    const {passwordsList} = this.state
    const updatedPasswordslist = passwordsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({passwordsList: updatedPasswordslist})
  }

  renderPasswords = () => {
    const {passwordsList, showPasswords} = this.state
    return (
      <ul className="passwords-container">
        {passwordsList.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            itemDetails={eachItem}
            onDelete={this.deleteButtonClicked}
            showPasswords={showPasswords}
          />
        ))}
      </ul>
    )
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords"
      />
      <p className="msg">no passwords</p>
    </div>
  )

  onChangeSearchIput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderYourPasswordsContainer = () => {
    const {passwordsList, searchInput} = this.state
    return (
      <div className="your-passwords-container">
        <div className="heading-and-search-bar-container">
          <h1 className="heading">Your Passwords</h1>
          <p className="">{passwordsList.length}</p>
          <div className="icon-and-search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="search"
              value={searchInput}
              className="input-box"
              onChange={this.onChangeSearchIput}
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="label-container">
          <input type="checkbox" id="radio" />
          <label htmlFor="radio">Show Passwords</label>
        </div>

        {passwordsList.length === 0
          ? this.renderNoPasswordsView()
          : this.renderPasswords()}
      </div>
    )
  }

  renderForm = () => (
    <form className="form-container">
      <h1 className="heading">Add New Password</h1>
      <div className="icon-and-input-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          alt="website"
          className="icons"
        />
        <input
          type="text"
          placeholder="Enter Website"
          className="input-box"
          onChange={this.onChangeWebsite}
        />
      </div>
      <div className="icon-and-input-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          alt="username"
          className="icons"
        />
        <input
          type="text"
          placeholder="Enter Username"
          className="input-box"
          onChange={this.onChangeUserName}
        />
      </div>
      <div className="icon-and-input-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          alt="password"
          className="icons"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="input-box"
          onChange={this.onChangePassword}
        />
      </div>
      <br />
      <button
        type="submit"
        className="add-button"
        onClick={this.onClickAddButton}
      >
        Add
      </button>
    </form>
  )

  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />

        <div className="add-new-password-container">
          {this.renderForm()}
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="small-image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password-manager"
              className="large-image"
            />
          </div>
        </div>
        {this.renderYourPasswordsContainer()}
      </div>
    )
  }
}

export default App
