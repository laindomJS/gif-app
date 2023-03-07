
export default async function getGifs(keyword) {
  
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_REACT_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  
  const res = await fetch(URL);
  if (res.ok) {
    const response = await res.json();
    const { data } = response;
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url }
      })
      return gifs;
    }
  }
}

