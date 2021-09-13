import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import WorkIcon from "@material-ui/icons/BusinessCenter";
import { makeStyles } from "@material-ui/core/styles";
import data from "../Data/experience.json";
import ExperienceItem from "./ExperienceItem";
import { SwipeableDrawer, Paper } from "@material-ui/core";

export default ({ smallScreen, children }) => {
    const display = smallScreen ? "flex" : "";
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
            borderRight: smallScreen
                ? `1px solid ${theme.palette.divider}`
                : "",
            borderBottom: smallScreen
                ? ""
                : `1px solid ${theme.palette.divider}`,
        },
    }));

    // create class-based styling with useStyles method
    const classes = useStyles();

    return (
        <Row
            className={"text-center h-100 ".concat(
                smallScreen ? "w-75 mx-auto" : ""
            )}
        >
            <Col className='m-auto'>
                <Row className='justify-content-center pb-5'>
                    <Col className='my-auto' md={1}>
                        <WorkIcon color='secondary' fontSize='large' />
                    </Col>
                    <Col className='my-auto' md={3}>
                        <h2>Work Experience</h2>
                    </Col>
                </Row>
                <div className={classes.root}>
                    <Tabs
                        className={classes.tabs}
                        onChange={handleChange}
                        variant='scrollable'
                        scrollButtons='off'
                        orientation={smallScreen ? "vertical" : "horizontal"}
                        value={value}
                    >
                        {data.roles.map((role, index) => (
                            <Tab className='py-0' label={role.company} key={index} />
                        ))}
                    </Tabs>
                    
                    <Col>
                        <ExperienceItem
                            value={value}
                            title={data.roles[value].title}
                            company={data.roles[value].company}
                            dates={data.roles[value].dates}
                            description={data.roles[value].desc}
                            responsibilities={data.roles[value].responsibilities}
                            accomplishments={data.roles[value].accomplishments}
                        />
                    </Col>
                </div>
                {children}
            </Col>
        </Row>
    );
};
