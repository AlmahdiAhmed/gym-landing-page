import Reveal from "./Reveal";
import coach from "./icon/section2/alora-griffiths-H6ED86m2TMQ-unsplash-min.jpg";
import cardio from "./icon/section2/cardio.jpg";
import arts from "./icon/section2/arts.jpg";
const SectionTwo = () => {
  return (
    <div className="section two">
      <div className="section-container">
        <div className="coach">
          <div className="img-container">
            <img src={coach} alt="cardio" />
          </div>
          <div className="text">
            <Reveal>
              <h2>Professional Coaches</h2>
            </Reveal>
            <hr />
            <Reveal>
              <p>
                lifting heavy weight may sometimes be dangerous but don t worry
                progress safely, faster and break your weight records under the
                supervise of several professional coaches.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="coach cardio reverse">
          <div className="img-container">
            <img src={cardio} alt="cardio" />
          </div>
          <div className="text">
            <Reveal>
              <h2>Your heart needs this</h2>
            </Reveal>
            <hr />
            <Reveal>
              <p>
                Cardio exercises are very important for you overall health. It
                activates your heart muscles and help you loose weight and stay
                in shape.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="coach arts">
          <div className="img-container">
            <img src={arts} alt="martial arts" />
          </div>
          <div className="text">
            <Reveal>
              <h2>Martial Arts</h2>
            </Reveal>
            <hr />
            <Reveal>
              <p>
                lifting heavy weight may sometimes be dangerous but don t worry
                progress safely, faster and break your weight records under the
                supervise of several professional coaches.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
