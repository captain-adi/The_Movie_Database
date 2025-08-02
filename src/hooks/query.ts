import { Apiendpoints } from "@/api/api_endpoints";
import { useQuery } from "@tanstack/react-query";

export function useGetTrending({
  category,
  timeWindow,
}: {
  category?: string;
  timeWindow?: string;
}) {
  return useQuery({
    queryKey: ["trendingMovies", category, timeWindow],
    queryFn: () =>
      Apiendpoints.getTrending(category || "movie", timeWindow || "day"),
  });
}

export function useGetFreeWatch({ category }: { category?: string }) {
  return useQuery({
    queryKey: ["freeWatch", category],
    queryFn: () => Apiendpoints.getFreeWatch(category || "movie"),
  });
}

export function useGetDetails(category?: string, id?: string) {
  return useQuery({
    queryKey: ["details", category, id],
    queryFn: () => { 
      if (!category || !id) {
        throw new Error("Category and ID are required for details query");
      }
      return Apiendpoints.getDetails(category, id);
    },
  });
}


export function useGetCastAndCrew(category?: string, id?: string) {
  return useQuery({
    queryKey: ["castAndCrew", category, id],
    queryFn: () => {
      if (!category || !id) {
        throw new Error("Category and ID are required for cast and crew query");
      }
      return Apiendpoints.getCastAndCrew(category, id);
    },
  });
}

export function useGetKeywords(category?: string, id?: string) {
  return useQuery({
    queryKey: ["keywords", category, id],
    queryFn: () => {
      if (!category || !id) {
        throw new Error("Category and ID are required for keywords query");
      }
      return Apiendpoints.getKeywords(category, id);
    },
  });
}


export function useGetReviews(category?: string, id?: string) { 
  return useQuery({
    queryKey: ["reviews", category, id],
    queryFn: () => {
      if (!category || !id) {
        throw new Error("Category and ID are required for reviews query");
      }
      return Apiendpoints.getReviews(category, id);
    },
  });
}