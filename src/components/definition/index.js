import React from "react";
import {
  AudioButton,
  Container,
  Frame,
  Item,
  Word,
  Short,
  Label,
  Long,
  List,
  Meanings,
  PosIcon,
  Synonym,
  DefArea,
  Example,
  ExamplesArea,
} from "./styles/definition";

export default function Definition({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Definition.Frame = function DefinitionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Definition.Word = function DefinitionWord({ children, ...restProps }) {
  return <Word {...restProps}>{children}</Word>;
};

Definition.Short = function DefinitionShort({ children, ...restProps }) {
  return <Short {...restProps}>{children}</Short>;
};

Definition.Long = function DefinitionLong({ children, ...restProps }) {
  return <Long {...restProps}>{children}</Long>;
};

Definition.DefArea = function DefinitionDefArea({ children, ...restProps }) {
  return <DefArea {...restProps}>{children}</DefArea>;
};

Definition.ExamplesArea = function DefinitionExamplesArea({
  children,
  ...restProps
}) {
  return <ExamplesArea {...restProps}>{children}</ExamplesArea>;
};

Definition.List = function DefinitionList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Definition.Label = function DefinitionLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Definition.Meanings = function DefinitionMeanings({ children, ...restProps }) {
  return <Meanings {...restProps}>{children}</Meanings>;
};
Definition.PosIcon = function DefinitionPosIcon({ children, ...restProps }) {
  return <PosIcon {...restProps}>{children}</PosIcon>;
};
Definition.Item = function DefinitionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Definition.Example = function DefinitionExample({ children, ...restProps }) {
  return (
    <Example {...restProps}>
      <i>"{children}"</i>
    </Example>
  );
};

Definition.Synonym = function DefinitionSynonym({ children, ...restProps }) {
  return <Synonym {...restProps}>{children}</Synonym>;
};

Definition.AudioButton = function DefinitionAudioButton({
  src,
  children,
  ...restProps
}) {
  const audio = new Audio(src);

  return (
    <AudioButton onClick={() => audio.play()} {...restProps}>
      {children}
    </AudioButton>
  );
};
