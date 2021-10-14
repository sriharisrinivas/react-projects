import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import {SliderContainer} from './styledComponents'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  const {moviesList} = props

  return (
    <SliderContainer>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} eachMovieDetails={eachMovie} />
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default MoviesSlider
