import {configureStore, createSlice} from '@reduxjs/toolkit'

const songsSlice = createSlice({
    name:'song', //used for action-type
    initialState:[],
    reducers: {
        addSong(state,action){
            state.push(action.payload)
        },
        removeSong(state,action){
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        },
        resetSong(state,action){
            return [];
        }
    }
})

const moviesSlice = createSlice({
    name:"movie",
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload)
        },
        removeMovie(state,action){
            var index = state.indexOf(action.payload)
            state.splice(index,1) 
        },
        resetMovie(state,action){
            //Dont do state=[]
            return [];
        }
    }
})

const store = configureStore({
    reducer:{
        songs:songsSlice.reducer, //songs is name of state
        movies:moviesSlice.reducer
    }
})

export {store};
export const {addSong,removeSong,resetSong} = songsSlice.actions;
export const {addMovie,removeMovie,resetMovie} = moviesSlice.actions;