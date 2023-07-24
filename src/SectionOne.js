import cardio from "./icon/section1/treadmill_2382633.png";
import boxing from "./icon/section1/punching-bag_2079573.png";
import dumbbell from "./icon/section1/dumbbells_10755365.png";
import Reveal from "./Reveal";
const SectionOne = () => {
  return (
    <div className="section one" id="about">
      <h1>why to join us</h1>
      <div className="container">
        <div className="dumbbell">
          <Reveal>
            <div className="img-container">
              <img src={dumbbell} alt="dumbbell" />
              <p>
                Build your muscles with full access to machines and free weight
              </p>
            </div>
          </Reveal>
        </div>
        <div className="cardio">
          <Reveal>
            <div className="img-container">
              <img src={cardio} alt="cardio" />
              <p>
                Burn calories and loose weight with different cardio exercises
              </p>
            </div>
          </Reveal>
        </div>
        <div className="boxing">
          <Reveal>
            <div className="img-container">
              <img src={boxing} alt="boxing" />
              <p>Join our different martial arts exercises</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
