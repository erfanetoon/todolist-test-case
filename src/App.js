import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./lib/theme";
import SiteLayout from "./routes/site";
import BackdropContainer from "./components/backdrop/backdrop";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { setInitialState } from "./lib/redux/events/action";

const App = ({ splash, setInitialState }) => {
  React.useEffect(() => {
    if (splash) {
      setTimeout(() => {
        setInitialState();
      }, 2000);
    }
  }, [setInitialState, splash]);

  return (
    <Router>
      <Theme>
        <ToastContainer />
        <BackdropContainer status={splash} />
        <SiteLayout />
      </Theme>
    </Router>
  );
};

const MapStateToProps = (state) => ({
  splash: state.events.splash,
});

export default connect(MapStateToProps, { setInitialState })(App);
