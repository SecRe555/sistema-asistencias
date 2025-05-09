import {createTheme} from "@mui/material";

const COLOR_PRIMARIO = {
    light: "#e25285",
    main: "#d23a68",
    dark: "#b4224a",
  };
  const COLOR_SECUNDARIO = {
    light: "#bf42ff",
    main: "#b121ff",
    dark: "#990ee2",
  };
  
  const tema = createTheme({
    palette: {
      primary: {
        light: COLOR_PRIMARIO.light,
        main: COLOR_PRIMARIO.main,
        dark: COLOR_PRIMARIO.dark,
      },
      secondary: {
        light: COLOR_SECUNDARIO.light,
        main: COLOR_SECUNDARIO.main,
        dark: COLOR_PRIMARIO.dark,
      },
    },
    typography: {
      fontFamily: "Fira sans",
      fontSize: 16,
    },
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              color: COLOR_PRIMARIO.main,
            },
            "&:hover .MuiInputLabel-root": {
              color: COLOR_SECUNDARIO.main,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            padding: "0 10px",
            "&::before": {
              borderBottom: "2px solid var(--color_principal)"
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--color_secundario)',
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: COLOR_PRIMARIO.main,
              borderRadius: "30px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: COLOR_SECUNDARIO.main,
            },
            "& .MuiIconButton-root": {
              color: COLOR_PRIMARIO.main,
              marginRight: 1,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            textTransform: "none",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "& .MuiSelect-select": {
              color: COLOR_PRIMARIO.main,
            },
            "& .MuiSelect-icon": {
              color: COLOR_PRIMARIO.main,
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: COLOR_PRIMARIO.main,
            "&:hover": {
              color: COLOR_SECUNDARIO.main,
            },
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            "& .MuiGrid-item": {
              display: "flex",
              justifyContent: "center",
            },
          },
        },
      },
      // MuiTabPanel: {
      //   styleOverrides: {
      //     root: {
      //       "&[hidden=true]": {
      //         position: "fixed"
      //       }
      //     }
      //   }
      // },
      MuiPagination: {
        styleOverrides: {
          root: {
            "& .MuiPagination-ul": {
              display: "flex",
              justifyContent: "center"
            }
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: "Fira sans";
            font-style: normal;
            font-weight: 400;
            src: url("/assets/fonts/FiraSans-Regular.ttf");
          }
        `,
      },
    },
  },
    //   esES, corEsEs, dataGridEsEs
  );
  
  export default tema;
  