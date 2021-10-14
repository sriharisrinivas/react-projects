import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logoutButtonClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="company-logo"
          alt="website logo"
        />
      </Link>
      <ul className="link-container">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        </li>
      </ul>
      <Link to="/login">
        <button
          type="button"
          className="logout-button"
          onClick={logoutButtonClicked}
        >
          Logout
        </button>
      </Link>
    </nav>
  )
}
export default withRouter(Header)
