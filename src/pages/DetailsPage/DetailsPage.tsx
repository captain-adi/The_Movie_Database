import { useGetCastAndCrew, useGetDetails } from "@/hooks/query";
import { Link, useParams } from "react-router-dom";
import { Play, Heart, List, Bookmark } from "lucide-react";
import { format } from "date-fns";
import type { IDetailType } from "@/types/detailType";
import type { ICastAndCrew } from "@/types/castAndCrew";
import ScrollCrewAndCast from "@/components/ScrollCrewAndCast/ScrollCrewAndCast";
import { Separator } from "@/components/ui/separator"
function DetailsPage() {
  const { category, id } = useParams<{ category: string; id: string }>();
  const {
    data,
    isLoading,
  }: { data: IDetailType | undefined; isLoading: boolean } = useGetDetails(
    category,
    id
  );

  const {
    data: crewAndCast,
    isLoading: isLoadingCrewAndCast,
  }: { data: ICastAndCrew | undefined; isLoading: boolean } = useGetCastAndCrew(
    category,
    id
  );
  console.log("crewAndCast data:", crewAndCast);
  console.log("DetailsPage data:", data);
  if (isLoading || isLoadingCrewAndCast) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
    <div className="bg-blue-500 h-[600px] ">
      <div className="h-11 bg-black"></div>
      <div className="mx-auto w-[1300px] py-7">
        <div>
          <section className="flex items-between">
            <div className="w-[300px] h-[450px]">
              <img
                src={data?.poster_path ?? undefined}
                className="h-[450px] w-full border"
                alt={data?.title}
              />
            </div>
            <div className="md:col-span-2 space-y-4 flex-1">
              <section className="pl-10">
                {/* first div  */}
                <div className="mb-6">
                  <h2 className="text-4xl font-bold">
                    {data.title}{" "}
                    <span>({format(new Date(data.release_date), "yyyy")})</span>
                  </h2>
                  <div className="text-md">
                    <span className="text-muted-foreground border px-1">U/A 13+</span>
                    <span>
                      {format(new Date(data.release_date), "dd/MM/yyyy")}
                    </span>{" "}
                    {data.genres.map((genre) => (
                      <span key={genre.id} className="pl-5">
                        {genre.name},{" "}
                      </span>
                    ))}
                    {/* i want hour and min format */}
                    <span>
                      {data.runtime != null
                        ? `${Math.floor(data.runtime / 60)}h ${
                            data.runtime % 60
                          }m`
                        : "N/A"}
                    </span>
                  </div>
                </div>
                {/* second div  */}
                <div className="flex items-center mb-1 ">
                  <div className="mr-4 flex items-center">
                    <div>
                      <div className="bg-amber-500 rounded-full h-[60px] w-[60px] text-center flex justify-center items-center">
                        74%
                      </div>
                    </div>
                    <div className="ml-1 font-bold">User Score</div>
                    <div className="ml-4"></div>
                  </div>
                  <div className="p-2 pl-3 font-bold rounded-full bg-blue-950 ">
                    <div>
                      <div>What's your Vibe?</div>
                    </div>
                  </div>
                </div>

                {/* third div  */}
                <div className="mb-5 flex items-center">
                  <div className="py-1 mr-5 h-11 w-11 rounded-full bg-blue-950 flex justify-center items-center text-white">
                    <Bookmark className=" h-4 fill-white " />
                  </div>
                  <div className="py-1 mr-5 h-11 w-11 rounded-full bg-blue-950 flex justify-center items-center text-white">
                    <Heart className=" h-4 fill-white" />
                  </div>
                  <div className="py-1 mr-5 h-11 w-11 rounded-full bg-blue-950 flex justify-center items-center text-white">
                    <List className=" h-4 fill-white" />
                  </div>
                  <div className="flex items-center font-bold">
                    <span>
                      <Play className="mr-1 h-4 fill-white" />
                    </span>
                    Play Trailer
                  </div>
                </div>
                <h3 className="text-muted-foreground font-italic">
                  {data.tagline}
                </h3>
                <h1 className="my-3 text-xl font-bold">Overview</h1>
                <p className="">{data.overview}</p>
                <div>
                  {/* here    i want the data like director name writer name  */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Production Companies
                    </h3>
                    <ul className="list-disc pl-5">
                      {data.production_companies.map((company) => (
                        <li key={company.id}>
                          {company.name} ({company.origin_country})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>

    </div>
      <div className=" w-[1400px] mx-auto container py-7 px-10 flex">   
        <div className="w-[1140px] ">
          <ScrollCrewAndCast
            results={crewAndCast?.cast ?? []}
            title="Top Billed Cast"
          />
          {crewAndCast?.id && (
            <Link to={`/movies/${crewAndCast.id}/cast`} className="mt-10">
              <h2 className="mt-4 text-black dark:text-white py-2 px-4 rounded font-bold">
                Full Cast & Crew
              </h2>
            </Link>
          )}
          <Separator />
        </div>
        <div className="w-[260px] border h-48 bg-red-500">
          <h1>hello</h1>
        </div>
      </div>

    </div>
  );
}

export default DetailsPage;
