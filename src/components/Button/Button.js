export default function Button({children, btnType="primary", rounded="rounded"}) {
    return (
        <>
            {
                btnType == "primary"
                ?
                <button className={`${rounded} text-xs sm:text-sm active:scale-95 transition-transform duration-200 bg-[var(--primary-color)] px-3 py-1.5 rounded-md text-gray-50`}>{children}</button>
                :
                <button className={`${rounded} text-xs sm:text-sm active:scale-95 transition-transform duration-200 bg-[#1a1d2c] px-3 py-1.5 rounded-md text-gray-50`}>{children}</button>
            }
        </>
    )
}