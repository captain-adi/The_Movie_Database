import ScrollCard from "@/components/ScrollCard/ScrollCard";
import { useGetFreeWatch, useGetTrending } from "@/hooks/query";
import { useState } from "react";

function Dashboard() {
  const [timewindow, setTimeWindow] = useState("day");
  const [category, setCategory] = useState("all");
  const { data: trending } = useGetTrending({
    category,
    timeWindow: timewindow,
  });

   const [freeWatchCategory, setFreeWatchCategory] = useState("movie");
  const { data: freeWatch } = useGetFreeWatch({ category: freeWatchCategory });


  return (
    <div>
      {/* search bar */}
      <div className="h-11"></div>
      <div className="h-[360px] bg-[rgba(0,0,0,0.2)]  flex flex-col justify-center items-center">
        <div className="container mx-auto p-4 w-[1300px] py-[30px] px-[40px]">
          <h1 className="text-5xl font-bold ">Welcome.</h1>
          <h2 className="text-4xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <div className="h-12 w-full ">
            <form className="mt-[30px] w-full ">
              <input type="text" name="search" id="search" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollCard
        results={trending?.results || []}
        onOptionChange={setTimeWindow}
        title="Trending Now"
        options={[
          { label: "Today", value: "day" },
          { label: "This Week", value: "week" },
        ]}
      />
      {/* {/* <Trending results={result} setTimeWindow={setTimeWindow} setCategory={setCategory} /> */}
      <ScrollCard
        results={freeWatch?.results || []}
        onOptionChange={setFreeWatchCategory}
        title="Free to Watch"
        options={[
          { label: "Movie", value: "movie" },
          { label: "TV Show", value: "tv" },
        ]}
      />
    </div>
  );
}

export default Dashboard;
