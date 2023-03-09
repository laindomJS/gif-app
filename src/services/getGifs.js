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


export default async function getGifs({ keyword }) {
  const URL = `${import.meta.env.VITE_REACT_API_URL}/gifs/search?api_key=${import.meta.env.VITE_REACT_API_KEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en`;

  return fetch(URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}

