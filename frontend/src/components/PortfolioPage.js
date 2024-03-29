import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import projects from "../Data/projects.json";
import { Card, useMediaQuery } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { ImageList, ImageListItem } from "@mui/material";
import { useTheme } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Github } from "../../public/images/github.svg";
import { ReactComponent as ExternalLink } from "../../public/images/external.svg";
import { ReactComponent as PortfolioIcon } from "../../public/images/layers.svg";
import { motion } from "framer-motion";
import variants from "../config/transition";

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

const ProjectThumbnail = ({ name, github, description, language, preview }) => {
    const style = {
        icon: {
            transition: "all 0.3s ease-in-out",
            "&:hover": {
                transform: "scale(1.3)",
                animation: "none !important",
            },
        },
    };
    const history = useHistory();
    const handleOnClick = () => history.push(`/portfolio/${name}`);
    const tools = description.tools.join(", ");
    return (
        <div className='w-75'>
            <Row className='my-4 text-center'>
                <h3>{name}</h3>
            </Row>
            <Row className='my-4 proj__summary w-75 mx-auto'>
                <p className='sum__language'>{language}</p>
                <p className='sum__tools text-wrap'>{tools}</p>
            </Row>
            <Row className='text-center social__icons mx-auto'>
                <Col>
                    <IconButton
                        sx={style.icon}
                        target='_blank'
                        href={preview}
                        color='secondary'
                        title='Live Preview'
                    >
                        <SvgIcon>
                            <ExternalLink />
                        </SvgIcon>
                    </IconButton>
                </Col>
                <Col>
                    <IconButton
                        sx={style.icon}
                        target='_blank'
                        href={github}
                        color='secondary'
                        title='Github'
                    >
                        <SvgIcon>
                            <Github />
                        </SvgIcon>
                    </IconButton>
                </Col>
            </Row>
        </div>
    );
};

const PortfolioPage = () => {
    const cols = {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
    };

    return (
        <motion.div initial='initial' animate='enter' variants={variants}>
            <div>
                <NavBar />
                <Container fluid id='portfolio'>
                    <Row>
                        <Col className='align-content-center'>
                            <Row className='text-center my-4 title'>
                                <h2 className='title my-0'>
                                    Projects
                                    <SvgIcon
                                        sx={{
                                            fontSize: "1.5em",
                                            marginLeft: "1.2rem",
                                        }}
                                        viewBox='0 0 800 800'
                                    >
                                        <PortfolioIcon />
                                    </SvgIcon>
                                </h2>
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
                                                transition:
                                                    "transform 0.5s ease-in-out",
                                                ":hover": {
                                                    transform: "scale(1.1)",
                                                },
                                            }}
                                        >
                                            <img
                                                className='image__item'
                                                src={project.thumbnail}
                                            />
                                            <div className='description__overlay'>
                                                <ProjectThumbnail
                                                    {...project}
                                                />
                                            </div>
                                        </ImageListItem>
                                    </Card>
                                ))}
                            </ImageList>
                        </Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;
