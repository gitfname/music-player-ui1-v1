import { useState } from "react"
import { heartIcon, homeIcon, medalIcon, menuIcon, microphoneIcon, playListIcon, searchIcon, squaresIcon, usersIcon } from "../../icons"
import Button from "../Button"

export default function TopNavigatioon() {
    const [isMenuOpen, seIsMenuOpen] = useState(false)
    return (
        <div className="bg-[#131723] flex items-center justify-between px-6" lang="pr">

            {/* left menu overlay */}
            <div onClick={() => seIsMenuOpen(false)} className={`absolute top-0 left-0 w-full opacity-0 bg-transparent/50 h-full transition-opacity duration-300 -z-50 ${isMenuOpen&&"!opacity-100 !z-40"}`}></div>
            {/* left menu */}
            <div className={`py-5 fixed top-0 left-0 w-8/12 bg-transparent/80 backdrop-blur-sm z-50 h-full transition-transform duration-300 overflow-y-auto ${!isMenuOpen&&"-translate-x-full"}`}>
                <div className="w-full grid place-items-center">
                    <img src="logo.png" className="w-12 h-12" />
                </div>

                <div className="mt-8"></div>
            
                <div className="w-full px-3 space-y-5">
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">خانه</a>
                        <div className="w-6 h-6 fill-gray-100">{homeIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">دسته بندی ها</a>
                        <div className="w-6 h-6 fill-gray-100">{squaresIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">پلی لیست ها</a>
                        <div className="w-6 h-6 fill-gray-100">{playListIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">موزیک پادکست</a>
                        <div className="w-6 h-6 fill-gray-100">{microphoneIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">کاربران ویژه</a>
                        <div className="w-6 h-6 fill-gray-100">{usersIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">لیست علاقه مندی ها</a>
                        <div className="w-6 h-6 fill-gray-100">{heartIcon}</div>
                    </div>
                    <div className="flex items-center justify-end gap-x-3">
                        <a href="#" className="text-gray-100 text-base">خرید اشتراک ویژه</a>
                        <div className="w-6 h-6 fill-transparent stroke-gray-100">{medalIcon}</div>
                    </div>
                </div>
            </div>

            {/* open menu btn */}
            <div className="md:hidden w-7 h-7 fill-gray-100" onClick={() => seIsMenuOpen(true)}>{menuIcon}</div>

            {/* signup login btn */}
            <div className="hidden md:block">
                <Button rounded="rounded-2xl">
                    ثبت نام / ورود
                </Button>
            </div>

            {/* search input */}
            <input type="search" className="hidden md:block w-5/12 bg-slate-800 p-1.5 text-right rounded-3xl border-none outline-none focus:outline-none text-gray-50 placeholder-gray-400" placeholder="...جستجو" />
            
            {/* logo */}
            <a href="#">
                <img  src="logo.png" className="w-11 h-11"/>
            </a>

            {/* search btn */}
            <div className="md:hidden w-7 h-7 fill-gray-100">{searchIcon}</div>

        </div>
    )
}