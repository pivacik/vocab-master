import styled from "styled-components/macro";

export const Container = styled.div`
  width: 47%;
  @media (max-width: 760px) {
    width: auto;
  }
`;

export const List = styled.ul`
  clear: left;
  width: 100%;
  position: relative;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Text = styled.h2`
  margin: 0 0 10px 0;
  font-weight: 600;
  font-size: 18px;
`;

export const Item = styled.li`
  margin: 1em 0;
  clear: both;
`;

export const Sentence = styled.p`
  font-size: 0.85em;
  line-height: 175%;
`;

export const Message = styled.p`
  text-align: center;
  padding: 40px 0;
  color: #bbbbbb;
  font-style: italic;
`;
export const Source = styled.span`
  float: left;
  font-size: 12px;
  text-decoration: none;
  color: #bbbbbb;
  font-style: italic;
  display: block;
  margin: 0.25em 0 1em 0;
`;
