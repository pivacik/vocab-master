import React from "react";
import SearchBanner from "../components/search-banner";
//Components
import { HeaderContainer } from "../containers/header";
// import { shortDefURL } from "../api";

const Home = () => {
  //Fetch words

  return (
    <>
      <HeaderContainer />
      <SearchBanner>
        <SearchBanner.Frame>
          <SearchBanner.Text>
            Look up a word, learn it forever.
          </SearchBanner.Text>
          <SearchBanner.SearchField />
          <SearchBanner.Helpers>
            <SearchBanner.RandomButton>Random Word</SearchBanner.RandomButton>
          </SearchBanner.Helpers>
        </SearchBanner.Frame>
      </SearchBanner>
    </>
  );
};

export default Home;
