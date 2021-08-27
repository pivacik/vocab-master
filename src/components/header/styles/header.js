import styled from "styled-components/macro";

export const Frame = styled.div`
  width: 95%;
  max-width: 1025px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
export const Container = styled.div`
  margin: 0 0 0 0;
  position: ${({ opacity }) => (opacity ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 700;
  min-height: 80px;
  color: #efefec;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  /* background-color: #274866f2; */
  background-color: ${({ opacity }) => (opacity ? "#274866f2" : "transparent")};
  user-select: none;
`;

export const Picture = styled.div``;

export const Logo = styled.img`
  height: 24px;
  position: absolute;
  top: 50%;
  left: 5px;
  margin-top: -12px;

  @media only screen and (max-width: 848px) {
    height: 20px;
    margin-top: -10px;
  }
`;
export const Tabs = styled.ul`
  position: absolute;
  z-index: 1;
  top: 50%;
  margin-top: -25px;
  left: 195px;
  right: 195px;
  width: auto;
  font-size: 13px;
  display: flex;

  @media (max-width: 848px) {
    position: static;
    margin-top: 0;
    font-size: 11px;
  }
`;
export const Tab = styled.li`
  display: block;
  text-align: center;
  position: relative;
  flex-shrink: 0.2;
  cursor: pointer;
  margin: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  margin: 0 auto;
  color: #fff;
  line-height: 50px;
  background-repeat: no-repeat;
  opacity: ${({ active }) => (active === "on" ? 0.95 : 0.65)};
  transition: all 0.3s;
  user-select: none;
  flex-basis: 1;
  &:hover {
    opacity: 0.95;
    box-shadow: none;
  }

  @media (max-width: 760px) {
  }
`;

export const TabText = styled.span`
  white-space: nowrap;
  display: inline-block;
  padding: 0 15px 0 42px;
  background-repeat: no-repeat;
  background-position: 16px 50%;
  background-size: 16px 16px;
  user-select: none;
  text-transform: uppercase;

  background-image: url(${({ src, active }) =>
    `/images/icons/${src}-${active}.png`});
`;
export const Group = styled.div`
  color: #fff;
  z-index: 2;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  margin-right: 35px;
`;
export const Main = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: right;

  @media (max-width: 848px) {
    line-height: 50px;
    height: 50px;
  }
`;
export const Button = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  margin: 0 5px;
  padding: 0 1.25em;
  border-radius: 3px;
  font-size: 12px;
  line-height: 2.8em;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "rgba(255, 255, 255, 0.2)"};
`;
