

"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Certificationtabs = () => {
  const [activeTab, setActiveTab] = useState("Certifications");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li
          role="presentation"
          className={activeTab === "Certifications" ? "active" : ""}
          onClick={() => handleTabClick("Certifications")}
        >
          <Link href="#Certifications" aria-controls="home" role="tab" data-toggle="tab">
            <span className="cer-icon">
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/certification_icon.webp"
                alt="certification_icon"
              />
            </span>{" "}
            Certifications
          </Link>
        </li>
        <li
          role="presentation"
          className={activeTab === "Achievements" ? "active" : ""}
          onClick={() => handleTabClick("Achievements")}
        >
          <Link href="#Achievements" aria-controls="profile" role="tab" data-toggle="tab">
            <span className="cer-icon">
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/achivements_icon.webp"
                alt="achivements_icon"
              />
            </span>{" "}
            Achievements
          </Link>
        </li>
        <li
          role="presentation"
          className={activeTab === "Affiliates" ? "active" : ""}
          onClick={() => handleTabClick("Affiliates")}
        >
          <Link href="#Affiliates" aria-controls="messages" role="tab" data-toggle="tab">
            <span className="cer-icon">
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/affiliates_icon.webp"
                alt="affiliates_icon"
              />
            </span>{" "}
            Affiliates
          </Link>
        </li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className={`tab-pane ${activeTab === "Certifications" ? "active" : ""}`} id="Certifications">
          <ul>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/iso_logo.webp"
                alt="iOS app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/freelancertopten.webp"
                alt="freelancer web and app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/nasscom.webp"
                alt="web and app development certification"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/applancer.webp"
                alt="applancer certification"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/goodFirms.webp"
                alt="Good Firms certification"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/extract.webp"
                alt="Extract certification"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/appfutura.webp"
                alt="appfutura certification"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/TAC-iphone.webp"
                alt="topappcreators certification - logicspice"
              />
            </li>
          </ul>
        </div>
        <div role="tabpanel" className={`tab-pane ${activeTab === "Achievements" ? "active" : ""}`} id="Achievements">
          <ul>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/winner.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/bestwebdesign.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/clutch_logo.webp"
                alt="website and app development company profile - clutch"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/siliconindia.webp"
                alt="logicspice profile siliconindia"
              />
            </li>
          </ul>
        </div>
        <div role="tabpanel" className={`tab-pane ${activeTab === "Affiliates" ? "active" : ""}`} id="Affiliates">
          <ul>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/iwdro_logo.webp"
                alt="website and app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/yellow-pages-logi.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <img
                className="lazy"
                src="https://www.logicspice.com/img/images/logos/microsoftachivement.webp"
                alt="web and app development"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certificationtabs;

