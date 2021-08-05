import { colors } from "./../../lib/theme";
import styled from "styled-components";
import Close from "@material-ui/icons/Close";
import CalendarContainer from "react-calendar";

export const CalendarWrapper = styled(CalendarContainer)`
  margin: auto;
  border-radius: 16px;
  border: none;
  margin-bottom: 32px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;

export const CloseButton = styled(Close)`
  color: #464646;
  cursor: pointer;
  transition: all 0.5s !important;
  &:hover {
    color: ${colors.error};
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 2px solid ${colors.primary};
`;

export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 2px solid ${colors.primary};
`;
