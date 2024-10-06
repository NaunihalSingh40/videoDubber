import { titleData } from "./title";


export const getTitleForPath = (path) => {
  const match = titleData.find((item) => item.path === path);
  return match ? match.title : "Default Title"; // Return a default title if no match found
};
