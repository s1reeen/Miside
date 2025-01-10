import css from "./Hero.module.css";
import videoBg from "../../assets/trailer.mp4";
import { FaSteamSymbol } from "react-icons/fa";

const Hero = () => {
  const handleClick = () => {
    window.location.href = "https://store.steampowered.com/app/2527500/MiSide/";
  };

  return (
    <section className={css.hero}>
      <video
        className={css.heroVideo}
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
      <div className={css.heroOverlay}></div>
      <div className={css.heroText}>
        <h1>MiSide - The Ultimate Psychological Horror Experience</h1>
        <p>
          Discover the immersive world of MiSide, a groundbreaking psychological
          horror game that redefines the boundaries of interactive storytelling.
          Dive into a captivating journey where reality blurs, and every
          decision shapes your experience.
        </p>
        <button className={css.downloadButton} onClick={handleClick}>
          Download MiSide <FaSteamSymbol className={css.steam} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
