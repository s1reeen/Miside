import mita from "../../assets/mita.webp";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={css.aboutUs}>
      <div className={css.imgBox}>
        <img className={css.aboutImg} src={mita} alt="game logo" />
      </div>
      <div className={css.textBox}>
        <h2 className={css.title}>About MiSide</h2>
        <p className={css.text}>
          MiSide is not just a game; it’s an unforgettable experience. Developed
          by AIHASTO and published by IndieArk, MiSide takes players on a
          chilling adventure into the mind of a virtual character, MiTa. With
          its innovative transition between 2D and 3D perspectives, MiSide
          creates an unparalleled sense of immersion and tension.
        </p>
        <p className={css.text}>
          Whether you're a fan of horror games or love stories with unexpected
          twists, MiSide is designed to keep you on edge. Its unique mechanics
          and intense narrative have earned it critical acclaim and a dedicated
          fanbase worldwide.
        </p>
      </div>
    </section>
  );
};
export default AboutUs;
