import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Gifts } from "../interfaces/gifs";

export const useFetchGifs = (category: any) => {
  const [state, setState] = useState({
    data: [] as Gifts[],
    loading: true,
  });

  useEffect(() => {
    //HTTP request
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
