import { createMuiTheme } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: orange
  }
});
