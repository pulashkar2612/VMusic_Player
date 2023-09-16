import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Prashant Pulashkar</h3>
                        <p>MERN Full Stack developer  @ TCS</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Full Stack developer with 3+ years of experience in extensive website development, creating backend and integrating with frontend as well.</p>
                    <p>Graduated in 2020 from IIIT Bhubaneswar in Electronics and Tele Communication stream.</p>
                    <p> Determined to work with a prodcut based IT organisation or a large scale StartUp to implement things fromm sratch and tajke full responsibility of my work.</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href="#"  >
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href="#" >
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href="#" >
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href="#" >
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href="#"  >
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;