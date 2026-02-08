import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import mersh1 from "../assets/mershandises/1.jpg";
import mersh2 from "../assets/mershandises/2.jpg";
import mersh3 from "../assets/mershandises/3.jpg";
import mersh4 from "../assets/mershandises/4.jpg";
import mersh5 from "../assets/mershandises/5.jpg";
import mersh6 from "../assets/mershandises/6.jpg";

const items = [
  { img: mersh1, name: "Bowie", price: "350 ₪" },
  { img: mersh2, name: "Chasse", price: "450 ₪" },
  { img: mersh3, name: "Raté", price: "200 ₪" },
  { img: mersh4, name: "Olivier", price: "250 ₪" },
  { img: mersh5, name: "Projet sabre", price: "450 ₪" },
  { img: mersh6, name: "Dernier projet", price: "500 ₪" },
];

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
              {items.map((item, i) => (
                <div className="mershandise" key={i}>
                  <img src={item.img} className="image-mersh" alt={item.name} />
                  <h1>{item.name}</h1>
                  <h1>{item.price}</h1>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default Shop;
