import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { IconButton} from '@material-ui/core';
import { GitHub, Email, LinkedIn } from '@material-ui/icons';

const SocialLinks = () => {
    return (
        <Row>
            <Col className='text-center'>
                <ButtonGroup>
                    <IconButton
                        href='http://linkedin.com/in/alanodev/'
                        color='primary'
                    >
                        <LinkedIn fontSize='inherit' />
                    </IconButton>
                    <IconButton
                        href='https://github.com/aordorica'
                        color='primary'
                    >
                        <GitHub fontSize='inherit' />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            history.push("/contact");
                        }}
                        color='primary'
                    >
                        <Email className='emailBtn' fontSize='inherit' />
                    </IconButton>
                </ButtonGroup>
            </Col>
        </Row>
    );
}

export default SocialLinks;