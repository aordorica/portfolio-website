import React from "react";
import {useState} from 'react'
import { Link } from "react-router-dom";
import projects from "../Data/projects.json";
import { Paper, Card, useMediaQuery, CardMedia } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import ProjectItem from "./ProjectItem";
import { ImageList, ImageListItem } from "@mui/material";
import { useTheme } from "@mui/styles";

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || "xs"
    );
}

const ProjectThumbnail = ({ name, github, description, language }) => {
    return (
        <div>
            <h3>{name}</h3>    
            <p>{language}</p>
            <Link to={`/portfolio/${name}`}>View Project</Link>
        </div>
    )   
}


const PortfolioPage = () => {
    const cols = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
    };

    return (
        <div>
            <Header />
            <Container fluid id='portfolio' className='section'>
                <Row>
                    <Col className='align-content-center'>
                        <Row className='text-center my-4'>
                            <h3>Projects</h3>
                        </Row>
                        <ImageList cols={cols[useWidth()]}>
                            {projects.map((project, index) => (
                                <Card
                                    elevation={5}
                                    className='m-3'
                                    key={index}
                                    style={{ borderRadius: "20px" }}
                                >
                                    <ImageListItem
                                        sx={{
                                            transition: 'all 0.5s ease-in-out',
                                            ":hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    >
                                        <img
                                            className="image__item"
                                            src={project.thumbnail}
                                        />
                                        <div className='description__overlay'>
                                            <ProjectThumbnail {...project} />
                                        </div>
                                    </ImageListItem>
                                </Card>
                            ))}
                        </ImageList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PortfolioPage;
