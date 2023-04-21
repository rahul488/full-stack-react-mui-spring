import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette:{
        primary:{
            main:"#1760a5",
            light:"skyBlue"
        },
        secondary:{
            main:"#15c630"
        }
    },
    breakpoints:{
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
    },
})
