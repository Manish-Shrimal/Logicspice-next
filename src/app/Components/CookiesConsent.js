"use client";
import { useEffect, useState } from "react";

const CookiePolicyModal = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted !== "yes") {
      setTimeout(() => setIsActive(true), 2000); // Show modal after 2 seconds
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "yes");
    setIsActive(false);
  };

  const handleDecline = () => {
    setIsActive(false);
  };

  return (
    isActive && (
      <div className="CookiePolicySection cookie-consent-modal active">
        <div className="CookiePolicySectionClose">
          <a href="#" className="closesection" onClick={handleDecline}>
            <img
              src="/img/cookie-close.png"
              alt="Close"
            />
          </a>
        </div>
        <div className="container-home content">
          <div className="CookiePolicyBx ContentTxt">
            <h3>Cookies Policy</h3>
            <p>
              Improve your online experience by utilizing cookies on our
              website. Gain a deeper understanding of our practices regarding
              the use of cookies for enhancing your browsing journey.{" "}
              <a
                href="https://www.logicspice.com/cookies-policies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore more details
              </a>{" "}
              about how we leverage cookies to optimize your interaction with
              our website.
            </p>
          </div>
          <div className="CookiePolicyBtnBx btns">
            <button className="btn accept" onClick={handleAccept}>
              Accept Cookies
            </button>
            <button className="btn cancel" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePolicyModal;
