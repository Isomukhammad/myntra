import { useState } from 'react';

const InputCheckbox = ({ name, handleChange, quantity }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className='Input-checkbox flex flex-row gap-2 relative font-medium'>
            <input
                type="checkbox"
                id={name}
                name={name}
                onChange={(event) => {
                    // handleChange(event);
                    setChecked(!checked);
                }}
            />
            <label htmlFor={name} className="flex flex-row items-center text-sm gap-1">{name} <span className='text-textSecondary'>({quantity})</span></label>
            {checked ? (
                <div className='absolute h-6 w-6 pointer-events-none'>
                    <svg
                        viewBox='0 0 24 24'
                        width={24}
                        height={24}
                        stroke="white"
                        fill="none"
                    >
                        <use xlinkHref='#done_round'></use>
                    </svg>
                </div>
            ) : null}
        </div>
    )
}

export default InputCheckbox;