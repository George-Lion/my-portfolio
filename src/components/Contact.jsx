import React, { Fragment, useState } from "react";
import styles from "./Contact.module.scss";
import { send } from "emailjs-com";
import ReactTooltip from "react-tooltip";
import { useTranslation } from "react-i18next";
import swal from "sweetalert";

const Contact = () => {
  let url1 = "https://github.com/George-Lion";
  let url2 = "https://linkedin.com/in/jorgeleonb";

  const [t, i18n] = useTranslation("global");

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
        swal(
          "message sent",
          "tu mensaje se ha enviado correctamente",
          "success",
          {
            buttons: {
              cancel: "ok",
            },
          }
        );
      })
      .catch((err) => {
        swal("message error", "tu mensaje no se ha enviado", "error", {
          buttons: {
            cancel: "ok",
          },
        });
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const emailIsValid = (email) => {
    //validates that the input is an email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <Fragment>
      <div className={styles.contact} id="contact">
        <div className={styles.contact__master}>
          <div className={styles.contact__master__content1}>
            <h5 className={styles.contact__master__content1__more}>
              {t("header.contact1")}
            </h5>
            <h1 className={styles.contact__master__content1__title}>
              {t("header.contact2")}
            </h1>
            <div
              className={styles.contact__master__content1__line}
              data-aos="fade-up"
            ></div>
            <div className={styles.contact__master__ikon}>
              <div className={styles.contact__master__ikon__icon}>
                <a
                  className={styles.footer__ikon__icon}
                  href={url1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="fab fa-github" title="Github"></i>
                </a>
              </div>
              <div className={styles.contact__master__ikon__icon}>
                <a
                  href={url2}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  {" "}
                  <i className="fab fa-linkedin-in" title="Linkedin"></i>
                </a>
              </div>
              <div
                className={styles.contact__master__ikon__icon}
                data-aos="fade-up"
              >
                {" "}
                <i className="fab fa-instagram" title="Instagram"></i>
              </div>
            </div>
          </div>
          <div className={styles.contact__master__box1}>
            <form
              onSubmit={onSubmit}
              className={styles.contact__master__box1__content2}
              data-aos="fade-up"
            >
              <input
                type="text"
                name="from_name"
                className={styles.contact__master__box1__content2__inputs}
                placeholder={t("header.de")}
                value={toSend.from_name}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                className={styles.contact__master__box1__content2__inputs}
                name="to_name"
                placeholder={t("header.para")}
                value={toSend.to_name}
                onChange={handleChange}
                data-aos="fade-up"
              ></input>

              {/* EMAIL */}

              {toSend.reply_to == "" ? (
                <input
                  type="text"
                  data-tip
                  data-for="hola"
                  className={styles.contact__master__box1__content2__inputs}
                  name="reply_to"
                  placeholder={t("header.email")}
                  value={toSend.reply_to}
                  onChange={handleChange}
                ></input>
              ) : (
                <input
                  type="text"
                  data-tip
                  data-for="hola"
                  className={
                    emailIsValid(toSend.reply_to)
                      ? styles.contact__master__box1__content2__inputs
                      : styles.contact__master__box1__content2__inputs2
                  }
                  name="reply_to"
                  placeholder={t("header.email")}
                  value={toSend.reply_to}
                  onChange={handleChange}
                ></input>
              )}

              {(toSend.reply_to != "") & !emailIsValid(toSend.reply_to) ? (
                <ReactTooltip id="hola" type="warning">
                  Email example: jhon77@email.com
                </ReactTooltip>
              ) : null}

              {/* MESSAGE */}

              <textarea
                className={styles.contact__master__box1__content2__text}
                rows="10"
                cols="50"
                data-aos="fade-up"
                name="message"
                placeholder={t("header.message")}
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
              <div
                className={styles.contact__master__box1__content2__space}
                data-aos="fade-up"
              >
                {(toSend.message != "") &
                (toSend.reply_to != "") &
                emailIsValid(toSend.reply_to) ? (
                  <button
                    type="submit"
                    className={
                      styles.contact__master__box1__content2__space__button
                    }
                  >
                    {t("header.send")}
                  </button>
                ) : (
                  <button
                    disabled={true}
                    className={
                      styles.contact__master__box1__content2__space__button2
                    }
                  >
                    {t("header.send")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
