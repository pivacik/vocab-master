const FETCH_WORDS = "FETCH_WORDS";

const initState = {
  shortDef: [],
  longDef: [],
  wordsList: [],
};

const wordsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        ...state,
        shortDef: action.payload.shortDef,
        longDef: action.payload.longDef,
        wordsList: action.payload.wordsList,
      };
    default:
      return { ...state };
  }
};

//ACTION
const fetchWords = (userData) => {
  return {
    type: FETCH_WORDS,
    payload: userData,
  };
};

export default wordsReducer;
