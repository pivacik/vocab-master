import axios from "axios";

export const autocompleteApi = async (ignore, searchTerm, setMatches) => {
  const letters = /^[A-Za-z0-9 -]+$/;
  if (!searchTerm || !searchTerm.match(letters)) {
    if (!ignore) {
      setTimeout(() => setMatches([]), 400);
    }
    return;
  }
  try {
    const response = await axios.get(
      `https://vocabulary-api-pivacik.vercel.app/matches/${searchTerm}`
    );
    if (!ignore) setMatches(response.data);
  } catch (e) {
    console.log(e.message);
  }
};

// export const autocompleteApi = async (searchTerm, setMatches) => {
//   const letters = /^[A-Za-z0-9 -]+$/;
//   if (!searchTerm || !searchTerm.match(letters)) {
//     setMatches([]);
//     return;
//   }
//   try {
//     const response = await axios.get(
//       `https://vocabulary-api-pivacik.vercel.app/matches/${searchTerm}`
//     );
//     setMatches(response.data);
//   } catch (e) {
//     console.log(e.message);
//   }
// };
