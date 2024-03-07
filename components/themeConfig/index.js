import {createTheme} from "@mui/material";

const primaryMain = "#f7992b";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    transition: ".5s all"
                },
                contained: {
                    width: "17rem",
                    height: "4.2rem",
                    color: "#fff",
                    fontWeight: "bold",
                    letterSpacing: 10,
                    fontSize: 16,
                    marginTop:"2.2rem",
                    '&:hover': {
                        background: "transparent",
                        color: primaryMain,
                        border: "3px solid #f7992b"
                    },
                    "@media (max-width: 600px)" : {
                        width : "13rem",
                        fontSize:14,
                        height: "3.8rem",
                    },
                },

            }
        }
    },
    typography: {
        fontFamily: "Oswald",
        h1 : {
            "@media (max-width: 1200px)" : {
                fontSize : 80
            },
            "@media (max-width: 900px)" : {
                fontSize : "4rem",
            },
            "@media (max-width: 600px)" : {
                fontSize : "2.8rem",
            },
        },
        h3: {
            fontFamily: "Oswald",
            fontWeight: "100",
            fontSize:"1.1rem",
            "@media (max-width: 600px)" : {
                fontSize : "1rem",
            },
        },
        h2 : {
            fontSize : "3rem",
            fontWeight: "900",
            "@media (max-width: 1200px)" : {
                fontSize : "2.5rem",
            },
            "@media (max-width: 900px)" : {
                fontSize : "2.2rem",
            },
        },
        h5 : {
            "@media (max-width: 600px)" : {
                fontSize : "1rem",
            }
        },
        h6 : {
            "@media (max-width: 900px)" : {
                fontSize : "0.8rem",

            },
            "@media (max-width: 600px)" : {
                fontSize : "1rem",
            }
        },
        subtitle2 : {
            "@media (max-width: 1200px)" : {
                fontSize : "0.8rem",
            },
            "@media (max-width: 600px)" : {
                marginTop: 0,
                fontSize : "0.75rem",
                lineHeight : "1.2rem",
                textAlign :"justify"
            },

            fontWeight:100,
            fontSize:"1rem",
            marginTop:"2rem"
        },
        Slideh2 : {
            fontFamily: "Oswald",
            "@media (max-width: 600px)" : {
                fontSize : "1.4rem",
                fontFamily: "Oswald",
            }
        },
        caption : {
            "@media (max-width: 1200px)" : {
                fontSize : "0.9rem",
                fontWeight : 100,
                marginTop:"0.5rem",
                lineHeight : "1.6rem",
            },
            "@media (max-width: 900px)" : {
                fontSize : "0.8rem",
                fontWeight : 100,
                marginTop:"0",
                lineHeight : "1.6rem",
            },
            "@media (max-width: 600px)" : {
                fontSize : "0.7rem",
                fontWeight : 100,
                marginTop:"-0.4rem",
                lineHeight : "1.6rem",
            },
            lineHeight : "2rem",
            fontSize : "1rem",
            fontWeight : 100,
            marginTop:"2rem",
            textAlign : "justify"
        }
    },
    palette : {
        primary : {
            main : primaryMain,
            light: '#ffff00',
        },
        secondary : {
            main: '#E0C2FF',
            light: '#F5EBFF',
            contrastText: '#47008F',
        }
    },
})

export default theme;