import './HomeSectionVideo.css';
import homeVid from '../../assets/homepage_vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={homeVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experience Ferrari</h1>
          <h5>Feel the speed</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
}
