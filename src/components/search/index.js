import React from "react";
import {
  Container,
  Input,
  Text,
  Frame,
  RandomButton,
  RandomIcon,
  RandomText,
  Helpers,
  SearchField,
  Autocomplete,
} from "./styles/search";

export default function Search({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Search.Text = function SearchText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Search.Frame = function SearchFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Search.SearchField = function SearchSearchField({
  searchTerm,
  setSearchTerm,
  handleKeyDown,
  children,
  ...restProps
}) {
  const handleInputChanges = (target) => {
    if (target.value.trim() === "") {
      target.value = target.value.trim();
    }
    setSearchTerm(target.value);
  };

  return (
    <SearchField searchTerm={searchTerm} {...restProps}>
      <Input onChange={({ target }) => handleInputChanges(target)} />
    </SearchField>
  );
};

Search.Autocomplete = function SearchAutocomplete({ children, ...restProps }) {
  return <Autocomplete {...restProps}>{children}</Autocomplete>;
};

Search.Helpers = function SearchHelpers({ children, ...restProps }) {
  return <Helpers {...restProps}>{children}</Helpers>;
};

Search.RandomButton = function SearchRandomButton({ children, ...restProps }) {
  return (
    <RandomButton {...restProps}>
      <RandomIcon />
      <RandomText>{children}</RandomText>
    </RandomButton>
  );
};
