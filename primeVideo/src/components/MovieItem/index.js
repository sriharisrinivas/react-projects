import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import {
  MovieItemContainer,
  Thumbnail,
  ModalContainer,
  MoviePlayerContainer,
  CloseButton,
} from './styledComponents'

const MovieItem = props => {
  const {eachMovieDetails} = props
  return (
    <Popup
      modal
      trigger={
        <img src={eachMovieDetails.thumbnailUrl} alt="movie thumbnail" />
      }
    >
      {close => (
        <MovieItemContainer>
          <CloseButton
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </CloseButton>
          <MoviePlayerContainer>
            <ReactPlayer url={eachMovieDetails.videoUrl} controls />
          </MoviePlayerContainer>
        </MovieItemContainer>
      )}
    </Popup>
  )
}

export default MovieItem
