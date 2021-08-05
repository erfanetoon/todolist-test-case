import styled from "styled-components";
import { colors } from "./../../lib/theme";
import Visibility from "@material-ui/icons/Visibility";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { Box } from "@material-ui/core";

export const Wrapper = styled(Box)`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  font-size: 17px;
  color: ${colors.primary};
`;

export const ViewIcon = styled(Visibility)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 19px !important;
  cursor: pointer;
  transition: all 0.5s !important;
  &:hover {
    color: ${colors.primary};
  }
`;

export const DeleteIcon = styled(Delete)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 19px !important;
  cursor: pointer;
  transition: all 0.5s !important;
  &:hover {
    color: ${colors.primary};
  }
`;

export const EditIcon = styled(Edit)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 19px !important;
  cursor: pointer;
  transition: all 0.5s !important;
  &:hover {
    color: ${colors.primary};
  }
`;
