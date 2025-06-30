'use client'
import Image from "next/image";
import Link from "next/link";

import aboutImage from '../public/images/about-img.png'

export default function About() {
  return (
    <section className="py-14 bg-white font-vazirmatn" dir="rtl">
      {/* ⬆️ سکشن اصلی، پس‌زمینه سفید، فونت فارسی، راست به چپ */}

      <div className="container max-w-7xl mx-auto px-4">
        {/* ⬆️ ظرف مرکزی با حداکثر عرض مناسب دسکتاپ و پدینگ */}

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ⬆️ برای موبایل ستونی، برای دسکتاپ دو ستونه در کنار هم */}

          {/* باکس عکس */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={aboutImage}
              width={445}
              height={608}
              className="rounded-2xl shadow-md object-cover max-w-full h-auto"
              alt="about-image"
              priority
            />
            {/* ⬆️ عکس درباره ما با زاویه گرد، سایه، سازگار با موبایل، لود سریع */}
          </div>

          {/* باکس جزییات */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-4 border-emerald-500 inline-block pb-1">
                لورم ایپسوم متن
              </h2>
            </div>
            <p className="text-gray-600 leading-8 mb-8 text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
              شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
              شناخت
            </p>
            <Link
              href="/menu"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition"
            >
              مشاهده بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
