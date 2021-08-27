import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${({ visibility }) => (visibility ? "257px" : 0)};
  line-height: 3em;
  color: white;
  padding: 0;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-select: none;
  -o-select: none;
  transition: 0.5s all;
  background: linear-gradient(#33526d 0%, #204362 100%);
`;

export const Item = styled.li`
  display: block;
  margin: 0;
  padding: 0 2.5%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const List = styled.ol`
  margin: 0;
  display: block;

  list-style: none;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* opacity: ${({ matches }) => (matches ? 1 : 0)}; */
  opacity: 1;
  transition: opacity 0.5s;
`;

export const Entry = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1025px;
  padding: 0;
`;

export const Word = styled.span`
  font-weight: 600;
  padding-right: 0.5rem;
`;

export const Definition = styled.span`
  opacity: 0.7;
  font-weight: 300;
  font-size: 0.9em;
`;
