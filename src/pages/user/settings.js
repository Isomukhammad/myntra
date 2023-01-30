import ProfileLayout from "@/layouts/Profile/Profile";

const Settings = () => {
    return (
        <ProfileLayout>
            <div className="py-10 px-6 lg:px-10 flex flex-col gap-10 bg-white rounded-sm">
                <h1 className="font-semibold text-xl lg:text-2xl">Настройка уведомлений</h1>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-between">
                        <p className="font-medium text-[15px] lg:text-[18px]">Получать push-уведомления</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-[52px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleMain"></div>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-medium text-[15px] lg:text-[18px]">Получать push-уведомления</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-[52px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleMain"></div>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-medium text-[15px] lg:text-[18px]">Получать push-уведомления</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-[52px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleMain"></div>
                        </label>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="font-medium text-[15px] lg:text-[18px]">Получать push-уведомления</p>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-[52px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purpleMain"></div>
                        </label>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}

export default Settings;