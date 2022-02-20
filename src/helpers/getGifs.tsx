import { Gifts } from "../interfaces/gifs";

export const getGifs = async (category:string) => {
    //get the gifs from the API
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=2uu4xH6xm3cnzZzDAQf1NgHiPxbzu9Sz&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img: Gifts) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gifs;
  };