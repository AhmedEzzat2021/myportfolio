import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import HashLoader from "react-spinners/HashLoader";
import AnimateLetters from "../AnimatedLetters";
import "./index.scss";

const ContactUs = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_euvz8hm", "template_zslwl7x", form.current, "-8OSWH-cTfW_FQxmj").then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message , Please try again");
      }
    );
    e.target.reset();
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <div className="container_contact">
      {loading ? (
        <div className="loaderStyle">
          <HashLoader color={"#ffd700"} loading={loading} size={80} />
        </div>
      ) : (
        <>
          <div className="content_contact">
            <div className="up_all_left">
              <div className="text-zone">
                <h1 className="title_page">
                  <AnimateLetters
                    strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                    idx={15}
                    letterClass={letterClass}
                  />
                </h1>
              </div>
              <form ref={form} onSubmit={sendEmail} className="cont_inputs">
                <p className="text_">
                  I am interested in freelance opportunities – especially ambitious or large projects. However, if you
                  have other request or question, don’t hesitate to contact me using below form either.
                </p>
                <div className="inline_inp anim_1">
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                  <input type="text" className="anim_3" name="subject" placeholder="Subject" required />
                </div>
                <div>
                  <textarea className="anim_4" placeholder="Message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn_send anim_5">
                  <span>Send</span>
                </button>
              </form>
            </div>
            <div className="map_">
              <MapContainer
                center={[30.35423667551292, 31.201842845065947]}
                zoom={10}
                style={{ width: "100vh", height: "100vh" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[30.35423667551292, 31.201842845065947]}>
                  <Popup>Hello I'm, Ahmed Ezzat and I lives here!</Popup>
                </Marker>
              </MapContainer>
              <div className="info_map">
                Ahmed Ezzat,
                <br />
                Egypt,
                <br />
                Al Qalyubia Toukh, <br />
                <span>+201014246087</span>
                <br />
                <span>ahmedezat20900@gmail.com</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ContactUs;
