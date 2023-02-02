import InputCheckbox from "../Inputs/InputCheckbox";
import InputRange from "../Inputs/InputRange";
import FilterOption from "./FilterOption";

const FilterMenu = ({ open, setOpen, setIsScroll }) => {
    return (
        <div className={`fixed lg:static top-0 w-full h-full lg:h-fit bg-white lg:bg-transparent overflow-y-scroll lg:overflow-auto lg:rounded-sm z-[3] flex flex-col gap-2 transition-all duration-300 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <div className="flex flex-col gap-6 bg-white py-8 px-6 rounded-sm">
                <div className="mb-4 flex flex-row items-center justify-between lg:hidden">
                    <h1 className="font-bold text-xl">Фильтры</h1>
                    <button className="w-fit scale-[1.3]" onClick={() => { setOpen(false); setIsScroll(true) }}>
                        <svg viewBox="0 0 24 24" width={24} height={24} className="st stroke-three"><use xlinkHref="#x"></use></svg>
                    </button>
                </div>
                <FilterOption title="Производитель" open={true}>
                    <div className="relative">
                        <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="#BDBDBD" className="absolute top-3 left-2"><use xlinkHref="#search" /></svg>
                        <input type="text" placeholder="Найти производителя" className="block py-[13.5px] pl-9 w-full text-sm placeholder:text-placeholder placeholder:font-medium bg-transparent rounded-sm border-1 border-gray7 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain" />
                    </div>
                    <div className="max-h-[336px] overflow-y-scroll flex flex-col gap-7">
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                        <InputCheckbox name="Samsung" quantity={54} />
                    </div>
                </FilterOption>
                <FilterOption title="Цена" open={true}>
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="от 5 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                        <input type="text"
                            placeholder="от 9 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                    </div>
                    <InputRange min={5000000000} max={9000000000} />
                </FilterOption>
                <FilterOption title="Встроенная память, ГБ">
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="от 5 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                        <input type="text"
                            placeholder="от 9 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                    </div>
                    <InputRange min={5000000000} max={9000000000} />
                </FilterOption>
                <FilterOption title="Оперативная память, ГБ">
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="от 5 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                        <input type="text"
                            placeholder="от 9 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                    </div>
                    <InputRange min={5000000000} max={9000000000} />
                </FilterOption>
                <FilterOption title="Диагональ экрана">
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="от 5 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                        <input type="text"
                            placeholder="от 9 000 000 000"
                            className="border border-greyFive rounded-cart py-4 px-3 text-sm placeholder:text-placeholder placeholder:font-medium placeholder:text-[15px] bg-transparent border-1 focus:ring-0 focus:border-transparent focus:outline focus:outline-purpleMain"
                        />
                    </div>
                    <InputRange min={5000000000} max={9000000000} />
                </FilterOption>
            </div >
            <div className="py-4 px-6 bg-white rounded-sm">
                <button className="bg-primaryBg text-purpleMain py-4 w-full font-medium rounded-sm hover:text-purpleDark hover:bg-[#d5d5ff] transition duration-300 font-roboto">Очистить фильтры</button>
            </div>
        </div >
    );
}

export default FilterMenu;