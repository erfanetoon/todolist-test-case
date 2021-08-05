import React from "react";
import { BackdropWrapper, Title, Image } from "./styles";

const Backdrop = ({ status }) => {
  return (
    <BackdropWrapper open={status}>
      <div>
        <Image src="/image/splash.png" width={156} alt="splash-icon" />
        <Title>Awesome Calendar</Title>
      </div>
    </BackdropWrapper>
  );
};

export default Backdrop;
