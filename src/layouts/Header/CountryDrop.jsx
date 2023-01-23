import { Menu, MenuItem } from "@szhsin/react-menu";

const CountryDrop = () => {
    return (
        <Menu
            className="Country-dropdown"
            menuButton={
                <div className="Country-dropdown__header">
                    <svg
                        viewBox="0 0 24 24"
                        height={24}
                        width={24}
                    >
                        <use xlinkHref="#pin"></use>
                    </svg>
                    <span>Ташкент</span>
                </div>
            }>
            <div className="Country-dropdown__headline">
                <div>
                    <h1>Выбор города</h1>
                    <p>Всего 13 городов</p>
                </div>
                <MenuItem>
                    <svg viewBox="0 0 24 24" width={24} height={24}>
                        <use xlinkHref="#x"></use>
                    </svg>
                </MenuItem>
            </div>
            <div className="Country-dropdown__options">
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
                <MenuItem>Ташкент</MenuItem>
            </div>
        </Menu>
    );
}

export default CountryDrop;