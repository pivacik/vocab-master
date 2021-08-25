import React, { useEffect, useState } from "react";
import { autocompleteApi } from "../utils/api";
import { AutoComplete } from "../components";
export function AutoCompleteContainer({ searchTerm, setExtraDef, setWord }) {
  const [matches, setMatches] = useState([]);
  const handleWordPick = (item) => {
    setWord(item.word);
    setExtraDef(item.definition);
  };
  useEffect(() => {
    // if (searchTerm && matches.length) {
    //   if (matches[0].word.startsWith(searchTerm)) {
    //     setCorrection(false);
    //   } else {
    //     setCorrection(true);
    //   }
    //   setDefined(matches[0]);
    // }
    let ignore = false;
    autocompleteApi(ignore, searchTerm, setMatches);
    return () => {
      ignore = true;
    };
  }, [searchTerm]);
  return (
    <AutoComplete matches={matches.length}>
      <AutoComplete.Matches matches={matches}>
        {matches.map((item) => (
          <AutoComplete.Item
            key={item.id + item.word}
            onClick={() => handleWordPick(item)}
          >
            <AutoComplete.Word>{item.word}</AutoComplete.Word>
            <AutoComplete.Definition>{item.definition}</AutoComplete.Definition>
          </AutoComplete.Item>
        ))}
      </AutoComplete.Matches>
    </AutoComplete>
  );
}
