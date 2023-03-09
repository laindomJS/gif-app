const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  return data;
}

export default async function getTrendingService() {
  const URL = `${import.meta.env.VITE_REACT_API_URL}/trending/searches?api_key=${import.meta.env.VITE_REACT_API_KEY}`;

  return fetch(URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}