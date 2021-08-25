import styled from "styled-components/macro";

export const Container = styled.div`
  top: 0;
  position: relative;
  width: 100%;
  z-index: 1;
  text-align: center;
  height: 247px;
  opacity: 1;
  visibility: visible;
  background: url("/images/misc/header.svg") 50% 50% no-repeat;

  background-size: cover, cover;
  transition: 0.5s all;

  @media (max-width: 760px) {
    font-size: 80%;
  }
`;

export const Text = styled.h1`
  font-weight: 300;
  font-size: 2em;
  color: #fff;
  margin: 0 0 15px 0;

  @media (max-width: 848px) {
    font-size: 1.8em;
  }

  @media (max-width: 345px) {
    font-size: 1.5em;
  }
`;

export const Frame = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 0 2em 0;
`;

export const SearchField = styled.div`
  position: relative;
  height: 40px;
  display: block;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 2em;
  box-shadow: 0 0 0px 5px rgb(0 0 0 / 25%);
  width: 500px;
  margin: auto;

  &:before {
    content: "start typing to look up a word...";
    z-index: 0;
    color: #ccc;
    position: absolute;
    left: 36px;
    top: 50%;
    margin-top: -0.6em;
    opacity: ${({ searchTerm }) => (searchTerm ? 0 : 1)};
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:after {
    content: "";
    background-image: url("/images/icons/dict-off.png");
    background-size: 16px 16px;
    filter: invert(50%);
    width: 16px;
    height: 16px;
    z-index: 1;
    color: #dfd6d6;
    position: absolute;
    left: 14px;
    top: 50%;
    margin-top: -0.55em;
    font-family: "SSStandard";
    font-size: 15px;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
  @media (max-width: 365px) {
    width: 95%;
  }
`;

export const Autocomplete = styled.div``;

export const Helpers = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px auto 0;
`;
export const RandomIcon = styled.div`
  background: url("/images/icons/random-icon.svg");
  display: inline-block;
  height: 12px;
  width: 17px;
  margin-right: 5px;
`;
export const RandomButton = styled.a`
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;
export const RandomText = styled.p`
  display: inline-block;
`;

export const Input = styled.input`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  color: #000;
  outline: none;
  padding-left: 35px;
  font-size: 18px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  user-select: text;
  border-radius: 20px;
  &:focus-visible {
    outline-offset: 0px;
  }
`;
