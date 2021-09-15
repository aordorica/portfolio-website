import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import WorkIcon from "@material-ui/icons/BusinessCenterOutlined";
import { makeStyles } from "@material-ui/core/styles";
import data from "../Data/experience.json";
import ExperienceItem from "./ExperienceItem";
import { SwipeableDrawer, Paper } from "@material-ui/core";

export default ({ screenSize, children }) => {
    const display = screenSize ? "flex" : "";
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Custom styling for Tabs Selector
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            display: display,
            // height: 224
        },
        tabs: {
            borderRight: screenSize
                ? `1px solid ${theme.palette.divider}`
                : "",
            borderBottom: screenSize
                ? ""
                : `1px solid ${theme.palette.divider}`,
        },
    }));

    // create class-based styling with useStyles method
    const classes = useStyles();

    return (
        <Row
            className={"text-center tabs-container ".concat(
                screenSize ? "mx-auto align-content-center" : ""
            )}
        >
            <div className='py-5' style={{zIndex: 101}}>
                    <Col className='exp-content'>
                        <Row className='justify-content-center pb-2 pb-md-4'>
                            <Col
                                className='my-auto px-1 mx-0 text-md-end'
                                md={1}
                                xl={1}
                            >
                                <WorkIcon color='secondary' fontSize='large' />
                            </Col>
                            <Col className='text-md-start' md={4} xl={5}>
                                <h2 className='m-0'>Work Experience</h2>
                            </Col>
                        </Row>
                        <Row
                            className={classes.root.concat(
                                " justify-content-center tabs-content"
                            )}
                        >
                            <Col md={3} xl={3}>
                                <Tabs
                                    className={classes.tabs.concat(' px-0')}
                                    onChange={handleChange}
                                    variant='scrollable'
                                    scrollButtons='off'
                                    orientation={
                                        screenSize ? "vertical" : "horizontal"
                                    }
                                    value={value}
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
        
                            <Col md={8} xl={6}>
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
            </div>
        </Row>
    );
};
