import React from 'react';
import ExpandMoreTwoTone from "@material-ui/icons/ExpandMoreTwoTone";
import IconButton from '@material-ui/core/IconButton';
import Row from 'react-bootstrap/Row';

export default function ShowMore() {
    const handleNextSection = () => {
        const section = document.getElementById('experience')
        const style = getComputedStyle(section)
        const offset = section.offsetHeight + parseInt(style.marginTop)
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
    return (
        <Row className='mt-0 align-self-start align-self-md-center'>
            <IconButton onClick={handleNextSection} aria-label='Show More'>
                <ExpandMoreTwoTone
                    className='expandBtn bounce-top'
                    color='secondary'
                    fontSize='inherit'
                />
            </IconButton>
        </Row>
    );
}
