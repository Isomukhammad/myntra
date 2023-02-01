const Brands = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="Category__brands flex flex-row items-center overflow-y-hidden overflow-x-scroll gap-2 mx-[-34px] px-[34px] lg:mt-2">
                <button className="flex flex-row items-center bg-error py-[11.5px] px-4 rounded-sm gap-2 hover:bg-red-600 transition duration-300">
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-none stroke-white"
                    >
                        <use xlinkHref="#label"></use>
                    </svg>
                    <p className="whitespace-nowrap font-medium font-sm text-white">Большие скидки</p>
                </button>
                <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Xiaomi</button>
                <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Apple</button>
                <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Samsung</button>
                <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Huawei</button>
                <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Honor</button>
            </div>
        </div>
    );
}

export default Brands;