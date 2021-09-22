import React from "react";
import { Col, Row } from "react-bootstrap";
import AboutIcon from "@mui/icons-material/PersonOutlined";
import data from "../Data/personInfo.json";
import { Collapse } from "@mui/material";
import profile from "../../public/images/profile.jpg";
import { CardMedia } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default ({ screenSize }) => {
    const [expanded, setExpanded] = useState(false);
    const handleCollapse = () => {
        setExpanded(!expanded);
    };
    return (
        <Row
            className='about align-content-center justify-content-center'
        >
            <Col xl={6} style={{ zIndex: 101 }}>
                <Row className='justify-content-center text-center my-auto'>
                    <Col className='about_icon p-0' md={1}>
                        <AboutIcon
                            color='secondary'
                            sx={{ fontSize: "4rem" }}
                        />
                    </Col>
                    <Col className='align-self-center mx-0' md={4}>
                        <h2 className='title m-0'>About Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} className='about-profile p-5'>
                        <CardMedia
                            component='img'
                            image={profile}
                            className='profile'
                            style={{ maxWidth: screenSize ? "25vh" : "20vh" }}
                        />
                    </Col>
                    <Col xl={8} className='about-sum'>
                        {!expanded && <p>{data.about}</p>}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleCollapse}
                            aria-expanded={expanded}
                            aria-label='show more'
                        >
                            <ExpandMoreIcon fontSize='large' color='secondary' />
                        </ExpandMore>
                        <Collapse in={expanded} timeout='auto' unmountOnExit>
                            {data.about}
                        </Collapse>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
