export interface MovieItemProps {
    title: string;
    primaryImage: string | null;
    startYear: number | null;
    averageRating: number;
}

export interface FetchMoviesParams {
    searchValue?: string;
    genre?: string;
    country?: string;
}