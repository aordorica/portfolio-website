import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import WorkIcon from "@mui/icons-material/BusinessCenterOutlined";
import data from "../Data/experience.json";
import ExperienceItem from "./ExperienceItem";

export default ({ screenSize, children }) => {
    const display = screenSize ? "flex" : "";
    const [value, setValue] = useState(0);
    const tabBorder = screenSize ? "borderRight" : "borderBottom";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Row className='h-75 w-100 align-content-center align-self-md-center justify-content-center'>
            <Col className='h-75 my-auto py-auto' sx={{border: '2px solid red'}} md={12} xl={6}>
                <Row className='justify-content-center text-center'>
                    <Col className='text-md-end' md={2}>
                        <WorkIcon color='secondary' sx={{fontSize: '4rem'}} />
                    </Col>
                    <Col className='text-md-start align-self-center' md={6}>
                        <h2 className='title m-0'>Work Experience</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center pt-5'>
                    <Col md={3}>
                        <Tabs
                            className='px-0'
                            onChange={handleChange}
                            variant='scrollable'
                            scrollButtons={false}
                            indicatorColor='secondary'
                            orientation={screenSize ? "vertical" : "horizontal"}
                            value={value}
                            sx={{
                                borderRight: 1,
                                borderColor: "divider",
                            }}
                        >
                            {data.roles.map((role, index) => (
                                <Tab
                                    className='py-0'
                                    label={role.company}
                                    key={index}
                                />
                            ))}
                        </Tabs>
                    </Col>

                    <Col md={9} style={{border: '1px solid red'}}>
                        <ExperienceItem
                            value={value}
                            title={data.roles[value].title}
                            company={data.roles[value].company}
                            dates={data.roles[value].dates}
                            description={data.roles[value].desc}
                            responsibilities={
                                data.roles[value].responsibilities
                            }
                            accomplishments={data.roles[value].accomplishments}
                        />
                    </Col>
                </Row>
                {children}
            </Col>
        </Row>
    );
};
