import "./header.css";
import Tilt from "react-parallax-tilt";
import heroImg from '../../assets/blogging.svg'

export default function Header() {
  return (
    <>
    <div className="hero">
      <div className="hero-text">
        <h1>Blog-Blinks</h1>
        <h2>A place to share your thoughts</h2>
      </div>
      <Tilt>        
      <img
        src={heroImg}
        alt="hero-img"
        className="hero-img"
      />
      </Tilt>
    </div>
  </>
  );
}
