import { useEffect, useState } from "react";

const Contact = () => {
  const [text, setText] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setText(true);
    setTimeout(() => {
      setText(false);
    }, 2000);
  };
  return (
    <div className="section contact">
      <div className="contact-container" id="contact">
        <h1>Get in touch</h1>
        <p className={`message ${text && "show-message"}`}>
          <span>Thank you! You will receive a message soon</span>
        </p>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor="name">Full Name</label>
            <input
              required
              type="text"
              id="name"
              placeholder="Please enter your full name"
            />
          </div>
          <div className="input">
            <label htmlFor="number">Full Name</label>
            <input
              required
              type="text"
              id="number"
              placeholder="Please enter your phone number"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
