import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import mersh1 from "../assets/mershandises/1.jpg";
import mersh2 from "../assets/mershandises/2.jpg";
import mersh3 from "../assets/mershandises/3.jpg";
import mersh4 from "../assets/mershandises/4.jpg";
import mersh5 from "../assets/mershandises/5.jpg";
import mersh6 from "../assets/mershandises/6.jpg";

const Shop = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleEnter = () => {
    setIsVisible(true);
  };
  const handleExit = () => {
    setIsVisible(false);
  };
  return (
    <Parallax onEnter={handleEnter} onExit={handleExit}>
      <div className={"page"}>
        <section className={"section"}>
          <div className={`${isVisible ? "fade-in" : "fade-out"}`}>
            <div className="mershandises">
              <div className="mershandise">
                <img src={mersh1} className="image-mersh" />
                <h1>Bowie</h1>
                <h1>350 ₪</h1>
              </div>
              <div className="mershandise">
                <img src={mersh2} className="image-mersh" />
                <h1>Chasse</h1>
                <h1>450 ₪</h1>
              </div>
              <div className="mershandise">
                <img src={mersh3} className="image-mersh" />
                <h1>Raté</h1>
                <h1>200 ₪</h1>
              </div>
              <div className="mershandise">
                <img src={mersh4} className="image-mersh" />
                <h1>Olivier</h1>
                <h1>250 ₪</h1>
              </div>
              <div className="mershandise">
                <img src={mersh5} className="image-mersh" />
                <h1>Projet sabre</h1>
                <h1>450 ₪</h1>
              </div>
              <div className="mershandise">
                <img src={mersh6} className="image-mersh" />
                <h1>Dernier projet</h1>
                <h1>500 ₪</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default Shop;
