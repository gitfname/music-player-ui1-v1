import PlayListItem from "../PlayListItem/PlayListItem"

import img1 from "../../assets/small-images/img-1.jpg"
import img2 from "../../assets/small-images/img-2.jpg"
import img3 from "../../assets/small-images/img-3.jpg"
import img4 from "../../assets/small-images/img-4.jpg"
import img5 from "../../assets/small-images/img-5.jpg"
import img6 from "../../assets/small-images/img-6.jpg"
import img7 from "../../assets/small-images/img-7.jpg"
import img8 from "../../assets/small-images/img-8.jpg"
import img9 from "../../assets/small-images/img-9.jpg"

export default function PLayLists() {
    return (
        <div className="w-11/12 mx-auto rounded-xl bg-[#131723] p-3" lang="pr">
            <div className="flex items-center justify-between">
                <a href="#" className="text-[var(--primary-color)] text-sm">همه</a>
                <h2 className="text-gray-50 text-base text-right">بهترین پلی لیست ها</h2>
            </div>

            <div className="w-full mt-4 space-y-2">
                <PlayListItem img={img1}/>
                <PlayListItem img={img2}/>
                <PlayListItem img={img3}/>
                <PlayListItem img={img4}/>
                <PlayListItem img={img5}/>
                <PlayListItem img={img6}/>
                <PlayListItem img={img7}/>
                <PlayListItem img={img8}/>
                <PlayListItem img={img9}/>
            </div>
        </div>
    )
}