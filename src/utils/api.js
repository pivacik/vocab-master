import axios from "axios";

export const autocompleteApi = async (
  ignore,
  searchTerm,
  setMatches,
  setVisibility
) => {
  const letters = /^[A-Za-z0-9 -]+$/;
  if (!searchTerm || !searchTerm.match(letters)) {
    if (!ignore) {
      setTimeout(() => {
        setMatches([]);
        setVisibility(false);
      }, 400);
    }
    return;
  }
  try {
    const response = await axios.get(
      `https://vocabulary-api-pivacik.vercel.app/matches/${searchTerm}`
    );
    if (!ignore) {
      setMatches(response.data);
      setVisibility(true);
    }
  } catch (e) {
    console.log(e.message);
  }
};
