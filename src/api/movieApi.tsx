export const getMoviesByFilter = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const res = response.json();
  console.log('res', res);
  return res;
};

export const getMovieById = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const res = response.json();
  console.log('res', res);
  return res;
};

