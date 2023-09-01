import Results from "@/components/Results";
import getAllMovies from "@/hooks/getAllMovies";

export const metadata = {
  title: "Movies | IMDb Clone",
  description: "This is IMDb Clone website",
};

export default async function Home({ searchParams }) {
  console.log(searchParams);
  const data = await getAllMovies(searchParams);
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
