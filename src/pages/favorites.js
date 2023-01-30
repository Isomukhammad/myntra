import EmptyPage from "@/components/EmptyPage";
import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";

const Favorites = () => {
    return (
        <div className="mt-10 mb-20">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `Избранное`
                    }
                ]}
            />
            <EmptyPage
                image="/images/empty favorites.png"
                title="В избранном пока ничего нет "
                text="Если у вас были товары в избранном при прошлом визите, авторизуйтесь, чтобы их"
            />
            <div className="mt-10">
                <ProductsRaw title="Самые просматриваемые" />
            </div>
        </div>
    );
}

export default Favorites;