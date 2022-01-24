import React from "react";
import { Wrapper, Content } from "./Footer.styles";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <>
          <p> API powered by Spoonacular</p>
          <p> Tested by Dante</p>
        </>
      </Content>
    </Wrapper>
  );
}

export default Footer;
