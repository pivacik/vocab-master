import React from "react";
import {
  Container,
  List,
  Text,
  Item,
  Source,
  Sentence,
} from "./styles/usage-examples";

export default function UsageExamples({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

UsageExamples.List = function UsageExamplesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
UsageExamples.Text = function UsageExamplesText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

UsageExamples.Item = function UsageExamplesText({
  sentence,
  source,
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Sentence>{sentence}</Sentence>
      <Source>{source}</Source>
    </Item>
  );
};
