import { useState } from "react"
import { useSelector } from "react-redux"
import { play, pause, playPause, loadMusic, seek, setAudioVolume } from "../../features/MusicPlayerReducer/MusicManager"
import { nextIcon, pauseIcon, playIcon, prevIcon } from "../../icons"

function toMMSS (numSecs) {
    let secNum = parseInt(numSecs, 10);
    let hours = Math.floor(secNum / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((secNum - (hours * 3600)) / 60).toString().padStart(2, '0');;
    let seconds = secNum - (hours * 3600) - (minutes * 60).toString().padStart(2, '0');;
    return `${minutes}:${seconds}`;
}

export default function MusicControler() {
    const isAudioLoaded = useSelector(state => state.MusicPlayer.isLoaded)
    const isAudioPlaying = useSelector(state => state.MusicPlayer.isPlaying)
    const isAudioPaused = useSelector(state => state.MusicPlayer.isPaused)
    const audioCurrentTime = useSelector(state => state.MusicPlayer.currentTime)
    const audioDuration = useSelector(state => state.MusicPlayer.duration)

    function playPauseBtnClicked() {
        setAudioVolume(1)
        playPause()
    }


    return (
        <div className="bg-[#0f131f] flex flex-col md:flex-row items-center gap-x-3 gap-y-1.5 px-1 md:px-4">
            <div className="flex items-center gap-x-2">
                <button className="rounded hover:bg-white/5 p-1.5" onClick={playPauseBtnClicked}>
                    <div className="fill-gray-50 w-8 h-8 transition-all duration-200 active:scale-95">{isAudioPlaying ? pauseIcon : playIcon}</div>
                </button>

                <div className="flex items-center gap-x-1">
                    <button className="rounded hover:bg-white/5 p-1.5">
                        <div className="fill-gray-50 w-[17px] h-[17px] transition-all duration-200 active:scale-95">{prevIcon}</div>
                    </button>

                    <button className="rounded hover:bg-white/5 p-1.5">
                        <div className="fill-gray-50 w-[17px] h-[17px] transition-all duration-200 active:scale-95">{nextIcon}</div>
                    </button>
                </div>
            </div>
            
            <div className="flex items-center gap-x-1.5 w-full md:w-9/12 lg:w-6/12 ml-auto mr-auto text-center">
                <p className="text-xs text-gray-50 w-16">{toMMSS(audioCurrentTime)}</p>
                <input type="range" className="flex-1" min="0" max={audioDuration} value={audioCurrentTime} onInput={e => seek(e.target.value)} />
                <p className="text-xs text-gray-50 w-16">{toMMSS(audioDuration)}</p>
            </div>
        </div>
    )
}