export function posColor(pos) {
  switch (pos) {
    case "verb":
      return "#cd4d03";
    case "noun":
      return "#0fa646";
    case "adjective":
      return "#007bc4";
    case "adverb":
      return "#7b61ff";
    case "preposition":
      return "#0da47b";
    default:
      return "#9d01b5";
  }
}
