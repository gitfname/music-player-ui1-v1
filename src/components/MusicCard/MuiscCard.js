import { getAudio, loadMusic, pause, play, playPause, setAudioVolume, setVolume } from "../../features/MusicPlayerReducer/MusicManager"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentId } from "../../features/MusicPlayerReducer/MusicPlayerSlice"
import { downloadIcon, pauseIcon2, playIcon2 } from "../../icons"
import { useRef, useState } from "react"
import { Wave } from "@foobar404/wave"

export default function MusicCard({img = "", music = "", songName = "", artistName = "", rating="0/0", id = ""}) {
    const dispatch = useDispatch()
    const isAudioPlaying = useSelector(state => state.MusicPlayer.isPlaying)
    const currentMusicId = useSelector(state => state.MusicPlayer.currentId)
    const isAudioLoaded = useSelector(state => state.MusicPlayer.isLoaded)
    const canvasElement = useRef()

    function initVisualizer() {
        const wave = new Wave(getAudio(), canvasElement.current)
        wave.addAnimation(new wave.animations.Glob({
            fillColor: {gradient: ["rgba(0, 0, 0, .95)", "rgba(0, 0, 0, .85)"], rotate: 45},
        }))
    }

    function musicCardClicked(src, id) {
        dispatch(setCurrentId(id))
        loadMusic(src)
        initVisualizer()
    }

    let activeMusic = false
    if(isAudioPlaying && currentMusicId == id) {
        activeMusic = true
    }

    function playPauseIconClicked(e) {
        e.stopPropagation()

        if(currentMusicId != id) {
            dispatch(setCurrentId(id))
            loadMusic(music)
            initVisualizer()
        }
        else if(currentMusicId == id) {
            playPause()
        }
    }

    return (
        <div className={`w-full rounded-xl bg-[#0f1223] p-2 pb-3 relative group`} lang="pr">
            {/* heart */}
            <div className="grid place-items-center absolute top-4 left-4 w-6 h-6 rounded bg-transparent/50 z-20">
                <div className="w-3 h-3 bg-gray-50 mask mask-heart"></div>
            </div>

            {/* download */}
            <a target="_blank" href={music} className="active:scale-90 transition-transform duration-200 grid place-items-center absolute top-4 right-4 w-6 h-6 rounded bg-transparent/50 z-20">
                <div className="w-4 h-4 fill-gray-100">{downloadIcon}</div>
            </a>

            {/* image */}
            <div className="w-full bg-slate-800 h-36 rounded-xl overflow-hidden cursor-pointer relative">
                <img loading="lazy" src={img} className="brightness-90 group-hover:brightness-125 w-full h-full rounded-xl object-cover object-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div onClick={playPauseIconClicked} className={`z-10 active:scale-95 ${id == currentMusicId ? "opacity-100" : "opacity-0"} max-md:!opacity-100 group-hover:opacity-100 transition-all duration-300 w-12 h-12 rounded-full bg-[var(--primary-color)] grid place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <div className={`${currentMusicId == id ? !isAudioLoaded ? "animate-spin" : "" : "" } w-9 h-9 fill-gray-50`}>{activeMusic ? isAudioPlaying ? pauseIcon2 : playIcon2 : playIcon2}</div>
                </div>
                <canvas ref={canvasElement} width="160px" height="160px" className={`${currentMusicId != id ? "opacity-0" : ""} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></canvas>
            </div>

            {/* title */}
            <p className="text-right text-sm text-gray-50 mt-3">{songName}</p>

            {/* sub-title and eating */}
            <div className="flex items-center justify-between mt-1.5">

                <div className="flex items-center gap-x-1.5">
                    <div className="mask mask-star-2 w-4 h-4 bg-yellow-400"></div>
                    <p className="text-gray-100 text-xs">{rating}</p>
                </div>

                <p className={`${activeMusic ? "text-gray-100" : "text-gray-300/80"} text-xs`}>{artistName}</p>

            </div>
        </div>
    )
}