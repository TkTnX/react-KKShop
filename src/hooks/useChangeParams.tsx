import { sortByValues } from "../contants";

export const useChangeParams = ({
  sortBy,
}: {
  sortBy: {
    sortBy: string;
    brand: string | null;
  };
}) => {
  const params = new URLSearchParams(window.location.search);
  const brand =
    sortBy.brand !== null &&
    `brand=${sortByValues.find((b) => b.value === sortBy.brand)?.name}` || "";

  const sortURL = `?sortBy=${sortBy.sortBy}&${brand}`;
  params.set("sortBy", sortBy.sortBy);
  if (brand !== "") params.set("brand", sortBy.brand || "");
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${params.toString()}`
  );

  return sortURL;
};
