import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { IconButton} from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const SocialLinks = () => {
    return (
        <Row>
            <Col className='text-center'>
                <ButtonGroup>
                    <IconButton href='http://linkedin.com/in/alanodev/' color='primary' size="large">
                        <LinkedIn fontSize='inherit' />
                    </IconButton>
                    <IconButton href='https://github.com/aordorica' color='primary' size="large">
                        <GitHub fontSize='inherit' />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            history.push("/contact");
                        }}
                        color='primary'
                        size="large">
                        <Email className='emailBtn' fontSize='inherit' />
                    </IconButton>
                </ButtonGroup>
            </Col>
        </Row>
    );
}

export default SocialLinks;