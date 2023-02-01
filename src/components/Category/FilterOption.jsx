const { Disclosure, Transition } = require("@headlessui/react");

const FilterOption = ({ title, children, open }) => {
    if (open === null) {
        open = true;
    }

    return (
        <Disclosure defaultOpen={open}>
            {
                ({ open }) => (
                    <>
                        <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold">
                            <span>{title}</span>
                            <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                        </Disclosure.Button>
                        <Transition
                            enter="transition-all duration-300 ease-in-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-1"
                            leave="transition-all duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7">
                                {children}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )
            }
        </Disclosure >
    )
}

export default FilterOption;