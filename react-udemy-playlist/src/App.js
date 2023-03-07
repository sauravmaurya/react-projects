import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import {resetSong,resetMovie} from './store';
import {useDispatch} from 'react-redux'

export default function App() {

    const dispatch = useDispatch()

  const handleResetClick = () => {
        dispatch(resetSong())
        dispatch(resetMovie())
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
