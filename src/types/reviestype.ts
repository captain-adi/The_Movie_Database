interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_details :{
    rating : string;
  }
}
export interface IReviewResponseData {
  id: number;
  page: number;
  results: IReview[];
  total_pages: number;
  total_results: number;
}