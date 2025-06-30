'use client'
// الزاماً این خط باید باشد تا این کامپوننت سمت کلاینت اجرا شود (برای تعاملات، event، state و ...)

import { getBlurDataURL, numberFormat } from "@/utils/helper";
// توابع کمکی: یکی برای تولید blurDataURL لودینگ تصویر، یکی برای فرمت‌سازی عدد قیمت (با کاما و ...)

import Image from "next/image";
// کامپوننت تصویر بهینه Next.js که از قابلیت‌های سئو و لود سریع‌تر بهره‌مند است

import { BsCartFill } from "react-icons/bs"; // آیکون سبد خرید از react-icons/bs

// دریافت props: انتظار یک شی product
export default function Product({ product }) {
    return (
        // جعبه اصلی کارت محصول با استایل مدرن و سایه
        <div className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-xl transition-all duration-200">
            {/* لایه داخلی کارت */}
            <div>
                {/* بخش نمایش عکس محصول */}
                <div className="bg-gray-100 aspect-video overflow-hidden">
                    {/* تصویر محصول با لود شدن تدریجی (blur) و نسبت ابعاد صحیح */}
                    <Image 
                        src={product.primary_image} // لینک عکس اصلی محصول
                        width={100} // مقدار پیشنهادی برای لحاظ Next
                        height={65} // اگر fill استفاده نشود الزامی هست
                        sizes="100vw" // مناسب موبایل و ریسپانسیو
                        className="w-full h-auto object-cover" // پهنای کامل با نسبت ابعاد
                        alt="product-image" // آلت برای سئو و دسترسی‌پذیری
                        placeholder="blur"
                        blurDataURL={getBlurDataURL()} // نمایش تار قبل از لود کامل تصویر
                    />
                </div>

                {/* توضیحات و اطلاعات محصول */}
                <div className="flex flex-col gap-2 p-4">
                    {/* نام محصول */}
                    <h5 className="text-lg font-bold text-gray-700">{product.name}</h5>

                    {/* توضیح کوتاه محصول */}
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    {/* line-clamp-2: حداکثر دو خط، اگر بیشتر بود با ... پایان داده می‌شود */}

                    {/* قیمت و گزینه افزودن به سبد خرید */}
                    <div className="flex items-center justify-between mt-2">
                        {/* بخش قیمت */}
                        <h6 className="text-base font-semibold text-emerald-700 flex items-center gap-2">
                            {/* اگر محصول تخفیف داشته باشد */}
                            {product.is_sale ? (
                                <>
                                    {/* قیمت فروش ویژه */}
                                    <span>{numberFormat(product.sale_price)}</span>
                                    {/* قیمت قدیمی خط خورده و بی‌رنگ */}
                                    <del className="text-gray-400 text-sm">{numberFormat(product.price)}</del>
                                </>
                            ) : (
                                // در غیر این صورت فقط قیمت عادی نمایش داده می‌شود
                                <span>{numberFormat(product.price)}</span>
                            )}
                            {/* واحد پول همیشه نمایش داده می‌شود */}
                            <span className="text-xs text-gray-600 mr-1">تومان</span>
                        </h6>
                        {/* دکمه افزودن به سبد خرید همراه با آیکون */}
                        <button className="bg-emerald-600 hover:bg-emerald-700 rounded-full p-2 text-white transition">
                            <BsCartFill className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
