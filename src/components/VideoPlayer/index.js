import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <div className="bg-container">
        <h1 className="main-heading">Surprise Gift For U</h1>
        <div className="name-section d-flex flex-row justify-content-start mb-3 p-5">
          <label htmlFor="name">Search Your Name Here </label>
          <input type="text" className="searching-name" id="name" />
        </div>
        <div className="button">
          <button type="button" className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default VideoPlayer
