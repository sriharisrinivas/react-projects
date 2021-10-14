import './index.css'

const ImageItem = props => {
  const {imageDetails, onChangeImage} = props

  const onClickImage = () => {
    onChangeImage(imageDetails)
  }

  return (
    <li className="image-item">
      <button type="button" className="button">
        <img
          className="image"
          src={imageDetails.thumbnailUrl}
          onClick={onClickImage}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ImageItem
