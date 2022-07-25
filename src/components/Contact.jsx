import React, { Fragment, useState } from "react";
import styles from "./Contact.module.scss";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_bzdi6uk", "template_fmjumeo", toSend, "vxa6gldCtN3knNwsr")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className={styles.contact} id="contact">
        <div className={styles.contact__master} data-aos="fade-up">
          <div className={styles.contact__master__content1} data-aos="fade-up">
            <h5 className={styles.contact__master__content1__more}>
              Do you want to know something more?
            </h5>
            <h1 className={styles.contact__master__content1__title}>Contact</h1>
            <div
              className={styles.contact__master__content1__line}
              data-aos="fade-up"
            ></div>
          </div>

          <div className={styles.contact__master__box1} data-aos="fade-up">
            <form
              onSubmit={onSubmit}
              className={styles.contact__master__box1__content2}
              data-aos="fade-up"
            >
              <input
                type="text"
                name="from_name"
                className={styles.contact__master__box1__content2__inputs}
                placeholder="From name"
                value={toSend.from_name}
                onChange={handleChange}
                data-aos="fade-up"
              ></input>
              <input
                type="text"
                className={styles.contact__master__box1__content2__inputs}
                name="to_name"
                placeholder="to name"
                value={toSend.to_name}
                onChange={handleChange}
                data-aos="fade-up"
              ></input>
              <input
                type="text"
                className={styles.contact__master__box1__content2__inputs}
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
              ></input>
              <textarea
                className={styles.contact__master__box1__content2__text}
                rows="10"
                cols="50"
                data-aos="fade-up"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
              <div
                className={styles.contact__master__box1__content2__space}
                data-aos="fade-up"
              >
                <button
                  type="submit"
                  className={
                    styles.contact__master__box1__content2__space__button
                  }
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
