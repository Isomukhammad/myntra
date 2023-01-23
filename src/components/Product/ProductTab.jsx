import Image from "next/image";

const ProductTab = ({ data }) => {
    const { images, name, monthly, price } = data[0];
    return (
        <div className="Product-tab">
            <Image src={images[0].img} alt="Product image" sizes="100vw" width="0" height="0" className="Product-tab__image" />
            <h1>{name}</h1>
            <div>
                <strong className="Product-tab__monthly">{monthly} сум <span className="Product-tab__monthly--duration">x18</span>
                </strong>
                <p className="Product-tab__price">{price} сум</p>
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