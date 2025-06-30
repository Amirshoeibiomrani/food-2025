"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Paginate({ links }) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    function handlePage(page) {
        const params = new URLSearchParams(searchParams);
        params.set('page', page);
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <nav className="flex justify-center my-8 font-vazirmatn" dir="rtl">
            <ul className="flex gap-2 select-none">
                {links.slice(1, -1).map((link, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handlePage(link.label)}
                            className={
                                (link.active
                                    ? "bg-emerald-600 text-white font-bold"
                                    : "bg-gray-100 text-gray-800 hover:bg-emerald-100"
                                ) +
                                " rounded-full min-w-[40px] px-4 py-2 transition duration-150 shadow text-base"
                            }
                            // غیر فعال کردن دکمه برای صفحه فعال:
                            disabled={link.active}
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
