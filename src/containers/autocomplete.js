import React, { useEffect, useState } from "react";
import { autocompleteApi } from "../utils/api";
import { AutoComplete } from "../components";
export function AutoCompleteContainer({
  visibility,
  setVisibility,
  searchTerm,
  setExtraDef,
  setWord,
}) {
  const [matches, setMatches] = useState([]);
  const handleWordPick = (item) => {
    setWord(item.word);
    setExtraDef(item.definition);
    setVisibility(false);
  };
  useEffect(() => {
    let ignore = false;
    autocompleteApi(ignore, searchTerm, setMatches, setVisibility);
    return () => {
      ignore = true;
    };
  }, [searchTerm]);
  return (
    <AutoComplete visibility={visibility}>
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
