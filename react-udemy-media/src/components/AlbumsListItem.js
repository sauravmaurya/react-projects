import React from 'react'
import Button from './Button'
import ExpandalePanel from './ExpandalePanel'
import { GoTrashcan } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store/apis/albumsApi'

function AlbumsListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = (album) => {
        removeAlbum(album)
    }

    const header = <div>
        <Button onClick={handleRemoveAlbum} loading={results.isLoading}><GoTrashcan /></Button>
        {album.title}
    </div>
    return <ExpandalePanel key={album.id} header={header} >List of Photos in album</ExpandalePanel>
}

export default AlbumsListItem
