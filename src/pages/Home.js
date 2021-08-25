import React, { useState } from "react";
import Search from "../components/search";

//Components
import { HeaderContainer } from "../containers/header";
import { AutoCompleteContainer } from "../containers/autocomplete";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [word, setWord] = useState("dictionary");
  const [correction, setCorrection] = useState(false);

  return (
    <>
      <HeaderContainer />
      <Search>
        <Search.Frame>
          <Search.Text>Look up a word, learn it forever.</Search.Text>
          <Search.SearchField
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Search.Helpers>
            <Search.RandomButton>Random Word</Search.RandomButton>
          </Search.Helpers>
        </Search.Frame>
      </Search>
      <AutoCompleteContainer searchTerm={searchTerm} setWord={setWord} />
      <DefinitionContainer word={word} />
    </>
  );
};

export default Home;
