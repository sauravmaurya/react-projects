import React from 'react'
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store'
import Skeleton from './Skeleton'
import Button from './Button'
import PhotosListItem from './PhotosListItem'

function PhotosList({ album }) {

    const { data, isFetching, error } = useFetchPhotosQuery(album)
    const [addPhoto, results] = useAddPhotoMutation()
    let content;

    const handleAddPhoto = () => {
        addPhoto(album)
    }

    if (isFetching) {
        content = <Skeleton times={3} className="h-8 w-8"></Skeleton>
    }
    else if (error) {
        content = "Error fetching the data"
    }
    else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo}></PhotosListItem>
        })
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className='mx-8 flex flex-row items-center justify-center flex-wrap'>{content}</div>
        </div>
    )
}

export default PhotosList
