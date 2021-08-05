import { colors } from "./../../lib/theme";
import styled from "styled-components";
import { Tabs } from "@material-ui/core";

export const TabsWrapper = styled(Tabs)`
  background-color: ${colors.white};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;
