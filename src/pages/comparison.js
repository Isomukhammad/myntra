import EmptyPage from "@/components/EmptyPage";
import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";

const Comparison = () => {
    return (
        <div className="mt-10 mb-20">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `Сравнение`
                    }
                ]}
            />
            <EmptyPage
                image="/images/empty comparison.png"
                title="В списке сравнения пока ничего нет"
                text="Если у вас были товары для сравнения при прошлом визите, авторизуйтесь, чтобы увидеть их"
            />
            <div className="mt-10">
                <ProductsRaw title="Самые просматриваемые" />
            </div>
        </div>
    );
}

export default Comparison;