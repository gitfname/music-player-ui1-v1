import store from "../../store"
import { setIsplaying, setIsPaused, setDuration, setCurrentTime, setIsloaded, setVolume, setCurrentSrc } from "./MusicPlayerSlice"

let audio = new Audio();
function initAudioEventHandlers() {
    audio.addEventListener("loadeddata", function() {
        setTimeout(() => {
            store.dispatch(setIsloaded(true))
            play()
        }, 1000);
    })
    audio.onended = () => {
        store.dispatch(setIsplaying(false))
    }
    audio.ondurationchange = () => {
        store.dispatch(setDuration(audio.duration || 0))
    }
    audio.ontimeupdate = () => {
        store.dispatch(setCurrentTime(audio.currentTime || 0))
    }    
}
// initAudioEventHandlers()

function play() {
    if(!store.getState(state => state.MusicPlayerSlice).MusicPlayer.isLoaded) return
    audio.play()
    store.dispatch(setIsplaying(true))
    store.dispatch(setIsPaused(false))
}

function pause() {
    if(!store.getState(state => state.MusicPlayerSlice).MusicPlayer.isPlaying) return
    audio.pause()
    store.dispatch(setIsplaying(false))
    store.dispatch(setIsPaused(true))
}

function playPause() {
    if(!store.getState(state => state.MusicPlayerSlice).MusicPlayer.isLoaded) return
    if(store.getState(state => state.MusicPlayerSlice).MusicPlayer.isPlaying) {
        pause()
    }
    else {
        play()
    }
}

function seek(value = 0) {
    audio.currentTime = value
}

export function getAudio() {
    return audio
}

export function setAudioVolume(value = 0) {
    audio.volume = value
    store.dispatch(setVolume(value))
}

function loadMusic(src = "") {
    store.dispatch(setCurrentSrc(audio.currentSrc))
    store.dispatch(setIsloaded(false))
    pause()
    audio = new Audio(src)
    initAudioEventHandlers()
    // audio.src = src
}


export {
    play, pause, playPause, seek, loadMusic
}