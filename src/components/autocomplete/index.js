import React from "react";
import {
  Container,
  List,
  Item,
  Entry,
  Word,
  Definition,
} from "./styles/autocomplete";

export default function AutoComplete({ matches, children, ...restProps }) {
  return (
    <Container matches={matches} {...restProps}>
      {children}
    </Container>
  );
}

AutoComplete.Matches = function AutoCompleteMatches({
  matches,
  children,
  ...restProps
}) {
  return (
    <List matches={matches} {...restProps}>
      {children}
    </List>
  );
};

AutoComplete.Item = function AutoCompleteItem({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Entry>{children}</Entry>
    </Item>
  );
};

AutoComplete.Word = function AutoCompleteWord({ children, ...restProps }) {
  return <Word {...restProps}>{children}</Word>;
};

AutoComplete.Definition = function AutoCompleteDefinition({
  children,
  ...restProps
}) {
  return <Definition {...restProps}>{children}</Definition>;
};
