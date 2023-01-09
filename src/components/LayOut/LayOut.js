import TopNavigation from "../TopNavigation"
import MusicControler from "../MusicControler"
import SideNavigation from "../SideNavigation"
import PLayLists from "../PlayLists/PlayLists"

import Home from "../../pages/home/home"

export default function LayOut({children}) {
    return (
        <div className="w-screen h-screen grid grid-rows-[60px_1fr_87px] md:grid-rows-[60px_1fr_56px] bg-[#000417] max-w-[1900px]">
            <TopNavigation />

            {/* middle section */}
            <div className="grid grid-cols-1 md:grid-cols-[9fr_3fr] overflow-hidden px-0 md:px-2">

                {/* main seciton */}
                <div className=" overflow-y-auto px-2 pt-4 md:px-4">
                    <Home />
                </div>

                {/* right side section */}
                <div className="hidden md:block overflow-y-auto space-y-5 pb-4">
                    <SideNavigation />
                    <PLayLists />
                </div>

            </div>

            <MusicControler />
        </div>
    )
}