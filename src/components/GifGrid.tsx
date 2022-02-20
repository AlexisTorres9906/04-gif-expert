import { Gifts } from "../interfaces/gifs";
 import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

interface props {
  category: any;
  key: any;
}

export const GifGrid = ({ category }: props) => {

    const {data:images,loading} = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
     
      <div className="card-grid">
        {loading && <p className="animate__animated animate__flash animate__repeat-2">Loading...</p>}
        {images.map((img: Gifts) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
