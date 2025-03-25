export type HistoryRequestItem = {
  title: string;
  queryParams: {
    originalTitleAutocomplete: string;
    primaryTitleAutocomplete: string;
    type: string;
    genres: string;
    startYearFrom: string;
  };
};
