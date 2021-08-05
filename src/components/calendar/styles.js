import styled from "styled-components";
import CalendarContainer from "react-calendar";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

export const CalendarWrapper = styled(CalendarContainer)`
  margin: auto;
  border-radius: 16px;
  border: none;
  margin-bottom: 32px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;
