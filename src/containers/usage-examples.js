import React, { useState, useEffect } from "react";
import axios from "axios";
import { UsageExamples } from "../components";
import { Item } from "../components/autocomplete/styles/autocomplete";

export function ExamplesContainer({ word }) {
  const [examples, setExamples] = useState([]);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const result = await axios(
          `https://corpus.vocabulary.com/api/1.0/examples/random.json?maxResults=10&query=${word}`
        );
        if (!ignore) setExamples(result.data.result);
      } catch (err) {
        setExamples([]);
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [word]);

  return (
    <UsageExamples>
      <UsageExamples.Text>Usage Examples</UsageExamples.Text>
      <UsageExamples.List>
        {examples.sentences
          ? examples.sentences.map((sentence) => (
              <UsageExamples.Item
                key={sentence.offsets + sentence.volumeId}
                source={sentence.volume.title}
                sentence={sentence.sentence}
              ></UsageExamples.Item>
            ))
          : null}
      </UsageExamples.List>
    </UsageExamples>
  );
}
