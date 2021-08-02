import axios from "axios";
import { shortDefURL, longDefURL, wordsListURL } from "../api";

//Action creator
const FETCH_WORDS = "FETCH_WORDS";

export const loadWords = () => async (dispatch) => {
  //Fetch axios
  let wordsList = await axios.get(wordsListURL());
  let shortDefenition;
  let longDefenition;
  try {
    shortDefenition = await axios.get(shortDefURL());
    longDefenition = await axios.get(longDefURL());
  } catch (e) {
    console.log(e);
  }

  dispatch({
    type: FETCH_WORDS,
    payload: {
      shortDef: shortDefenition.data.data,
      longDef: longDefenition.data,
      wordsList: wordsList.data.data,
    },
  });
};
