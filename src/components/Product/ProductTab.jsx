import Image from "next/image";

const ProductTab = () => {
    return (
        <div className="Product-tab">
            <Image src={'/images/product-0.webp'} alt="Product image" sizes="100vw" width="0" height="0" className="Product-tab__image" />
            <h1></h1>
            <div>
                <strong className="Product-tab__monthly">5 390 325 сум <span className="Product-tab__monthly--duration">x18</span>
                </strong>
                <p className="Product-tab__price">123 456 789 сум</p>
            </div>
            <div className="Product-tab__buttons">
                <button className="Product-tab__buttons--cart">
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="none"
                        stroke="white"
                    >
                        <use xlinkHref="#bag"></use>
                    </svg>
                </button>
                <button className="Product-tab__buttons--like">
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="none"
                        stroke="#828282"
                    >
                        <use xlinkHref="#favorite"></use>
                    </svg>
                </button>
                <button className="Product-tab__buttons--compare">
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="#828282"
                    >
                        <use xlinkHref="#compare"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductTab;