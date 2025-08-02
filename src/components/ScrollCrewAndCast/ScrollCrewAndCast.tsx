import type { ICast } from "@/types/castAndCrew";
import { useNavigate } from "react-router-dom";

interface IScrollCrewAndCast {
  // Define the props for ScrollCrewAndCast if needed
  results: ICast[];
  title: string;
}
function ScrollCrewAndCast({ results, title }: IScrollCrewAndCast) {
    const navigate = useNavigate();

  return (
    <div>
        <div>
              <h2 className="text-2xl text-black mr-5">{title}</h2>
        </div>
       <div className="relative overflow-x-auto   py-5">
                <div className="flex gap-5 pr-8">
                  {results.slice(0,10).map((cast, index) => (
                    <div key={index} className="relative w-[150px] cursor-pointer  shrink-0" onClick={()=> navigate(`/${cast.id}/${cast.id}`)}>
                      {/* Card */}
                      <div className=" rounded-xl shadow-md overflow-hidden pb-2">
                        <img
                          src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : "/placeholder.jpg"}
                          alt={cast.name}
                          className="w-full h-[225px] bg-gray-300 object-cover"
                        />
                        <div className="px-3 text-sm pt-6">
                          <div className="font-semibold text-black ">{cast.name}</div>
                          <div className=" font-extralight text-muted-foreground">
                            {cast.character ? cast.character : "No character available"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
      
                {/* Edge Fade Effect */}
                {/* <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div> */}
                <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
    </div>
  )
}

export default ScrollCrewAndCast
