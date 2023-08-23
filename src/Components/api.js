// api.js
const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters() {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();
  return data.results;
}
