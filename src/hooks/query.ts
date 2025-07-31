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

export function useGetDetails({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  return useQuery({
    queryKey: ["details", category, id],
    queryFn: () => Apiendpoints.getDetails(category, id),
  });
}
