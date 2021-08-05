import styled from "styled-components";
import Close from "@material-ui/icons/Close";
import { colors } from "./../../lib/theme";

export const CloseButton = styled(Close)`
  color: #464646;
  cursor: pointer;
  transition: all 0.5s !important;
  &:hover {
    color: ${colors.error};
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.5);
  font-size: 19px;
`;

export const Description = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledDiv = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 16px;
  font-weight: bold;
  margin: 0 8px;
  border-radius: 8px;
`;
