import { colors } from "./../../lib/theme";
import styled from "styled-components";
import { Backdrop as BackdropContainer } from "@material-ui/core";

export const BackdropWrapper = styled(BackdropContainer)`
  z-index: 1020 !important;
  display: block;
  background-color: ${colors.gray} !important;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.error};
`;

export const Image = styled.img`
  margin: auto;
  display: block;
`;
