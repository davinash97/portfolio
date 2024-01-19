import "../Styles/Contacts.css";
import mail from "../../assets/svg/gmail.svg";
import telegram from "../../assets/svg/telegram.svg";
import linkedin from "../../assets/svg/linkedin.svg";

function Contacts() {
  // document
  //     .querySelectorAll("input")
  //     .forEach((input) => input.setAttribute("disabled", true));

  return (
    <section className="flex flex-col gap-10 py-10">
      <h2 className="text-center">Contacts</h2>
      <div style={{ display: "none" }}>
        <form
          action="mailto:davinash97.work@gmail.com"
          method="post"
          className="flex flex-col gap-5"
        >
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="true"
              autoCapitalize="true"
            />
          </label>
          <label htmlFor="mail">
            <input
              type="mail"
              name="mail"
              id="mail"
              placeholder="Email"
              autoComplete="true"
            />
          </label>
          <label htmlFor="subject">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              autoComplete="false"
            />
          </label>
          <label htmlFor="message">
            <textarea
              style={{ color: "black" }}
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              autoComplete="false"
            />
          </label>
          <div className="flex justify-around">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        <h4 className="text-center">OR</h4>
      </div>
      <div className="flex gap-10 justify-around contacts">
        <a
          href="mailto:davinash97.work@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail} alt="Gmail" draggable="false" />
        </a>
        <a
          href="https://t.me/davinash1997"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderRadius: "50%" }}
        >
          <img src={telegram} alt="Telegram" draggable="false" />
        </a>
        <a
          href="https://linkedin.com/in/davinash97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" draggable="false" />
        </a>
      </div>
    </section>
  );
}

export default Contacts;
