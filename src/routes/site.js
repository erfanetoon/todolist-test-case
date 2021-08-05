import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home/home"));

const SiteLayout = () => {
  return (
    <React.Suspense
      fallback={
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Suspense>
  );
};

export default SiteLayout;
