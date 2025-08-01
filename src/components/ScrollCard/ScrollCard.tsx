import type { ITredingTypes } from "@/types/tredingtypes";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
interface IResult{
 results: ITredingTypes[];
 title: string;
 onOptionChange: (value: string) => void;
 options: {
   label: string;
   value: string;
 }[];
}

const ScrollCard = ({ results, onOptionChange, title, options }: IResult) => {

  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* Title and Tabs */}
      <div className="w-[1300px] mx-auto h-[415] pt-7">
        <div className="flex px-7">
          <h2 className="text-2xl text-black mr-5">{title}</h2>
          <div className="flex gap-2 bg-gray-100 rounded-full overflow-hidden text-sm">
            {options.map((option, index) => (
              <button 
                key={option.value}
                onClick={() => onOptionChange(option.value)} 
                className={`px-4 py-1 ${index === 0 ? 'bg-black text-white' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Container */}
        <div className="relative overflow-x-auto   ml-10 py-5">
          <div className="flex gap-5 pr-8">
            {results.map((movie, index) => (
              <div key={index} className="relative w-[150px] cursor-pointer  shrink-0" onClick={()=> navigate(`/${movie.media_type}/${movie.id}`)}>
                {/* Card */}
                <div className=" rounded-xl shadow-md overflow-hidden pb-2">
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
                    alt={movie.title}
                    className="w-full h-[225px] bg-gray-300 object-cover"
                  />
                  <div className="px-3 text-sm pt-6">
                    <div className="font-semibold text-black ">{movie.title || movie.name}</div>
                    <div className=" font-extralight text-muted-foreground">
                      {movie.release_date ? format(new Date(movie.release_date), "PP") : 
                       movie.first_air_date ? format(new Date(movie.first_air_date), "PP") : 
                       "No date available"}
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
    </div>
  );
};

export default ScrollCard;
