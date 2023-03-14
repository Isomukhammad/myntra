import { useLang } from '@/hooks/useLang';
import Link from 'next/link';
import { useEffect } from 'react';

const PagePath = ({ paths }) => {
    const lang = useLang();
    return (
        <nav className='flex flex-row gap-2'>
            <Link href="/" className='text-placeholder font-semibold'>{lang?.["Главная"]}</Link>
            {
                paths?.map((item, index) => (
                    <div key={index}>
                        {
                            item.url ? (
                                <div className='flex flex-row gap-2'>
                                    <svg viewBox='0 0 24 24' width={20} height={20} className="fill-none stroke-placeholder">
                                        <use xlinkHref='#arr-right'></use>
                                    </svg>
                                    <Link
                                        href={`/${item.url}`}
                                    >
                                        <p className='text-placeholder font-semibold'>{item.name}</p>
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-row gap-2">
                                    <svg viewBox='0 0 24 24' width={20} height={20} className="fill-none stroke-purpleMain">
                                        <use xlinkHref='#arr-right'></use>
                                    </svg>
                                    <p className="font-semibold text-purpleMain">{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </nav>
    )
}

export default PagePath;