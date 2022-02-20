import { Gifts } from '../interfaces/gifs'



export const GifGridItem = ({url,title}:Gifts) => {

    
    
  return (
    <div className="card animate__animated animate__bounce">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
