import { heartIcon, homeIcon, medalIcon, microphoneIcon, playListIcon, squaresIcon, usersIcon } from "../../icons";

export default function SideNavigation() {
    return (
        <div className="w-11/12 mx-auto bg-[#131723] rounded-xl p-3 space-y-2" lang="pr">

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg bg-[var(--primary-color)]  text-gray-50 text-sm text-right">
                خانه
                <div className="w-5 h-5 fill-gray-50">{homeIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                دسته بندی ها
                <div className="w-5 h-5 fill-gray-50">{squaresIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                پلی لیست ها
                <div className="w-5 h-5 fill-gray-50">{playListIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                موزیک پادکست
                <div className="w-5 h-5 fill-gray-50">{microphoneIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                کاربران ویژه
                <div className="w-5 h-5 fill-gray-50">{usersIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                لیست علاقه مندی ها
                <div className="w-5 h-5 fill-gray-50">{heartIcon}</div>
            </a>

            <a href="#" className="hover:bg-[var(--primary-color)] transition-colors duration-200 flex gap-x-3 items-center justify-end p-2 rounded-lg text-gray-50 text-sm text-right">
                خرید اشتراک ویژه
                <div className="w-5 h-5 fill-transparent stroke-gray-50">{medalIcon}</div>
            </a>

        </div>
    )
}