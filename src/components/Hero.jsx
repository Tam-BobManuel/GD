import React from "react";
import  HeroImg from './HeroImg';
function Hero() {
  return (
    <div className="HeroSection">
        <div className="HeroText">
            <h1>Classy Attires for Men</h1>
            <p>Fashion never sleeps, Shop or Customize your fit to taste.</p>
            <div className="Buttons">
                <button>Shop now</button>
                <button>Customize fit</button>
            </div>
        </div>
        <div className="HeroImg"><HeroImg /></div>
    </div>
  );
}

export default Hero;