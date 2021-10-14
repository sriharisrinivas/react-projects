import {
  AppContainer,
  PrimeVideoImage,
  AllVideosContainer,
  Heading,
  ActionMoviesContainer,
  ComedyMoviesContainer,
} from './styledComponents'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <AppContainer>
      <PrimeVideoImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <AllVideosContainer>
        <ActionMoviesContainer>
          <Heading>Action Movies</Heading>
          <MoviesSlider moviesList={actionMovies} />
        </ActionMoviesContainer>
        <ComedyMoviesContainer>
          <Heading>Comedy Movies</Heading>
          <MoviesSlider moviesList={comedyMovies} />
        </ComedyMoviesContainer>
      </AllVideosContainer>
    </AppContainer>
  )
}

export default PrimeVideo
