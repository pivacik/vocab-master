import React from "react";
import {
  Container,
  Picture,
  Logo,
  Tabs,
  Tab,
  Group,
  Button,
  Frame,
  Main,
  TabText,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Main = function HeaderMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Tabs = function HeaderTabs({ children, ...restProps }) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

Header.Tab = function HeaderTab({ active, src, children, ...restProps }) {
  return (
    <Tab active={active} {...restProps}>
      <TabText src={src} active={active}>
        {children}
      </TabText>
    </Tab>
  );
};

Header.LogInInfo = function HeaderLogInInfo({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
