const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url }
    })
    return gifs;
  }
  return [];
}


export default async function getGifs({ limit = 20, keyword, page = 0 }) {
  const URL = `${import.meta.env.VITE_REACT_API_URL}/gifs/search?api_key=${import.meta.env.VITE_REACT_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  return fetch(URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

