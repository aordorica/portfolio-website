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
    // const list = JSON.parse(data)
    const display = smallScreen ? "flex" : "";
    const tabBorder = smallScreen ? `1px solid` : 'none'
    const [index, setIndex] = useState(0);

    const onTabClick = (event, newIndex) => {
        setIndex(newIndex);
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
                    <Col className='my-auto' md={1}><WorkIcon color='secondary' fontSize='large' /></Col>
                    <Col className='my-auto' md={3}><h2>Work Experience</h2></Col>
                </Row>
                <div className={classes.root}>
                    <Tabs
                        className={classes.tabs}
                        onChange={onTabClick}
                        // variant='scrollable'
                        scrollButtons='on'
                        orientation={smallScreen ? "vertical" : "horizontal"}
                        value={index}
                        centered
                    >
                        {data.roles.map((role, index) => (
                            <Tab label={role.company} key={index} />
                        ))}
                    </Tabs>

                    <ExperienceItem
                        title='Genius'
                        company='Apple'
                        description='Apple Certified Mac and iOS Technician (ACMT) with over 4+ years technical IT support experience.'
                    />
                </div>
                {children}
            </Col>
        </Row>
    );
};
