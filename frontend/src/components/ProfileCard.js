import React from "react";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import profile from "../../assets/images/profile.jpg";

const ProfileCard = () => (
    <div class='container'>
        <div class='row'>
            <div class='col-sm-3'>Level 1: .col-sm-3</div>
            <div class='col-sm-9'>
                <div class='row'>
                    <div class='col-8 col-sm-6'>Level 2: .col-8 .col-sm-6</div>
                    <div class='col-4 col-sm-6'>Level 2: .col-4 .col-sm-6</div>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileCard;
