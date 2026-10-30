import PreviewSearch from "./shared/components/PreviewSearch";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import Gifs from "./gif/components/Gifs";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader />

      {/* Search */}
      <SearchBar />

      {/* Previous Searches */}
      <PreviewSearch />

      {/* Gifs */}
      <Gifs />
    </>
  );
};
