import React, { useCallback, useEffect, useState, useRef } from "react";

const InputRange = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    const handleMinValueChange = (event) => {
        let value = event.target.value;

        if (value.charAt(0) == 0) {
            value = value.substring(1)
        }

        if (value.length === 0) {
            value = 0;
        }

        if (value >= min && value < maxVal) {
            setMinVal(value);
        }
    }

    const handleMaxValueChange = (event) => {
        let value = event.target.value;


        if (value > minVal && value <= max) {
            setMaxVal(value);
        }
    }

    return (
        <div className='Input-range flex flex-col gap-7 h-7'>
            <div className='flex items-center justify-center relative h-fit'>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className='Input-range__thumb z-[3]'
                />

                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className='Input-range__thumb z-[4]'
                />

                <div className='relative w-full'>
                    <div className='h-1 rounded-sm absolute z-[1] bg-gray-300 w-full' />
                    <div ref={range} className='h-1 rounded-sm absolute z-[2] bg-purpleMain' />
                </div>
            </div>
        </div>
    );
};

export default InputRange;