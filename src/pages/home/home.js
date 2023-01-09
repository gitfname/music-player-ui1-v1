import Button from "../../components/Button";
import MusicCard from "../../components/MusicCard/MuiscCard";

import img1 from "../../assets/small-images/img-1.jpg"
import img2 from "../../assets/small-images/img-2.jpg"
import img3 from "../../assets/small-images/img-3.jpg"
import img4 from "../../assets/small-images/img-4.jpg"
import img5 from "../../assets/small-images/img-5.jpg"
import img6 from "../../assets/small-images/img-6.jpg"
import img7 from "../../assets/small-images/img-7.jpg"
import img8 from "../../assets/small-images/img-8.jpg"
import img9 from "../../assets/small-images/img-9.jpg"
import img10 from "../../assets/small-images/img-10.jpg"
import img11 from "../../assets/small-images/img-11.jpg"
import img12 from "../../assets/small-images/img-12.jpg"
import img13 from "../../assets/small-images/img-13.jpg"
import img14 from "../../assets/small-images/img-14.jpg"
import img15 from "../../assets/img/bg.png"
import { filterIcon } from "../../icons";
import { HomePage_Musics } from "../../AppFakeData";

export default function Home() {
    return (
        <div>
            <div className="w-full bg-slate-900 overflow-hidden rounded-xl border border-gray-700 h-64 grid grid-cols-1 md:grid-cols-2 relative bg-gradient-to-br from-slate-900 via-cyan-500/10 to-slate-900">
                <div className="absolute bottom-0 left-0">
                    <img src="woman-listening.png" className="w-[390px] relative z-10"/>
                    <div className="w-20 h-20 rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 extralarge-primary-shadow"></div>
                </div>
                <div></div>
                <div lang="pr" className="place-self-center text-right p-3 z-10">
                    <h2 className="text-5xl text-gray-50 font-bold">خرید اشتراک ویژه</h2>
                    <p className="text-gray-300 text-sm mt-4 max-w-[75ch]">
                        با خرید اشتراک ویژه. ضمن حمایت از رسانه و نیم بهاو حذف تمام تبلیغات میتوانید به دانلود تمامی پست های ویژه رسانه آواپد با دسترسی داشته باشید
                    </p>

                    <div className="text-gray-50 w-max flex items-center ml-auto gap-x-3 bg-slate-700 rounded-lg cursor-pointer p-2 mt-6">
                        <div className="self-stretch w-7 bg-[var(--primary-color)] rounded little-primary-shadow"></div>
                        خرید اشتراک ویژه
                    </div>
                </div>
            </div>

            <div className="py-6 flex items-center justify-between" lang="pr">

                <div className="flex items-center gap-x-2">
                    <div className="hidden md:block">
                        <Button rounded="rounded-3xl">مشاهده همه</Button>
                    </div>
                    <div className="block md:hidden">
                        <Button rounded="rounded-3xl">
                            <div className="w-6 h-6 stroke-gray-50 stroke-2">{filterIcon}</div>
                        </Button>
                    </div>
                </div>

                <h2  className="block md:hidden text-base font-semibold text-gray-50">بهترین های این هفته</h2>

                <div className="hidden md:flex items-center gap-x-2">
                    <Button btnType="secondary" rounded="rounded-3xl">پیشنهادی ما</Button>
                    <Button btnType="secondary" rounded="rounded-3xl">محبوب ترین ها</Button>
                    <Button btnType="secondary" rounded="rounded-3xl">جدیدترین ها</Button>
                    <Button rounded="rounded-3xl">همه</Button>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 md:gap-x-3 gap-y-4 pb-4">
                {
                    HomePage_Musics.map(homePageMusic => {
                        return <MusicCard key={homePageMusic["id"]} img={homePageMusic["img"]} music={homePageMusic["music"]} songName={homePageMusic["song-name"]} artistName={homePageMusic["artist-name"]} rating={homePageMusic["rating"][0]+"/"+homePageMusic["rating"][1]} id={homePageMusic["id"]} />
                    })
                }
            </div>
  
        </div>
    )
}