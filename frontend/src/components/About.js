import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import data from "../Data/personInfo.json";
import profile from "../../public/images/profile.jpg";
import { Box, Collapse, Button, CardMedia } from "@mui/material";
import AboutIcon from "@mui/icons-material/PersonOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default ({ screenSize }) => {
    const [expanded, setExpanded] = useState(false);
    const handleCollapse = () => {
        setExpanded(!expanded);
    };

    const CollapsedSum = () => (
        <div>
            <Box className='text-start'>
                <Collapse in={expanded} collapsedSize={70}>
                    {data.about}
                </Collapse>
            </Box>
            <Button
                size='large'
                onClick={handleCollapse}
                endIcon={
                    <ExpandMoreIcon
                        sx={{
                            transform: !expanded
                                ? "rotate(0deg)"
                                : "rotate(180deg)",
                            marginLeft: "auto",
                        }}
                    />
                }
            >
                Read More
            </Button>
        </div>
    );

    const ExpandSum = () => (
        <div className='text-start'>
            {data.about}
        </div>
    )

    return (
        <Row className='about align-content-center justify-content-center'>
            <Col
                xl={8}
                style={{
                    zIndex: 101,
                    width: window.innerWidth > 1920 ? "70%" : "100%",
                }}
            >
                <Row className='justify-content-center text-center my-auto'>
                    <Col className='about_icon p-0 text-md-end' md={2}>
                        <AboutIcon
                            color='secondary'
                            sx={{ fontSize: "4rem" }}
                        />
                    </Col>
                    <Col
                        className='align-self-center text-md-start mx-0'
                        md={5}
                    >
                        <h2 className='title m-0'>About Me</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xl={3} className='about-profile py-5'>
                        <CardMedia
                            component='img'
                            image={profile}
                            className='profile'
                            style={{ maxWidth: screenSize ? "25vh" : "20vh" }}
                        />
                    </Col>
                    <Col
                        xl={6}
                        className='about-sum text-center align-self-center'
                    >
                        {screenSize ? <ExpandSum /> : <CollapsedSum />}
                    </Col>
                    <Row>
                        {data.skills.map((item) => {
                            <Col sm={6}>
                                <p>{item}</p>
                            </Col>;
                        })}
                    </Row>
                </Row>
            </Col>
        </Row>
    );
};
