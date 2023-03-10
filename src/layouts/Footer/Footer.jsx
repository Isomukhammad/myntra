import Image from "next/image";
import Link from "next/link";

import data from '../../db.json';

import FooterCategory from "./FooterCategory";

const Footer = () => {
    const { footer } = data;

    return (
        <div className="Footer__container pt-10 pb-20 bg-headerTop text-white">
            <div className="Footer__wrapper 2xl:container 2xl:mx-auto flex flex-col px-5 gap-12">
                <div className="Footer__header">
                    <Image src='/images/footer-logo.png' alt="logo" width={0} height={0} sizes='100vw' placeholder="blurDataURL" className="Footer__logo" />
                    <button>
                        Карта магазинов
                    </button>
                </div>

                <div className="Footer__tabs gap-3">
                    {
                        footer?.map((category) => (
                            <FooterCategory key={category.id} data={category} />
                        ))
                    }
                </div>

                <div className="Footer__bottom">
                    <p className="Footer__copyright">Copyright © 2022 Myntra. All rights reserved</p>
                    <Link href="https://inweb.uz/">
                        Разработчка -
                        <svg
                            viewBox="0 0 15 18"
                            width={15}
                            height={20}
                        >
                            <use xlinkHref="#inweb"></use>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;