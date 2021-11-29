import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
import fire from "../../Fire";
export const PrivateRoute = (props) => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const { component: Component, roles, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Fragment>
            <div className="logout-btn">
              <Button onClick={() => handleLogout()}>Logout</Button>
            </div>
            <Component {...props} />
          </Fragment>
        );
      }}
    />
  );
};
