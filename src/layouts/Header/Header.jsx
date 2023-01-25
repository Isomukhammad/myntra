import { Menu, MenuItem } from '@szhsin/react-menu';
import Image from "next/image";
import Link from "next/link";
import CountryDrop from './CountryDrop';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__upper">
                <div className="Header__upper__wrapper 2xl:container 2xl:mx-auto">
                    <div className="Header__upper__categories">
                        <CountryDrop />
                        <div className="Header__upper__link">Магазин</div>
                        <div className="Header__upper__link">Доставка</div>
                        <div className="Header__upper__link">Акции</div>
                    </div>
                    <Link href='/' className='Header__upper__logo'>
                        <Image src={'/images/header-logo.png'} alt="Logo" sizes="100vw" width={0} height={0} placeholder="blurDataURL" />
                    </Link>
                    <div className="Header__upper__info">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="none"
                            className="Header__phone-logo"
                        >
                            <use xlinkHref="#phone"></use>
                        </svg>
                        <div className="Header__phone-number">+998 90 555-66-88</div>
                        <div className='Header__language'>
                            <Menu className="Header__language__dropdown" menuButton={
                                <div className="Header__language__button">
                                    <p>RU</p>
                                    <svg
                                        viewBox="0 0 16 17"
                                        width={16}
                                        height={17}
                                    >
                                        <use xlinkHref="#flag-russia"></use>
                                    </svg>
                                </div>
                            }>
                                <MenuItem>
                                    <p>RU</p>
                                    <svg
                                        viewBox="0 0 16 17"
                                        width={16}
                                        height={17}
                                    >
                                        <use xlinkHref="#flag-russia"></use>
                                    </svg>
                                </MenuItem>
                                <MenuItem>
                                    <p>UZ</p>
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={16}
                                        height={17}
                                    >
                                        <use xlinkHref="#flag-uzbekistan"></use>
                                    </svg>
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header__lower w-full 2xl:container mx-auto">
                <div className="Header__lower__column-1">
                    <Link href='/'>
                        <Image
                            src="/images/header-logo.png"
                            alt="logo"
                            sizes="100vw"
                            width={0}
                            height={0}
                            className="Header__lower__logo"
                            placeholder="blurDataURL"
                        />
                    </Link>
                    <button className="Header__lower__menu">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            stroke="white"
                        >
                            <use xlinkHref="#menu"></use>
                        </svg>
                        <p>Каталог<span>товаров</span></p>
                    </button>

                    <div className="Header__lower__search">
                        <input type="text" placeholder="Поиск ..." />
                        <button>
                            <svg viewBox="0 0 24 24" width={24} height={24}>
                                <use xlinkHref="#search"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="Header__lower__column-2">
                    <div className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#basket"></use>
                        </svg>
                        <p>Корзина</p>
                    </div>
                    <div className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-three"
                        >
                            <use xlinkHref="#compare"></use>
                        </svg>
                        <p>Сравнение</p>
                    </div>
                    <div className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#favorite"></use>
                        </svg>
                        <p>Избранное</p>
                    </div>
                    <div className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#user"></use>
                        </svg>
                        <p>Профиль</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;