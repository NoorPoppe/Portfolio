import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Tennis from "../assets/img/interest/tennis.svg";
import Sustainablity from "../assets/img/interest/sustainiblity.svg";


const fadeImages = [Tennis, Sustainablity];

const InterestSlider = () => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} alt="bday" />
                        <p>tennnis</p>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} alt="bday" />
                        <p>art</p>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} alt="bday" />
                    </div>
                </div>
            </Fade>
        </div>
    );
};


export default InterestSlider;