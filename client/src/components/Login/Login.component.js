import React from "react";
import { Button } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./styles.css";

export const Login = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="text-center">
      {!isAuthenticated && (
        <Button id="login-button"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Button>
      )}
      
      {isAuthenticated &&
      (<Redirect to="/dashboard" />)
      }
      {isAuthenticated && 
      <span className="text-center">
            <Button onClick={() => logout()}>Log out</Button>
            <Link to="/dashboard"><Button>Home</Button></Link>&nbsp;
        </span>
      }
    </div>
  );
};
