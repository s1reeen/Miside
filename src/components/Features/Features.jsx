import FeaturesCard from "../FeaturesCard/FeaturesCard";
import css from "./Features.module.css";
import { LuBrain, LuMusic } from "react-icons/lu";
import {
  IoCubeOutline,
  IoRocketOutline,
  IoPlanetOutline,
} from "react-icons/io5";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      svg: <IoCubeOutline />,
      title: "Revolutionary Gameplay",
      description: "Experience a unique blend of gameplay elements:",
      points: [
        "Signature 2D-to-3D perspective shifts",
        "Every object in MiSide's world tells a story",
        "Groundbreaking exploration in both dimensions",
      ],
    },
    {
      id: 2,
      svg: <LuBrain />,
      title: "True Psychological Horror",
      description: "Redefines psychological horror gaming:",
      points: [
        "MiSide's unique approach to psychological fear",
        "Uncover the dark secrets behind MiTa's virtual existence",
        "Experience MiSide's deep psychological narrative",
      ],
    },
    {
      id: 3,
      svg: <LuMusic />,
      title: "Stunning Audio-Visual Design",
      description: "Step into MiSide's meticulously crafted world:",
      points: [
        "MiSide's distinctive visual style and effects",
        "Haunting soundscapes that define MiSide's atmosphere",
        "Original soundtrack composed exclusively for MiSide",
      ],
    },
    {
      id: 4,
      svg: <IoRocketOutline />,
      title: "Your Choices Matter",
      description: "Every playthrough of MiSide is unique:",
      points: [
        "Multiple endings in MiSide's branching narrative",
        "Discover MiSide's hidden paths and secret areas",
        "Your choices shape MiTa's fate and MiSide's story",
      ],
    },
    {
      id: 5,
      svg: <IoPlanetOutline />,
      title: "Play Your Way",
      description: "Designed for everyone:",
      points: [
        "Experience across multiple platforms",
        "Intuitive interface designed for MiSide's unique gameplay",
        "Customizable difficulty settings for your journey",
      ],
    },
  ];

  return (
    <section className={css.features}>
      <h2 className={css.title}>Experience MiSide's Unique Features</h2>
      <div className={css.grid}>
        {featuresData.map((feature) => (
          <FeaturesCard
            key={feature.id}
            svg={feature.svg}
            title={feature.title}
            description={feature.description}
            points={feature.points}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
