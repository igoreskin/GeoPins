import React, { useContext } from "react";
import { GoogleLogout } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";

import Context from '../../context';

const Signout = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const onSignout = () => {
    dispatch({ type: "SIGNOUT_USER" });
    console.log("Signed out user");
  }

  return (
    < GoogleLogout
      onLogoutSucces={onSignout}
      render={({ onClick }) => ( // for some reason it doesn't respond to onClick 
        // <span className={classes.root} onClick={onClick}>
        <span className={classes.root} onClick={onSignout}>
          <Typography
            variant="body1"
            className={classes.buttonText}
          >
            Sign Out
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon} />
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);
