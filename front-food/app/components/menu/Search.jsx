"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react"
import { BsSearch, BsX } from "react-icons/bs";

export default function Search() {
    const [term, setTerm] = useState('');
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()

    // اگر سرچ فعال است، مقدار term را همگام کن (برای NewTab و ...)
    useEffect(() => {
        if (searchParams.has('search')) {
            setTerm(searchParams.get('search') || '');
        } else {
            setTerm('');
        }
    }, [searchParams]);

    function handleSearch(remove) {
        const params = new URLSearchParams(searchParams);
        params.delete('page');

        if (remove) {
            params.delete('search');
            setTerm('');
        } else {
            params.set('search', term)
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="w-full max-w-[400px] mx-auto my-6 font-vazirmatn" dir="rtl">
            <label className="block mb-2 text-base font-bold text-gray-700">جستجو</label>
            <div className="relative flex items-center">
                <input
                  type="text"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="نام محصول ..."
                  className="w-full rounded-full border border-gray-300 py-2 pr-10 pl-10 text-right text-base outline-none focus:border-emerald-500 transition"
                />
                {/* آیکون سرچ */}
                <button
                  onClick={() => term !== '' && handleSearch()}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-2 transition ${
                    term === '' ? "opacity-50 pointer-events-none" : ""
                  }`}
                  aria-label="جستجو"
                >
                  <BsSearch size={20} />
                </button>
                {/* اگر سرچ فعال بود (در آدرس)، ضربدر برای حذف نشان بده */}
                {searchParams.has('search') && (
                  <button
                    onClick={() => handleSearch(true)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-gray-600 rounded-full p-2 transition"
                    aria-label="حذف جستجو"
                  >
                    <BsX size={22} />
                  </button>
                )}
            </div>
        </div>
    );
}
