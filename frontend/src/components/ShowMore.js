import React from "react";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Row from "react-bootstrap/Row";
import { ReactComponent as DownArrowIcon } from "../../public/images/down_arrow.svg";

export default function ShowMore() {
    const handleNextSection = () => {
        const section = document.getElementById("experience");
        const style = getComputedStyle(section);
        const offset = section.offsetHeight + parseInt(style.marginTop);
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    };
    return (
        <IconButton
            onClick={handleNextSection}
            aria-label='Show More'
            size='small'
            sx={{
                ":hover": {
                    "&:hover": {
                        transform: "scale(1.3)",
                        animation: "none !important",
                    },
                },
            }}
        >
            <DownArrowIcon
                className='expandBtn bounce-top'
            />
        </IconButton>
    );
}
