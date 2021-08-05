import React from "react";
import { connect } from "react-redux";
import { changeDate } from "../../lib/redux/events/action";
import { Title, Wrapper, CalendarWrapper } from "./styles";

const Calendar = ({ day, changeDate }) => {
  const handleChange = async (date) => {
    await changeDate(date.toDateString());
  };

  return (
    <Wrapper>
      <Title>Pick A Day</Title>
      {day && (
        <CalendarWrapper defaultValue={new Date(day)} onChange={handleChange} />
      )}
    </Wrapper>
  );
};

const MapStateToProps = (state) => ({
  loading: state.events.loading,
  day: state.events.day,
});

export default connect(MapStateToProps, { changeDate })(Calendar);
