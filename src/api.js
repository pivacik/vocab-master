//Url shows words suggestions based on passing word
const suggest_url = "https://vocabulary.vercel.app/words/";
const nice_defenition_url = "https://vocabulary.vercel.app/word/";

const defenition_url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

// const Reverso = require("reverso-api");
// const reverso = new Reverso();
const word = "cat";

export const wordsListURL = () => `${suggest_url}${word}`;
export const shortDefURL = () => `${nice_defenition_url}${word}`;
export const longDefURL = () => `${defenition_url}${word}`;
