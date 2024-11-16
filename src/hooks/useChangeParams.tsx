import { sortByValues } from "../contants";
import { SortByType } from "../types";

export const useChangeParams = (sortBy: SortByType) => {
  const params = new URLSearchParams(window.location.search);
  const brand =
    sortBy.brand !== null &&
    `brand=${sortByValues.find((b) => b.value === sortBy.brand)?.name}` || "";
  const priceFrom = sortBy.priceFrom && `price[from]=${sortBy.priceFrom}` || "";
  const priceTo = sortBy.priceTo && `price[to]=${sortBy.priceTo}` || "";
  const sortURL = `?sortBy=${sortBy.sortBy}&${brand}&${priceFrom}&${priceTo}`;
  params.set("sortBy", sortBy.sortBy);
  if (brand !== "") params.set("brand", sortBy.brand || "");
  if(sortBy.priceFrom) params.set("priceFrom", String(sortBy.priceFrom));
  if(sortBy.priceTo) params.set("priceTo", String(sortBy.priceTo));
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${params.toString()}`
  );

  return sortURL;
};
