import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import me from "../assets/images/me.jpg";

const Home = () => {
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
            <div>
              <img src={me} className="image-left" />
              <h1>Présentation</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                dignissimos neque dolor at distinctio? Corrupti sunt dicta iure
                aspernatur, autem ducimus, veritatis similique harum vitae amet
                eligendi voluptates nemo? Nulla! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas dignissimos neque dolor at
                distinctio? Corrupti sunt dicta iure aspernatur, autem ducimus,
                veritatis similique harum vitae amet eligendi voluptates nemo?
                Nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas dignissimos neque dolor at distinctio? Corrupti sunt dicta
                iure aspernatur, autem ducimus, veritatis similique harum vitae
                amet eligendi voluptates nemo? Nulla!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                dignissimos neque dolor at distinctio? Corrupti sunt dicta iure
                aspernatur, autem ducimus, veritatis similique harum vitae amet
                eligendi voluptates nemo? Nulla! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas dignissimos neque dolor at
                distinctio? Corrupti sunt dicta iure aspernatur, autem ducimus,
                veritatis similique harum vitae amet eligendi voluptates nemo?
                Nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas dignissimos neque dolor at distinctio? Corrupti sunt dicta
                iure aspernatur, autem ducimus, veritatis similique harum vitae
                amet eligendi voluptates nemo? Nulla!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                dignissimos neque dolor at distinctio? Corrupti sunt dicta iure
                aspernatur, autem ducimus, veritatis similique harum vitae amet
                eligendi voluptates nemo? Nulla! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas dignissimos neque dolor at
                distinctio? Corrupti sunt dicta iure aspernatur, autem ducimus,
                veritatis similique harum vitae amet eligendi voluptates nemo?
                Nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas dignissimos neque dolor at distinctio? Corrupti sunt dicta
                iure aspernatur, autem ducimus, veritatis similique harum vitae
                amet eligendi voluptates nemo? Nulla!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                dignissimos neque dolor at distinctio? Corrupti sunt dicta iure
                aspernatur, autem ducimus, veritatis similique harum vitae amet
                eligendi voluptates nemo? Nulla! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas dignissimos neque dolor at
                distinctio? Corrupti sunt dicta iure aspernatur, autem ducimus,
                veritatis similique harum vitae amet eligendi voluptates nemo?
                Nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas dignissimos neque dolor at distinctio? Corrupti sunt dicta
                iure aspernatur, autem ducimus, veritatis similique harum vitae
                amet eligendi voluptates nemo? Nulla!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                dignissimos neque dolor at distinctio? Corrupti sunt dicta iure
                aspernatur, autem ducimus, veritatis similique harum vitae amet
                eligendi voluptates nemo? Nulla! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quas dignissimos neque dolor at
                distinctio? Corrupti sunt dicta iure aspernatur, autem ducimus,
                veritatis similique harum vitae amet eligendi voluptates nemo?
                Nulla! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas dignissimos neque dolor at distinctio? Corrupti sunt dicta
                iure aspernatur, autem ducimus, veritatis similique harum vitae
                amet eligendi voluptates nemo? Nulla!
              </p>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default Home;
