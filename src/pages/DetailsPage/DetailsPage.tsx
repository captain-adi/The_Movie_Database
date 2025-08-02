import {
  useGetCastAndCrew,
  useGetDetails,
  useGetKeywords,
  useGetReviews,
} from "@/hooks/query";
import { Link, useParams } from "react-router-dom";
import {
  Play,
  Heart,
  List,
  Bookmark,
  Star,
  Facebook,
  Twitter,
  Instagram,
  LinkIcon,
} from "lucide-react";
import { format } from "date-fns";
import type { IDetailType } from "@/types/detailType";
import type { ICastAndCrew } from "@/types/castAndCrew";
import ScrollCrewAndCast from "@/components/ScrollCrewAndCast/ScrollCrewAndCast";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import type { IKeywordsResponse } from "@/types/keywordtype";
import type { IReviewResponseData } from "@/types/reviestype";

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

  const {
    data: keywords,
    isLoading: isLoadingKeywords,
  }: { data: IKeywordsResponse | undefined; isLoading: boolean } =
    useGetKeywords(category, id);

  const {
    data: reviews,
    isLoading: isLoadingReviews,
  }: { data: IReviewResponseData | undefined; isLoading: boolean } =
    useGetReviews(category, id);

  console.log("reviews data:", reviews);
  console.log("keywords data:", keywords);
  console.log("crewAndCast data:", crewAndCast);
  console.log("DetailsPage data:", data);
  if (
    isLoading ||
    isLoadingCrewAndCast ||
    isLoadingKeywords ||
    isLoadingReviews
  ) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <div
        className=" h-[600px] bg-no-repeat  bg-cover  "
        style={{
          backgroundImage: data?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
            : undefined,
          
        }}
      >
        <div className="h-11 bg-black"></div>
        <div className="mx-auto w-[1300px] py-7">
          <div>
            <section className="flex items-between">
              <div className="w-[300px] h-[450px]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                  className="h-[450px] w-full border rounded-2xl"
                  alt={data?.title}
                />
              </div>
              <div className="md:col-span-2 space-y-4 flex-1">
                <section className="pl-10">
                  {/* first div  */}
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold">
                      {data.title}{" "}
                      <span>
                        ({format(new Date(data.release_date), "yyyy")})
                      </span>
                    </h2>
                    <div className="text-md">
                      <span className="text-muted-foreground border px-1">
                        U/A 13+
                      </span>
                      <span>
                        {format(new Date(data.release_date), "dd/MM/yyyy")}
                      </span>{" "}
                      {data.genres.map((genre) => (
                        <span key={genre.id} className="pl-1">
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
                      <div className="list-disc flex justify-between">
                        {crewAndCast?.crew.slice(0, 4).map((crew) => (
                          <div key={crew.id} className="text-sm  font-bold">
                            <h3>{crew.name}</h3>
                            <h3> ({crew.job})</h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className=" w-[1400px] mx-auto container py-7 px-10 flex">
        <div className="w-[1052px] mr-6 ">
          <ScrollCrewAndCast
            results={crewAndCast?.cast ?? []}
            title="Top Billed Cast"
          />
          {crewAndCast?.id && (
            <Link to={`/movies/${crewAndCast.id}/cast`} className="mt-10">
              <h2 className="mt-4 text-black dark:text-white py-2  rounded font-bold">
                Full Cast & Crew
              </h2>
            </Link>
          )}
          <Separator />
          <div className="flex pt-8  text-black items-center">
            <span className="text-xl mr-[50px] mb-2 font-bold">Social</span>
            <span className=" border-b-8 mr-6 font-bold cursor-pointer">
              Review{" "}
              <span className="text-muted-foreground">
                {reviews?.results.length}
              </span>
            </span>
            <span className="font-bold cursor-pointer">Discussion</span>
          </div>

          {reviews?.results.slice(0, 1).map((review) => (
            <Card key={review.id} className="shadow-lg mb-6">
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src={
                      "https://secure.gravatar.com/avatar/f3f639420ef0cdc7dcb8943af8ce92ea.jpg?s=45"
                    }
                    alt=""
                  />
                  <div>
                    <h2 className="font-bold">A Review by {review.author}</h2>
                    <div className="flex items-center gap-2">
                      <span className="flex justify-center items-center border bg-blue-950 px-2  text-white rounded py-1 text-sm ">
                        <Star className="h-3 fill-white" />
                        {review.author_details.rating}
                      </span>

                      <span className="text-muted-foreground text-sm">
                        Written by {review.author} on{" "}
                        {format(new Date(review.created_at), "dd/MMM/yyyy")}
                      </span>
                    </div>
                  </div>
                </div>
                <p className=" text-black dark:text-white mt-4">
                  {review.content}
                </p>
              </CardContent>
            </Card>
          ))}

          <Link to={`/movies/${id}/reviews`}>
            <h2 className="font-bold text-black mb-8">Read All Reviews </h2>
          </Link>
          <Separator />
          <div>
            <div className="flex pt-8  text-black items-center">
              <span className="text-xl mr-[50px] mb-5 font-bold">Media</span>
              <span className=" border-b-8 mr-6 font-bold cursor-pointer">
                Most Popular
              </span>
              <span className="font-bold cursor-pointer">Video</span>
              <span className="font-bold cursor-pointer">Backdrops</span>
              <span className="font-bold cursor-pointer">Poster</span>
            </div>
          </div>
        </div>

        {/* // right side */}
        <div className="w-[260px]  h-full text-black ">
          {/* links */}
          <div className="flex items-center gap-3 mt-24">
            <span className="cursor-pointer">
              <Facebook className="" />
            </span>
            <span className="cursor-pointer">
              <Twitter className="fill-blue-950" />
            </span>
            <span className="cursor-pointer">
              <Instagram className="" />
            </span>
            <span className="cursor-pointer">
              <LinkIcon className="" />
            </span>
          </div>
          {/* status  */}
          <div className="flex flex-col gap-5 mt-10">
            <div>
              <strong>Status</strong>
              <p>released</p>
            </div>
            <div>
              <strong>Original Language</strong>
              <p>{data.original_language}</p>
            </div>
            <div>
              <strong>Budget</strong>
              <p>${data.budget}</p>
            </div>
            <div>
              <strong>Revenue</strong>
              <p>${data.revenue}</p>
            </div>
          </div>

          {/* keywords */}
          <div className="w-full flex flex-col my-8">
            <h2 className="font-bold text-sm mb-3">Keywords</h2>
            <div className="flex flex-wrap gap-2 text-gray-800">
              {keywords?.keywords.map((keyword) => (
                <span
                  key={keyword.id}
                  className="mr-2 bg-gray-400 text-xs px-3 py-1 rounded"
                >
                  {keyword.name}
                </span>
              ))}
            </div>
          </div>

          <Separator />

          {/* content Score  */}
          <div className="mt-10">
            <h2 className="font-bold">Content Score</h2>
            <div>
              <div className="bg-red-950 font-bold text-white text-sm rounded-t-md py-2 px-3">
                100
              </div>
              <div className="bg-gray-400 text-sm rounded-b-md py-2 px-3">
                Yes! Looking Good
              </div>
            </div>
          </div>

          {/* Top Contributors */}
          {/* <div>
            <h2 className="font-bold">Top Contributors</h2>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
