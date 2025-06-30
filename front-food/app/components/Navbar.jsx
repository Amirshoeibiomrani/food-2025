"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // لینک‌های منو
  const navItems = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/menu", label: "منو" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "تماس باما" },
  ]

  return (
    <nav className="w-full font-vazirmatn bg-white/80 backdrop-blur sticky top-0 z-20" dir="rtl">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* برند */}
        <Link href="/" className="text-lg md:text-2xl font-extrabold text-green-600">webprog.io</Link>
        
        {/* لینک‌ها */}
        <ul className="hidden md:flex gap-5 lg:gap-8 items-center">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`py-1 px-3 rounded transition ${pathname === item.href ? "bg-green-100 text-green-700 font-bold" : "hover:text-green-700"}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* عملیات سمت چپ */}
        <div className="flex items-center gap-3">
          {/* سبد خرید */}
          <Link href="/cart" className="relative group">
            <FiShoppingCart size={26} className="text-green-600" />
            {/* بج یا تعداد سفارش (چند عدد ثابت) */}
            <span className="absolute top-0 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center border border-white">3</span>
          </Link>
          {/* دکمه ورود */}
          <Link href="/login" className="hidden md:inline-block px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition">
            ورود
          </Link>
          
          {/* همبرگری موبایل */}
          <button className="md:hidden p-2" onClick={() => setOpen(o => !o)} aria-label="منوی موبایل">
            <FiMenu size={26} />
          </button>
        </div>
      </div>

      {/* منوی موبایل - فقط در موبایل */}
      {open &&
        <ul className="flex flex-col md:hidden bg-white shadow-md rounded gap-2 py-4 mx-2 my-2" dir="rtl">
          {navItems.map((item) => (
            <li key={item.href} onClick={() => setOpen(false)}>
              <Link
                href={item.href}
                className={`block py-2 px-4 rounded transition text-right ${pathname === item.href ? "bg-green-100 text-green-700 font-bold" : "hover:text-green-700"}`}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/login" className="block py-2 px-4 rounded bg-green-600 text-white font-bold hover:bg-green-700">
              <FiUser className="inline ml-1" /> ورود
            </Link>
          </li>
        </ul>
      }
    </nav>
  )
}
