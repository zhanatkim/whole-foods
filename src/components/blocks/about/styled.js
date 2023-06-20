import styled from "styled-components";
import bgImage from "/src/assets/about-bg.svg";
export const AboutWrapper = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.blueColor};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-left: ${(props) => props.theme.indent};
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 76px;
    right: ${(props) => props.theme.indent};
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: #c4e2ff;
    z-index: 0;
  }

  &::after {
    position: absolute;
    content: "";
    bottom: -64px;
    right: 177px;
    width: 273px;
    height: 607px;
    z-index: 1;
    background: no-repeat url(${bgImage});
  }
`;
export const AboutInner = styled.div`
  box-sizing: border-box;
  max-width: 637px;
  padding: 0;
  min-width: 637px;
  z-index: 5;
`;

export const AboutText = styled.p`
  display: block;
  width: 637px;
  padding: 0;
  padding-top: 24px;
  margin: 0;
`;
