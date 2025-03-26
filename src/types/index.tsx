export type MovieDetails = {
  originalTitleAutocomplete: string;
  primaryTitleAutocomplete: string;
  type: string;
  genres: string;
  startYearFrom: string;
};

export type HistoryRequestItem = {
  title: string;
  queryParams: MovieDetails;
};
