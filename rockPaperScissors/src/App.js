import {Component} from 'react'

import {AppContainer, Description} from './styledComponents'
import './App.css'

import ScoreBoard from './components/ScoreBoard'
import ReactPopup from './components/ReactPopup'
import GameContainer from './components/GameContainer'
import GameContext from './Context/GameContext'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    image:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    selectedData: {},
    randomData: choicesList[Math.floor(Math.random() * 3)],
  }

  updateScore = async () => {
    const {selectedData, randomData} = this.state
    if (selectedData.id === randomData.id) {
      await this.setState(prevState => ({score: prevState.score + 0}))
    } else if (selectedData.id === 'SCISSORS' && randomData.id === 'PAPER') {
      await this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedData.id === 'ROCK' && randomData.id === 'SCISSORS') {
      await this.setState(prevState => ({score: prevState.score + 1}))
    } else if (selectedData.id === 'PAPER' && randomData.id === 'ROCK') {
      await this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      await this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  choiceItemClicked = async data => {
    await this.setState({
      selectedData: data,
      randomData: choicesList[Math.floor(Math.random() * 3)],
    })
  }

  render() {
    const {randomData, score, selectedData} = this.state

    return (
      <GameContext.Provider
        value={{
          randomData,
          score,
          selectedData,
          choicesList,
          choiceItemClicked: this.choiceItemClicked,
          updateScore: this.updateScore,
        }}
      >
        <AppContainer>
          <ScoreBoard />
          <GameContainer choicesList={choicesList} />
          <ReactPopup />
        </AppContainer>
      </GameContext.Provider>
    )
  }
}

export default App
