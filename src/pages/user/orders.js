import ProfileLayout from "@/layouts/Profile/Profile";

const Orders = () => {
    return (
        <ProfileLayout>
            <div className="pt-10 px-6 bg-white rounded-sm flex flex-col gap-10 lg:px-10">
                <h1 className="text-xl font-semibold lg:text-2xl">Последние заказы</h1>
                <div className="flex flex-col gap-10">
                    <div className="relative flex flex-col gap-10 border-b border-b-bg pb-10 lg:flex-row lg:items-center lg:justify-between lg:pr-[80px] lg:gap-20">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:w-full">
                            <div className="flex flex-col gap-2 font-semibold">
                                <h1 className="text-sm min-[360px]:text-lg">Заказ № 165189 - 8198</h1>
                                <p className="py-2 px-4 bg-success w-fit rounded-full text-white">Заказ оплачен</p>
                            </div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Доставка по адресу:<br />ботанический сад, ул. Абидова, 232 A</div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Заказ сделан:<br /> пн, 17 ноября 2022</div>
                        </div>
                        <div className="bg-primaryBg py-2 font-semibold text-purpleMain flex flex-col gap-1 items-center rounded-sm lg:min-w-[160px]">
                            <svg viewBox="0 0 24 24" width={40} height={40} className="fill-purpleMain"><use xlinkHref="#accelaration" /></svg>
                            <p>Уже в пути</p>
                        </div>
                        <svg viewBox="0 0 24 24" width={32} height={32} fill="#828282" className="absolute top-2 right-4 cursor-pointer lg:top-0"><use xlinkHref="#more" /></svg>
                    </div>
                    <div className="relative flex flex-col gap-10 border-b border-b-bg pb-10 lg:flex-row lg:items-center lg:justify-between lg:pr-[80px] lg:gap-20">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:w-full">
                            <div className="flex flex-col gap-2 font-semibold">
                                <h1 className="text-lg">Заказ № 165189 - 8198</h1>
                                <p className="py-2 px-4 bg-success w-fit rounded-full text-white">Заказ оплачен</p>
                            </div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Доставка по адресу:<br />ботанический сад, ул. Абидова, 232 A</div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Заказ сделан:<br /> пн, 17 ноября 2022</div>
                        </div>
                        <div className="bg-primaryBg py-2 font-semibold text-purpleMain flex flex-col gap-1 items-center rounded-sm lg:min-w-[160px]">
                            <svg viewBox="0 0 24 24" width={40} height={40} className="fill-purpleMain"><use xlinkHref="#accelaration" /></svg>
                            <p>Уже в пути</p>
                        </div>
                        <svg viewBox="0 0 24 24" width={32} height={32} fill="#828282" className="absolute top-2 right-4 cursor-pointer lg:top-0"><use xlinkHref="#more" /></svg>
                    </div>
                    <div className="relative flex flex-col gap-10 border-b border-b-bg pb-10 lg:flex-row lg:items-center lg:justify-between lg:pr-[80px] lg:gap-20">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:w-full">
                            <div className="flex flex-col gap-2 font-semibold">
                                <h1 className="text-lg">Заказ № 165189 - 8198</h1>
                                <p className="py-2 px-4 bg-success w-fit rounded-full text-white">Заказ оплачен</p>
                            </div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Доставка по адресу:<br />ботанический сад, ул. Абидова, 232 A</div>
                            <div className="font-semibold text-[15px] text-textSecondary lg:text-[16px]">Заказ сделан:<br /> пн, 17 ноября 2022</div>
                        </div>
                        <div className="bg-primaryBg py-2 font-semibold text-purpleMain flex flex-col gap-1 items-center rounded-sm lg:min-w-[160px]">
                            <svg viewBox="0 0 24 24" width={40} height={40} className="fill-purpleMain"><use xlinkHref="#accelaration" /></svg>
                            <p>Уже в пути</p>
                        </div>
                        <svg viewBox="0 0 24 24" width={32} height={32} fill="#828282" className="absolute top-2 right-4 cursor-pointer lg:top-0"><use xlinkHref="#more" /></svg>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default Orders;