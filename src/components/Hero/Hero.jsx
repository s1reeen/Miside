import videoBg from "../../assets/trailer.mp4";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <video
        className={css.heroVideo}
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero;
