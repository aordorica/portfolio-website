import createTheme from "@material-ui/core/styles/createTheme";

const secondary = "#f5cb5c";
const secondary_light = "#f5cc5c15";
const primary = "#ffff";

export default createTheme({
    palette: {
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
                paddingLeft: '3rem'
            }
        }
    },
});
