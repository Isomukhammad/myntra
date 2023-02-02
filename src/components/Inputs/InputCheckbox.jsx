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
                className="border-none ring-purpleMain focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor={name} className="flex flex-row items-center text-sm gap-1 text-[15px]">{name}
                {
                    quantity ? (
                        <span className='text-textSecondary'>({quantity})</span>
                    ) : (null)
                }
            </label>
        </div>
    )
}

export default InputCheckbox;