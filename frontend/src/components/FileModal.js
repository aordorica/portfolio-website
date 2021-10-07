import React from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { Backdrop, Box, Button } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

const FileModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button
                className='py-2'
                startIcon={<CloudDownloadOutlinedIcon />}
                variant='outlined'
                color='secondary'
                onClick={handleOpen}
            >
                Resume
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 800,
                    classes: {
                        root: {
                            // background: 'blue'
                        }
                    }
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            height: "20vh",
                            width: "350px",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "background.paper",
                            border: "2px solid #000",
                            boxShadow: 24,
                            borderRadius: "16px",
                            p: 4,
                            ":focus": {
                                outline: 'none'
                            }
                        }}
                    >
                        <Row className='text-center align-content-center h-100'>
                            <Col className='py-3 mx-1'>
                                <Button
                                    size='large'
                                    variant='outlined'
                                    color='secondary'
                                    href='https://docs.google.com/document/d/19XWiWpNBLXXYKnQzJTQc_J6e5RpHsyJ9/edit?usp=sharing&ouid=105452074128000047162&rtpof=true&sd=true'
                                >
                                    docx
                                </Button>
                            </Col>
                            <Col className='py-3 mx-1'>
                                <Button
                                    size='large'
                                    variant='outlined'
                                    color='secondary'
                                    href='https://drive.google.com/file/d/1m3VNLAvFBdrbulo6oEJ_X4pn_icokIWT/view?usp=sharing'
                                >
                                    pdf
                                </Button>
                            </Col>
                        </Row>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default FileModal;
