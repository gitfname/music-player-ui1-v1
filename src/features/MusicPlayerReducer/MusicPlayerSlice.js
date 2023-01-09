import { createSlice } from "@reduxjs/toolkit";

const initialStaet = {
    isPlaying: false,
    isLoaded: false,
    isPaused: false,
    duration: 0,
    currentTime: 0,
    volume: 1,
    currentSrc: "",
    currentId: ""
}

export const MusicPlayerSlice = createSlice({
    name: "MusicPlayerSlice",
    initialState: initialStaet,
    reducers: {
        setIsplaying: (state, action ) => {
            state.isPlaying = action.payload
        },

        setIsloaded: (state, action) => {
            state.isLoaded = action.payload
        },

        setIsPaused: (state, action) => {
            state.isPaused = action.payload
        },
        
        setDuration: (state, action) => {
            state.duration = action.payload
        },

        setCurrentTime: (state, action) => {
            state.currentTime = action.payload
        },

        setVolume: (state, action) => {
            state.volume = action.payload
        },

        setCurrentSrc: (state, action) => {
            state.currentSrc = action.payload
        },

        setCurrentId: (state, action) => {
            state.currentId = action.payload
        }
    }
})

export const { setIsplaying, setCurrentTime, setDuration, setIsPaused, setIsloaded, setVolume, setCurrentSrc, setCurrentId } = MusicPlayerSlice.actions
export default MusicPlayerSlice.reducer