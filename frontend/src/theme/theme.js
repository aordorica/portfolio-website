import createTheme from "@material-ui/core/styles/createTheme";

const primary = "#121212";
const secondary = "#f5cb5c";
const text_primary = "#fffff";
const text_secondary = "rgba(255, 255, 255, 0.7)";
const overlay = "rgba(255,255,255, 0.05)";
const secondary_light = "#f5cc5c15";

export default createTheme({
    palette: {
        type: "dark",
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        divider: "rgba(255, 255, 255, 0.12)",
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            outlined: {
                transition: "transform 0.2s",
                "&:hover": {
                    background: "#f5cb5c",
                    borderRadius: 3,
                    border: 0,
                    color: "white",
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                },
            },
        },
        MuiIconButton: {
            root: {
                backfaceVisibility: false,
                background: "none",
                transition: "transform 0.5s",
                "&:hover": {
                    backgroundColor: "none",
                    transform: "scale(1.3)",
                    animation: "none !important",
                },
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: primary,
            },
        },
        MuiTab: {
            root: {
                textTransform: "none",
                fontWeight: 400,
                "&$selected": {
                    color: secondary,
                    backgroundColor: secondary_light,
                },
                "&:hover": {
                    backgroundColor: secondary_light,
                },
            },
            wrapper: {
                alignItems: "flex-end",
            },
        },
        MuiTabs: {
            root: {
                paddingLeft: "3rem",
            },
        },
    },
});
