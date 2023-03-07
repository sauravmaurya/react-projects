import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}){
    const listOfImages=images.map((image)=>{
        return <ImageShow image={image} key={image.id} />
    })

    return(
        <div className='image-list'>{listOfImages}</div>
    )
}

export default ImageList