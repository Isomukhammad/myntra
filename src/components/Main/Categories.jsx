import { useRouter } from "next/router";
import Image from "next/image";
import useSWR from 'swr'
import fetcher from "@/utils/fetcher.utils";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";

const Categories = () => {
    const router = useRouter();
    const [imgError, setImgError] = useState(false);
    const { data: categories, error: categoriesError, isValidating: categoriesValidating } = useSWR(
        ["/categories?quantity=8", router.locale],
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (!categories || categoriesError || categoriesValidating) {
        return (
            <>
                <div className="mt-5 grid grid-cols-2 gap-2 lg:hidden">
                    {[...Array(2).keys()].map((item) => (
                        <Skeleton key={item} height={220} />
                    ))}
                </div>
                <div className="hidden mt-5 grid-cols-6 gap-2 lg:grid">
                    {[...Array(6).keys()].map((item) => (
                        <Skeleton key={item} height={220} />
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="Categories mt-5 flex flex-row overflow-x-scroll md:grid md:grid-cols-3 xl:flex xl:justify-between">
            {
                categories.data.map((category) => (
                    <div
                        key={category.id}
                        className="Categories__tab group"
                    >
                        <div>
                            <Image
                                src={imgError ? '/images/placeholder.jpg' : category.img}
                                alt={category.img}
                                width="120"
                                height="120"
                                className="h-[152px]"
                                onError={() => setImgError(true)}
                            />
                            <p className="g group-hover:text-purpleMain transition duration-300">{category.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Categories;