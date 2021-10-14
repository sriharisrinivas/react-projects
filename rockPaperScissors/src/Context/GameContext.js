import React from 'react'

const GameContext = React.createContext({
  score: 0,
  choicesList: [
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
  ],
  selectedData: {},
  randomData: {},
  choiceItemClicked: () => {},
  updateScore: () => {},
})

export default GameContext
