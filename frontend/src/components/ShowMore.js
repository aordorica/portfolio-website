import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Row from 'react-bootstrap/Row';
import {ReactComponent as DownArrowIcon} from '../../assets/images/scroll.svg'

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
        <Row className=''>
            <IconButton onClick={handleNextSection} aria-label='Show More'>
                <SvgIcon
                    className='expandBtn bounce-top'
                    color='secondary'
                    component={DownArrowIcon}
                    viewBox='0 0 600 476.6'
                />
            </IconButton>
        </Row>
    );
}
