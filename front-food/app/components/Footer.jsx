"use client"; 
// این خط باعث می‌شود کامپوننت فقط سمت کلاینت (مرورگر) اجرا شود. 
// برای استفاده از هوک‌ها و تعاملات لازم است.

import React from "react";
import Link from "next/link";
import {
  BsGeoAltFill,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
// آیکون‌ها را از react-icons (کتابخانه آیکون‌ها) ایمپورت می‌کنیم. اینجا نسخه bootstrap آنها استفاده شده.

export default function Footer() {
  return (
    // بخش اصلی فوتر با پس‌زمینه تیره و متن سفید و فاصله عمودی. فونت Vazirmatn برای فارسی.
    <footer
      dir="rtl"
      className="bg-gray-800 text-white py-12 font-vazirmatn"
      style={{ fontFamily: '"Vazirmatn", sans-serif' }}
    >
      {/* کانتینر اصلی فوتر، دارای لیمیت عرض */}
      <div className="max-w-7xl mx-auto px-4">
        {/* ردیف بالا: بخش‌بندی سه‌تایی و ریسپانسیو */}
        <div className="flex flex-wrap -mx-4">
          {/* --- ستون اول: تماس با ما --- */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex flex-col items-center justify-center">
            {/* عنوان بخش */}
            <h4 className="text-xl font-semibold mb-4">تماس با ما</h4>
            
            {/* لیست راه‌های تماس */}
            <div className="flex flex-col items-center gap-4">
              {/* لینک صفحه تماس */}
              <Link
                href="/contact"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <BsGeoAltFill className="w-5 h-5" />
                <span>آدرس</span>
              </Link>
              {/* لینک تماس تلفنی - کلیک برای شماره‌گیری در موبایل */}
              <Link
                href="tel:09100000000"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <BsTelephoneFill className="w-5 h-5" />
                {/* نمایش شماره به صورت ltr (چپ به راست) برای بهتر دیده شدن اعداد */}
                <span dir="ltr" className="font-sans tracking-wider">
                  0910 000 0000
                </span>
              </Link>
              {/* لینک ایمیل - کلیک برای باز شدن ایمیل */}
              <Link
                href="mailto:demo@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white"
              >
                <BsEnvelopeFill className="w-5 h-5" />
                <span>AMIR FASTFOOD SHOP@gmail.com</span>
              </Link>
            </div>
          </div>
          {/* --- ستون دوم: درباره ما و شبکه‌های اجتماعی --- */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex flex-col items-center justify-center">
            {/* لوگوی برند/نام فروشگاه */}
            <Link
              href="/"
              className="text-2xl font-bold text-white inline-block"
            >
              AMIR FASTFOOD SHOP
            </Link>
            {/* توضیح کوتاه در مورد مجموعه */}
            <p className="text-gray-300 mt-4 leading-relaxed text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>

            {/* ردیف آیکون شبکه‌های اجتماعی */}
            <div className="flex mt-4 gap-4 justify-start flex-row-reverse">
              {/* هر آیکون به شبکه اجتماعی مربوطه لینک شده */}
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <BsFacebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <BsTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <BsLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <BsInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://pinterest.com"
                className="text-gray-300 hover:text-white"
                target="_blank" rel="noopener noreferrer"
              >
                <BsPinterest className="w-5 h-5" />
              </Link>
            </div>
          </div>
          {/* --- ستون سوم: ساعت کاری --- */}
          <div className="w-full md:w-1/3 px-4 flex flex-col items-center justify-center gap-2.5">
            <h4 className="text-xl font-semibold mb-4">ساعت کاری</h4>
            <p className="text-gray-300">هر روز</p>
            <p className="text-gray-300">10.00 صبح تا 12.00 شب</p>
          </div>
        </div>
        {/* --- انتهای فوتر: متن حقوقی --- */}
        <div className="mt-10 border-t border-gray-700 pt-10 text-center text-gray-400">
          <p>AMIR FASTFOOD SHOP</p>
        </div>
      </div>
    </footer>
  );
}
