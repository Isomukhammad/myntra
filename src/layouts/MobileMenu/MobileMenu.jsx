import Link from "next/link";
import { useRouter } from "next/router";

const MobileMenu = () => {
    const router = useRouter();
    const { pathname } = useRouter();
    return (
        <div className={`Mobile-menu ${pathname.includes('product') ? 'Mobile-menu--border' : ''}`}>
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