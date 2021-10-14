import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeButton = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="calculate-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="inputEl" className="desc">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeButton}
              id="inputEl"
            />
            <br />
            <p>No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="photo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
