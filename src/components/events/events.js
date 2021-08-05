import { Grid, Box } from "@material-ui/core";
import React from "react";
import Form from "../form/form";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import Event from "./../event/event";
import { FabWrapper } from "./styles";

const Events = ({ allEvents }) => {
  const [open, setOpen] = React.useState(false);
  const [days, setDays] = React.useState([]);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    if (allEvents.length > 0) {
      var days = [];
      const data = allEvents.sort(function (a, b) {
        return new Date(a.time) - new Date(b.time);
      });
      days.push(data[0].time);
      data.map((item) => (item.time !== days[0] ? days.push(item.time) : null));
      setDays(days);
      setEvents(data);
    }
  }, [allEvents, allEvents.length]);

  const handleView = () => {
    setOpen(true);
  };

  const checkToday = (date) => {
    const date2 = new Date();
    if (date === date2.toDateString()) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      {events.length < 1 && (
        <Box textAlign="center" mb={4}>
          You don't have any events
        </Box>
      )}
      {days.map((item, index) => (
        <Box key={index} mb={8}>
          <Box
            key={index}
            color={checkToday(item) ? "red" : "#000"}
            fontWeight="bold"
            fontSize={17}
            mb={2}
          >
            {checkToday(item) ? "Today" : item}
          </Box>
          <Grid container spacing={6}>
            {events.map(
              (item2) =>
                item2.time === item && (
                  <Grid key={item2.id} item xs={12} sm={6} md={4}>
                    <Event data={item2} type="edit" />
                  </Grid>
                )
            )}
          </Grid>
        </Box>
      ))}
      <FabWrapper
        onClick={() => handleView()}
        size="medium"
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </FabWrapper>
      {open && <Form open={open} setOpen={setOpen} type="add" />}
    </div>
  );
};

const MapStateToProps = (state) => ({
  allEvents: state.events.events,
});

export default connect(MapStateToProps)(Events);
