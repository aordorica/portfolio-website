import React from "react";
import { Row, Col } from "react-bootstrap";
import ShowMore from "./ShowMore";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import FileModal from "./FileModal";

export const Intro = () => {
    const history = useHistory();
    const showProjects = () => {
        history.push("/portfolio");
    };
    return (
        <Row className='mx-auto my-0 home'>
            <Col
                xl={6}
                md={12}
                className='align-self-center px-md-5 px-0 offset-xl-3'
                style={{ zIndex: 101 }}
            >
                <Row>
                    <h3 className='header_tag'>Hi, my name is</h3>
                    <h1 className='header_name mb-0'>Alan Ordorica</h1>
                    <p className='header_sub'>
                        Software Engineer. Web Developer.
                    </p>
                    <p className='header_sum mb-0'>
                        I'm a Software Engineer from Oakland, California with a
                        passion for creating technology to elevate people.
                    </p>
                </Row>
                <Row className='py-4 mx-2'>
                    <Col className='text-center'>
                        <Button
                            className='py-2'
                            color='secondary'
                            variant='contained'
                            onClick={showProjects}
                        >
                            see my work
                        </Button>
                    </Col>
                    <Col>
                        <FileModal />
                    </Col>
                </Row>
                <div className='scrollIcon'>
                    <ShowMore />
                </div>
            </Col>
        </Row>
    );
};
