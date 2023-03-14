import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductTab = ({ product, type }) => {
    const [isHover, setIsHover] = useState(false);
    const [error, setError] = useState(false);
    return (
        <div className={`min-w-[272px] ProductTab rounded-sm bg-white px-4 md:p-6 pt-6 pb-4 md:pb-6 text-sm gap-4 active:cursor-grabbing ${!type ? 'flex flex-col' : 'grid grid-cols-[38%_62%] items-center'}`}>
            <div className="ProductTab__image md:p-6">
                <Link href={`product/${product.id}-${product.slug}`}>
                    <Image
                        src={error ? '/images/placeholder.jpg' : product.src}
                        alt="Product image"
                        sizes="100vw"
                        width={0}
                        height={0}
                        placeholder="blurDataURL"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        onError={() => setError(true)}
                        className="rounded-[12px]"
                    />
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link href={`product/${product.id}-${product.slug}`} className="min-h-[40px] line-clamp-2 hover:font-medium">{product.name}</Link>
                <div>
                    <strong className={`ProductTab__monthly text-sm sm:text-[16px] md:text-[20px] ${type ? 'text-[16px]' : null}`}>300 000 сум <span className={`ProductTab__monthly--duration text-xs text-textSecondary md:text-sm ${type ? 'text-sm' : null}`}>x18</span>
                    </strong>
                    <p className="ProductTab__price text-xs text-textSecondary line-through font-medium">{product.old_price_formatted}</p>
                </div>
                <div className="ProductTab__buttons">
                    <button className="ProductTab__buttons--cart">
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
                    <button className="ProductTab__buttons--like">
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
                    <button className="ProductTab__buttons--compare">
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
        </div>
    );
}

export default ProductTab;