import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 ">
      {results &&
        results.map((result) => <Card key={result.id} result={result}></Card>)}
    </div>
  );
};

export default Results;
