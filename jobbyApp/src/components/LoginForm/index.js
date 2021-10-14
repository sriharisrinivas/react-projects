import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="app-container">
        <form className="login-form-container" onSubmit={this.submitForm}>
          <div className="image-name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="login-logo"
              alt="website logo"
            />
          </div>
          <label htmlFor="username" className="label-name">
            USERNAME
          </label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            id="username"
            onChange={this.onChangeUsername}
          />
          <br />

          <label htmlFor="password" className="label-name">
            PASSWORD
          </label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            onChange={this.onChangePassword}
          />
          <div className="button-container">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
