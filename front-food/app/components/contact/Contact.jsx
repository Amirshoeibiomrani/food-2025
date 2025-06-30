"use client"
import dynamic from "next/dynamic"
import FormContact from "./Form"

const Map = dynamic(() => import('./Map'), { ssr: false })

export default function Contact() {
  return (
    <section className="py-14 font-vazirmatn bg-white" dir="rtl">
      <div className="container max-w-5xl mx-auto px-4">
        {/* تیتر صفحه */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2">تماس با ما</h2>
          {/* توضیح یا زیر تیتر اگر نیاز باشه */}
          {/* <p className="text-gray-600">در صورت داشتن سوال...</p> */}
        </div>
        {/* بخش فرم و نقشه: ریسپانسیو دو ستونه در دسکتاپ، تک ستونه موبایل */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* فرمساز تماس */}
          <div className="bg-green-50 rounded-lg shadow p-6">
            <FormContact />
          </div>
          {/* نقشه */}
          <div className="bg-white rounded-lg shadow p-2 min-h-[320px] flex items-center">
            <div className="w-full h-72 md:h-full rounded overflow-hidden">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
