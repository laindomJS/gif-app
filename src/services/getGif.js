const fromApiResponseToGifs = apiResponse => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url }
}

export default async function getGif({ id }) {
  const URL = `${import.meta.env.VITE_REACT_API_URL}/gifs/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`;

  return fetch(URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

