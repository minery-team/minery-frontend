import React from "react";
import Header from "../header/Header";
import styled from "styled-components";
import Breakpoints from "src/styles/breakpoints";
import media from "src/styles/media";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  ${media.xlarge} {
    width: ${Breakpoints.xlarge}px;
  }
  ${media.large} {
    width: ${Breakpoints.large}px;
  }
  ${media.small} {
    width: ${Breakpoints.small}px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export default Layout;
