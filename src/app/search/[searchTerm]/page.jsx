import Results from "@/components/Results";
import getSearchMovie from "@/hooks/getSearchMovie";
import React from "react";

export const metadata = {
  title: "Searching Movie | IMDb Clone",
  description: "This is IMDb Clone website",
};

const SearchPage = async ({ params }) => {
  const data = await getSearchMovie(params);
  const results = data.results;
  return (
    <div>
      {results && results.length == 0 && (
        <h1 className="text-center pt-6"> No Movie found</h1>
      )}
      <div>
        <Results results={results} />
      </div>
    </div>
  );
};

export default SearchPage;
