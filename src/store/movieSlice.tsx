import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FetchMoviesParams {
  searchValue?: string;
  genre?: string;
  country?: string;
}

interface Movie {
  id: string;
  title: string;
  startYear: number | null;
  primaryImage: string;
  averageRating: number;
}

interface MoviesState {
  loading: string;
  movies: Movie[];
}

export const fetchMovies = createAsyncThunk<Movie[], FetchMoviesParams>(
  'fetchMovies',
  async (params: FetchMoviesParams) => {
    let url = `https://1d74b2bc0bf535e0.mokky.dev/movies?`;

    const { searchValue, genre, country } = params;

    if (genre) url += `&genre=${encodeURIComponent(genre)}`;
    if (searchValue) url += `&title=*${encodeURIComponent(searchValue)}`;
    if (country) url += `&country=${encodeURIComponent(country)}`;

    // Получаем текущую историю запросов из localStorage
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

    // Добавляем новый запрос в историю
    history.unshift({ searchValue, genre, country });

    // Ограничиваем историю, например, 10 последними запросами
    localStorage.setItem('searchHistory', JSON.stringify(history.slice(0, 10)));

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
      // setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: MoviesState = {
  loading: 'loading',
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = 'loading';
      state.movies = [];
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = 'success';
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = 'error';
      state.movies = [];
    });
  },
});

export default movieSlice.reducer;
