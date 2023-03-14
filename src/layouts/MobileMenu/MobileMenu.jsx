import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = () => {
    const router = useRouter();
    const { pathname } = useRouter();
    return (
        <div className={`Mobile-menu ${pathname.includes('product') ? 'Mobile-menu--border' : ''} flex flex-row items-center justify-around py-[14px] px-5 fixed
        z-[2] bottom-0 w-full font-semibold text-[12px] text-menuIcons bg-white rounded-[12px_12px_0px_0px] shadow-[4px_0_12px_rgba(0,0,0,0.3)]`}>
            <Link
                href="/"
                className={`Mobile-menu__category ${pathname === '/' ? 'active' : ''}`}>
                <p>Главная</p>
            </Link>

            <Link href='/catalog' className={`Mobile-menu__category ${pathname.includes('/catalog') ? 'active' : ''}`}>
                <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="#BDBDBD"
                >
                    <use xlinkHref="#dashboard"></use>
                </svg>
                <p>Каталог</p>
            </Link>

            <Link href='/favorites' className={`Mobile-menu__category ${pathname.includes('/favorites') ? 'active' : ''}`}>
                <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="#BDBDBD"
                >
                    <use xlinkHref="#favorite"></use>
                </svg>
                <p>Избранное</p>
            </Link>

            <Link href='/profile' className={`Mobile-menu__category ${pathname.includes('/profile') ? 'active' : ''}`}>
                <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="#BDBDBD"
                >
                    <use xlinkHref="#user"></use>
                </svg>
                <p>Профиль</p>
            </Link>
            <Link href='/basket' className={`Mobile-menu__category ${pathname.includes('cart') ? 'active' : ''}`}>
                <svg
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="#BDBDBD"
                >
                    <use xlinkHref="#basket"></use>
                </svg>
                <p>Корзина</p>
            </Link>
        </div>
    );
}

export default MobileMenu;