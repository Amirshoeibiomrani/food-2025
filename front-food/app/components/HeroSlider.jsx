"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import Link from "next/link"

const slides = [
  {
    title: "لورم ایپسوم متن ساختگی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    btn: "سفارش",
    href: "/menu",
  },
  // ... دو اسلاید دیگر با متن مشابه
  {
    title: "لورم ایپسوم متن ساختگی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ...",
    btn: "سفارش",
    href: "/menu",
  },
  {
    title: "لورم ایپسوم متن ساختگی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ...",
    btn: "سفارش",
    href: "/menu",
  },
]

export default function HeroSlider() {
  return (
    <section className="w-full relative overflow-hidden font-vazirmatn" dir="rtl">
      <div className="mx-auto max-w-5xl min-h-[320px] flex items-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          loop
          pagination={{ clickable: true }}
          className="w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-start md:w-2/3 gap-4 p-6">
                <h2 className="mb-2 text-2xl md:text-3xl font-extrabold text-green-800">{slide.title}</h2>
                <p className="text-gray-700 mb-3">{slide.desc}</p>
                <Link href={slide.href} className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded px-6 py-2 transition">
                  {slide.btn}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
