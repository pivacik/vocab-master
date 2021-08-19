import React, { useState } from "react";
import { Header } from "../components";
import logo from "../logo.png";
export function HeaderContainer() {
  const [category, setCategory] = useState("learn");

  return (
    <Header>
      <Header.Frame>
        <Header.Main>
          <Header.Logo src={logo} />
          <Header.LogInInfo>
            <Header.Button>Log in</Header.Button>
            <Header.Button backgroundColor={"#4db538"}>Sign up</Header.Button>
          </Header.LogInInfo>
        </Header.Main>
        <Header.Tabs>
          <Header.Tab
            active={category === "learn" ? "on" : "off"}
            onClick={() => setCategory("learn")}
            src="play"
          >
            Learn
          </Header.Tab>
          <Header.Tab
            active={category === "dict" ? "on" : "off"}
            onClick={() => setCategory("dict")}
            src="dict"
          >
            Dictionary
          </Header.Tab>
          <Header.Tab
            active={category === "lists" ? "on" : "off"}
            onClick={() => setCategory("lists")}
            src="lists"
          >
            Vocabulary Lists
          </Header.Tab>
        </Header.Tabs>
      </Header.Frame>
    </Header>
  );
}
