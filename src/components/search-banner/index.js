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
} from "./styles/search-banner";

export default function SearchBanner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SearchBanner.Text = function SearchBannerText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

SearchBanner.Frame = function SearchBannerFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

SearchBanner.SearchField = function SearchBannerSearchField({
  children,
  ...restProps
}) {
  return (
    <SearchField {...restProps}>
      <Input />
    </SearchField>
  );
};

SearchBanner.Autocomplete = function SearchBannerAutocomplete({
  children,
  ...restProps
}) {
  return <Autocomplete {...restProps}>{children}</Autocomplete>;
};

SearchBanner.Helpers = function SearchBannerHelpers({
  children,
  ...restProps
}) {
  return <Helpers {...restProps}>{children}</Helpers>;
};

SearchBanner.RandomButton = function SearchBannerRandomButton({
  children,
  ...restProps
}) {
  return (
    <RandomButton {...restProps}>
      <RandomIcon />
      <RandomText>{children}</RandomText>
    </RandomButton>
  );
};
