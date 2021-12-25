import { createTheme } from "@mui/material/styles";
import { APPBAR_HEIGHT, SIDEBAR_WIDTH } from "../../utils";
import { colors } from "./colors";
import { typography } from "./typography";

const defaultTheme = createTheme({
  palette: colors,
  typography: typography,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: `calc( 100vw - ${SIDEBAR_WIDTH}px)`,
          height: APPBAR_HEIGHT + "px",
          minHeight: APPBAR_HEIGHT + "px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: APPBAR_HEIGHT + "px",
          minHeight: APPBAR_HEIGHT + "px",
        },
      },
    },
  },
});
export default defaultTheme;
