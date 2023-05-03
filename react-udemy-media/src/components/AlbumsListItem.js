import React from 'react'
import Button from './Button'
import ExpandalePanel from './ExpandalePanel'
import { GoTrashcan } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'
import PhotosList from './PhotosList'

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = <div>
        <Button onClick={handleRemoveAlbum} loading={results.isLoading}><GoTrashcan /></Button>
        {album.title}
    </div>
    return (
        <ExpandalePanel key={album.id} header={header} >
            <PhotosList album={album}></PhotosList>
        </ExpandalePanel>
    )
}

export default AlbumsListItem
