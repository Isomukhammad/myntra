import ProductTab from "./ProductTab";

const ProductsRaw = ({ title, time }) => {
    return (
        <div className="Products-raw">
            <div className="flex flex-row justify-between items-center">
                <div className="Products-raw__headline flex flex-row gap-4 items-center">
                    <h1 className="text-lg font-bold">{title}</h1>
                    {time ? <div className="Products-raw__headline__time">
                        <p className="text-white font-semibold">{time}</p>
                    </div> : null}
                </div>
                <div className="group hidden md:flex flex-row items-center gap-1 font-semibold text-purpleMain hover:text-purpleDark transition-all duration-300 cursor-pointer">
                    <p>Смотреть все </p>
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="group-hover:fill-purpleDark fill-purpleMain transition-all duration-300"
                    >
                        <use xlinkHref="#arrow-right"></use>
                    </svg>
                </div>
            </div>
            <div className="Products-raw__items flex gap-4">
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
            </div>
        </div>
    );
}

export default ProductsRaw;