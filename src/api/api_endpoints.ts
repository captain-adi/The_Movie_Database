import axios from "axios";
import { API_Config } from "./apiconfig";
import type { ITrendingResponse } from "@/types/tredingtypes";

class TmdbAPIEndpoints {
  private create_URL(endpoint: string, params?: Record<string, string>) {
    const searchParams = new URLSearchParams({
      api_key: API_Config.API_KEY,
      ...params,
    });
    return `${API_Config.BASE_URL}${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData(url: string) {
    const response = await axios(url);
    if (response.status !== 200) {
      throw new Error(
        `Error fetching data from ${url}: ${response.statusText}`
      );
    }
    return response.data;
  }

  async getTrending(category: string, timeWindow: string) : Promise<ITrendingResponse> {
    const url = this.create_URL(`/trending/${category}/${timeWindow}`);
    return this.fetchData(url);
  }

  async getFreeWatch(category: string): Promise<ITrendingResponse> {
    const url = this.create_URL(`/discover/${category}`, {
      with_watch_monetization_types: "free",
      watch_region: "IN",
    });
    return this.fetchData(url);
  }

  async getDetails(category: string, id: string) {
    const url = this.create_URL(`/${category}/${id}`);
    return this.fetchData(url);
  }
}
export const Apiendpoints = new TmdbAPIEndpoints();


// https://api.themoviedb.org/3/discover/all?api_key=956f1e8764d7cf1dd38870c6e8d651ce&with_watch_monetization_types=free&watch_region=IN