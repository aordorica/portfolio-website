import React from 'react';
import ExpandMoreTwoTone from "@material-ui/icons/ExpandMoreTwoTone";
import IconButton from '@material-ui/core/IconButton';
import Row from 'react-bootstrap/Row';

export default function ShowMore() {
    return (
        <Row className='mt-0 align-self-start align-self-md-center'>
            <IconButton aria-label='Show More'>
                <ExpandMoreTwoTone
                    className='expandBtn'
                    color='secondary'
                    fontSize='inherit'
                />
            </IconButton>
        </Row>
    );
}
