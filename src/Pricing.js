import Reveal from "./Reveal";
const Pricing = () => {
  return (
    <div className="section pricing-section" id="pricing ">
      <h1>right plans for your needs</h1>
      <div className="pricing-container">
        <div className="pricing">
          <Reveal>
            <h2>Beginner Pack</h2>
          </Reveal>
          <div className="price">
            <Reveal>
              <span>$ 99 /</span> Month
            </Reveal>
          </div>
          <div className="text">
            <Reveal>
              <p>24H unlimited access</p>
              <p>personal trainer</p>
              <p className="dash">free supplements</p>
              <p className="dash">locker + bathroom</p>
            </Reveal>
          </div>
          <Reveal>
            <button>join us now</button>
          </Reveal>
        </div>
        <div className="pricing">
          <Reveal>
            <h2>Power Pack</h2>
          </Reveal>
          <div className="price">
            <Reveal>
              <span>$ 199 /</span> Month
            </Reveal>
          </div>
          <div className="text">
            <Reveal>
              <p>24H unlimited access</p>
              <p>personal trainer</p>
              <p>free supplements</p>
              <p className="dash">locker + bathroom</p>
            </Reveal>
          </div>
          <Reveal>
            {" "}
            <button>join us now</button>
          </Reveal>
        </div>
        <div className="pricing">
          <Reveal>
            <h2>Pro Pack</h2>
          </Reveal>
          <div className="price">
            <Reveal>
              <span>$ 299 /</span> Month
            </Reveal>
          </div>
          <div className="text">
            <Reveal>
              <p>24H unlimited access</p>
              <p>personal trainer</p>
              <p>free supplements</p>
              <p>locker + bathroom</p>
            </Reveal>
          </div>
          <Reveal>
            <button>join us now</button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
