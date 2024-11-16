import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Slider } from "../../../ui/slider";
import { SortByType } from "../../../../types";
import { useDebounce } from "@uidotdev/usehooks";

const PriceDropdown = ({
  children,
  setSortBy,
  sortBy,
}: {
  children: React.ReactNode;
  setSortBy: (value: SortByType) => void;
  sortBy: SortByType;
  }) => {
  const [range, setRange] = useState([
    sortBy.priceFrom || 0,
    sortBy.priceTo || 10000,
  ]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(range, 1000);
  const handleRangeChange = (value: number[]) => {
    setRange(value);
  };

  useEffect(() => {
    setRange([sortBy.priceFrom || 0, sortBy.priceTo || 10000]);
  }, [sortBy.priceFrom, sortBy.priceTo]);

  useEffect(() => {
    const searchHN = async () => {
      setIsSearching(true);
      if (debouncedSearchTerm) {
        setSortBy({ ...sortBy, priceFrom: range[0], priceTo: range[1] });
      }

      setIsSearching(false);
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="py-4 px-3 ">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            От
            <input
              className="outline-none border-t-0 border-x-0 rounded-none max-w-[60px]  border-b border-b-grey"
              value={range[0]}
              onChange={(e) => handleRangeChange([+e.target.value, range[1]])}
              type="number"
            />
            ₽
          </label>
          <label className="flex items-center gap-2">
            До
            <input
              className="outline-none border-t-0 border-x-0 rounded-none max-w-[60px]  border-b border-b-grey"
              value={range[1]}
              onChange={(e) => handleRangeChange([range[0], +e.target.value])}
              type="number"
            />
            ₽
          </label>
        </div>
        <Slider
          className="mt-4 max-w-28 mx-auto"
          max={range[1]}
          min={range[0]}
          step={1}
          value={range}
          onValueChange={handleRangeChange}
          minStepsBetweenThumbs={2}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PriceDropdown;
