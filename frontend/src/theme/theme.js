import { createTheme } from '@mui/material/styles';

const primary = "#121212";
const secondary = "#f5cb5c";
const text_primary = "#fffff";
const text_secondary = "rgba(255, 255, 255, 0.7)";
const overlay = "rgba(255,255,255, 0.05)";
const secondary_light = "#f5cc5c15";

export default createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
        divider: "rgba(255, 255, 255, 0.12)",
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#191919",
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(5px)",
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    filter: "blur(5px)",
                    WebkitFilter: "blur(5px)",
                    backdropFilter: "blur(5px)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                outlined: {
                    transition: "transform 0.2s",
                    borderRadius: "10px",
                    "&:hover": {
                        borderRadius: 10,
                        transform: "translateY(10%)",
                    },
                },
                contained: {
                    transition: "transform 0.2s",
                    borderRadius: "10px",
                    "&:hover": {
                        borderRadius: 10,
                        // boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .1)",
                        transform: "translateY(10%)",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backfaceVisibility: false,
                    background: "none",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                        backgroundColor: "none",
                        background: "none",
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 400,
                    alignSelf: "end",
                    "&.Mui-selected": {
                        color: secondary,
                        backgroundColor: secondary_light,
                    },
                    "&:hover": {
                        backgroundColor: secondary_light,
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    paddingLeft: "3rem",
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: secondary,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "16px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    maskImage:
                        "linear-gradient(to bottom, black 50%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 50%, transparent 100%)",
                },
                entered: {
                    maskImage: 'none',
                    WebkitMaskImage: 'none',
                    transition: 'all 2s'
                }
            },
        },
    },
});
