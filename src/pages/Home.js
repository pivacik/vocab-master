import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadWords } from "../actions/wordsAction";
//Components
import ShortDef from "../components/ShortDef";
//Styling And Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// import { shortDefURL } from "../api";

const Home = () => {
  //Fetch words
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWords());
  }, [dispatch]);

  //Get the data back
  const { shortDef, longDef, wordsList } = useSelector((state) => state.words);
  console.log(shortDef);
  return (
    <div>
      <h1>Cat</h1>
      {/* <ShortDef shortDef={shortDef} /> */}
      {longDef.map((word) => {
        return word.meanings.map((meaning) => {
          console.log(meaning);
          if (!meaning.hasOwnProperty("definitions")) return;
          return meaning.definitions.map((def) => {
            console.log(def.example);
            return (
              <div>
                <h2>{def.definition}</h2>
                {def.example && <p>{def.example}</p>}
              </div>
            );
          });
        });
      })}
    </div>
  );
};

export default Home;
