import React, { useState, useEffect } from "react";
import axios from "axios";
import { Definition } from "../components";
import { ExamplesContainer } from "./usage-examples";
import { posColor } from "../utils/switch-pos-color";

export function DefinitionContainer({ word, extraDef }) {
  const [data, setData] = useState({
    short: "",
    long: "",
    isLoading: false,
  });

  const [details, setDetails] = useState({
    phonetic: "",
    phonetics: "",
    meanings: [],
    isLoading: false,
  });
  useEffect(() => {
    let ignore = false;
    setData({ ...data, isLoading: true });
    setDetails({ ...details, isLoading: true });

    async function fetchData() {
      const result = await axios(
        `https://vocabulary-api-pivacik.vercel.app/word/${word}`
      );
      if (!ignore) {
        setData({
          short: result.data.short,
          long: result.data.long,
          isLoading: false,
        });
      }
    }
    async function fetchDetailedData() {
      try {
        const result = await axios(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!ignore) {
          console.log(result.data[0]);
          setDetails({
            ...result.data[0],
            isLoading: false,
          });
        }
      } catch (err) {
        setDetails({
          phonetic: "",
          phonetics: [],
          meanings: [],
          isLoading: false,
        });
      }
    }

    fetchData();
    fetchDetailedData();
    return () => {
      ignore = true;
    };
  }, [word]);

  return (
    <Definition>
      <Definition.Frame>
        <Definition.DefArea>
          <Definition.Word>
            {word}
            {details.phonetic && (
              <>
                <Definition.AudioButton
                  src={details.phonetics && details.phonetics[0].audio}
                >
                  [{details.phonetic}]
                </Definition.AudioButton>
              </>
            )}
          </Definition.Word>
          <Definition.Short>{data.short}</Definition.Short>
          <Definition.Long>{data.long}</Definition.Long>
          <Definition.List>
            <Definition.Label>
              Definition of <i>{word}</i>
            </Definition.Label>
            <Definition.Meanings>
              {details.meanings.length ? (
                details.meanings.map((meaning) =>
                  meaning.definitions.map((def) => (
                    <Definition.Item key={def.definition}>
                      <Definition.PosIcon
                        pos={posColor(meaning.partOfSpeech || "noun")}
                      >
                        {meaning.partOfSpeech || "noun"}
                      </Definition.PosIcon>
                      {def.definition}
                      {def.example && (
                        <Definition.Example>{def.example}</Definition.Example>
                      )}
                      {def.synonyms.length ? (
                        <>
                          <span>synonyms:</span>
                          {def.synonyms.map((synonym, index) => (
                            <Definition.Synonym index={index} key={synonym}>
                              {synonym}
                            </Definition.Synonym>
                          ))}
                        </>
                      ) : null}
                    </Definition.Item>
                  ))
                )
              ) : (
                <Definition.Item>
                  <Definition.PosIcon pos={posColor("noun")}>
                    noun
                  </Definition.PosIcon>
                  {extraDef}
                </Definition.Item>
              )}
            </Definition.Meanings>
          </Definition.List>
        </Definition.DefArea>
        <ExamplesContainer word={word}></ExamplesContainer>
      </Definition.Frame>
    </Definition>
  );
}
