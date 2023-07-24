import image1 from "./icon/hero/gymhero-min.jpg";
import image2 from "./icon/hero/hero-2.jpg";
import image3 from "./icon/hero/hero-3.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import Reveal from "./Reveal";
const Hero = () => {
  const images = [image1, image2, image3];
  const [index, setIndex] = useState(1);
  const nextImage = () => {
    const lastImage = index === images.length - 1;
    const newIndex = lastImage ? 0 : index + 1;
    setIndex(newIndex);
  };
  const prevImage = () => {
    const fistImage = index === 0;
    const newIndex = fistImage ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };
  return (
    <div className="hero-container" id="home">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>
      <div className="text">
        <Reveal>
          <h1>fit-gym</h1>
        </Reveal>
        <Reveal>
          <p>
            Welcome to FIT-GYM continue browsing to see all our features and
            prices.
          </p>
        </Reveal>
        <Reveal>
          <button>join us now</button>
        </Reveal>
      </div>
      <div className="icons">
        <div className="left">
          <AiOutlineLeft className="icon" size={30} onClick={prevImage} />
        </div>
        <div className="right">
          <AiOutlineRight className="icon" size={30} onClick={nextImage} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
