export default function PlayListItem({img = ""}) {
    return (
        <div className="flex justify-end gap-x-2 text-right p-1 hover:bg-white/10 transition-colors duration-200 cursor-pointer rounded" lang="pr">
            <div className="self-center">
                <p className="text-gray-100 text-sm">عنوان موزیک</p>
                <p className="text-gray-400/80 text-xs mt-0.5">عنوان موزیک</p>
            </div>
            <div className="mask mask-squircle w-12 h-12 bg-gray-500 bg-cover bg-center" style={{backgroundImage: `url('${img}')`}}></div>
        </div>
    )
}