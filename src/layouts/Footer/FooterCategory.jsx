import { useState } from "react";

const FooterCategory = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Footer-category__container">
            <div
                className={`Footer-category__title ${isOpen ? 'Footer-category__title-open' : null}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <strong>{data?.title}</strong>
                <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="white"
                >
                    <use xlinkHref="#arr-down"></use>
                </svg>
            </div>

            <div className={`Footer-category__items
            ${isOpen ? 'Footer-category__items-open' : null}`}>
                {
                    data?.items.map((item) => (
                        <p key={item.id}>{item.title}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default FooterCategory;