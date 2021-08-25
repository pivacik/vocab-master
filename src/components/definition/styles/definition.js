import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  font-size: 15px;
  padding-top: 30px;
`;

export const Frame = styled.div`
  max-width: 1025px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Word = styled.h1`
  margin: 0 0 10px 0;
  letter-spacing: 0px;
  text-transform: none;
  display: block;
  width: 100%;
  color: #00578a;
  font-family: Merriweather, Impact, serif;
  font-size: 38px;
  font-weight: bold;
`;
export const Short = styled.p`
  margin: 0.5em 0 1em 0;
  line-height: 175%;
  font-size: 18px;
`;
export const Long = styled.p`
  font-size: 14px;
  margin-bottom: 1.5em;
  margin: 0.5em 0 1em 0;
  line-height: 175%;
`;

export const List = styled.div`
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%), 0 2px 3px 0 rgb(0 0 0 / 10%);
  font-size: 14px;
  margin-bottom: 40px;
  padding-right: 20px;
  padding-bottom: 1px;
  line-height: 160%;
`;

export const Label = styled.p`
  background-color: #be6dcf;
  font-weight: normal;
  color: #fff;
  font-size: 18px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  margin: 5px 0 10px 0;
  padding: 0 19px 0 8px;
  position: relative;
  clip-path: polygon(0 0, 0 100%, 96% 100%, 100% 0);
`;
export const DefArea = styled.div`
  width: 50%;
`;
export const ExamplesArea = styled.div`
  width: 47%;
`;

export const Meanings = styled.ol`
  padding-inline-start: 30px;
`;
export const Item = styled.li`
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const PosIcon = styled.span`
  display: inline-block;
  font-size: 14px;
  height: 24px;
  border-radius: 12px;
  border-style: solid;
  border-width: 1px;
  padding: 0 8px;
  color: ${({ pos }) => (pos ? pos : "#0fa646")};
  border-color: ${({ pos }) => (pos ? pos : "#0fa646")};
  margin-right: 5px;
`;

export const Example = styled.p`
  margin: 10px 0 10px 50px;
`;

export const Synonym = styled.p`
  margin-left: 6rem;
  color: rgb(0, 37, 159);
`;
