import Results from "@/components/Results";
import getAllMovies from "@/hooks/getAllMovies";

export default async function Home({ searchParams }) {
  const data = await getAllMovies(searchParams);
  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
