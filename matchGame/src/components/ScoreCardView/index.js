import './index.css'

const ScoreCardView = props => {
  const {score, playAgainClicked} = props

  const onClickPlayAgain = () => {
    playAgainClicked()
  }

  return (
    <div className="score-card-container">
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          className="trophy"
          alt="trophy"
        />
        <p className="score-card-text">YOUR SCORE</p>
        <p className="score-card-text">{score}</p>
        <button
          type="button"
          className="retry-button"
          onClick={onClickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="retry-image"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCardView
