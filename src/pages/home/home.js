import React from "react";
import { Container, Tab, Grid } from "@material-ui/core";
import Calendar from "./../../components/calendar/calendar";
import Events from "./../../components/events/events";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Event from "./../../components/event/event";
import { TabsWrapper } from "./styles";
import TabPanel from "./../../components/tabpanel/tabpanel";

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const Home = ({ events, loading, day }) => {
  const [activeEvents, setActiveEvents] = React.useState([]);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (day) {
      const getActiveEvents = async () => {
        const data = await events.filter((item) => item.time === day);
        setActiveEvents(data);
        if (data[0]) {
          toast.info(data[0].title, {
            position: "bottom-right",
          });
        } else {
          toast.warning(`You don't have any event at ${day}`, {
            position: "bottom-right",
          });
        }
      };
      getActiveEvents();
    }
  }, [day]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabsWrapper variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Calendar" {...a11yProps(0)} />
        <Tab label="Events" {...a11yProps(1)} />
      </TabsWrapper>
      <Container fixed>
        <TabPanel value={value} index={0}>
          <Calendar />
          {activeEvents && (
            <Grid container spacing={6}>
              {activeEvents.map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Event data={item} type="view" />
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Events />
        </TabPanel>
      </Container>
    </div>
  );
};

const MapStateToProps = (state) => ({
  day: state.events.day,
  events: state.events.events,
});

export default connect(MapStateToProps)(Home);
