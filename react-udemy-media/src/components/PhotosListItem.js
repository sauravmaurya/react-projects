import React from 'react'
import { useRemovePhotoMutation } from '../store'
import { GoTrashcan } from 'react-icons/go'

function PhotosListItem({ photo }) {
    const [deletePhoto] = useRemovePhotoMutation()
    const handleDeletePhoto = () => {
        deletePhoto(photo)
    }
    return (
        <div className='relative m-2'>
            <img className='h-20 w-20 rounded' src={photo.url} alt="random pic" />
            <div onClick={handleDeletePhoto} className="flex absolute cursor-pointer inset-0 items-center justify-center opacity-0 hover:opacity-80 hover:bg-gray-200">
                <GoTrashcan className='text-3xl'></GoTrashcan>
            </div>
        </div>
    )
}

export default PhotosListItem
