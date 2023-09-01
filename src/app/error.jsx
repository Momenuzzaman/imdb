"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Error | IMDb Clone",
  description: "This is IMDb Clone website",
};

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col mt-10">
      <p className="text-center">Some thing is wrong</p>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
