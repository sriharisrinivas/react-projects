import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  buttonClicked = () => {
    const randomNumber = Math.ceil(Math.random(1, 100) * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.buttonClicked}>
            Generate
          </button>
          <h1 className="heading">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
