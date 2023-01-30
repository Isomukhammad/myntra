import { Menu, MenuItem } from "@szhsin/react-menu";

const LangDrop = () => {
    return (
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
    );
}

export default LangDrop;