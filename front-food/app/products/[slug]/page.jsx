import Product from "@/components/products/Product";
import { getFetch } from "@/utils/fetch";
import { getBlurDataURL, numberFormat, salePercent } from "@/utils/helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // استایل Swiper
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

export default async function ProductPage({ params }) {
  // دریافت اطلاعات محصول
  const product = await getFetch(`/products/${decodeURI(params.slug)}`);
  // دریافت محصولات تصادفی (برای نمایش زیر محصول اصلی)
  const randomProduct = await getFetch('/random-products?count=4');

  return (
    <>
      <section className="font-vazirmatn bg-white min-h-[60vh] py-8" dir="rtl">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* توضیحات و عملیات محصول */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
              <h3 className="font-bold text-2xl mb-4">{product.names}</h3>
              <h5 className="mb-3 flex items-center gap-2 flex-wrap">
                {product.is_sale ? (
                  <>
                    <span className="font-extrabold text-primary">{numberFormat(product.sale_price)}</span>
                    <del className="text-gray-400">{numberFormat(product.price)}</del>
                  </>
                ) : (
                  <span className="font-extrabold text-primary">{numberFormat(product.price)}</span>
                )}
                <span className="text-sm">تومان</span>
                {product.is_sale &&
                  <span className="bg-red-50 text-red-500 rounded px-3 py-1 text-xs font-semibold mr-2">
                    {salePercent(product.price, product.sale_price)}٪ تخفیف
                  </span>
                }
              </h5>
              <p className="text-gray-800 leading-relaxed">{product.description}</p>

              {/* عملیات افزودن به سبد خرید و شمارنده */}
              <div className="mt-6 flex items-center gap-6">
                <button className="bg-green-600 text-white rounded px-5 py-2 hover:bg-green-500 transition font-bold text-lg">
                  افزودن به سبد خرید
                </button>
                <div className="flex items-center border border-gray-200 rounded px-2 py-1 bg-gray-50">
                  <button className="text-xl px-2 hover:text-primary font-bold focus:outline-none">+</button>
                  <div className="px-2 text-base">1</div>
                  <button className="text-xl px-2 hover:text-primary font-bold focus:outline-none">-</button>
                </div>
              </div>
            </div>

            {/* اسلایدر تصاویر محصول با Swiper */}
            <div className="lg:w-1/2 w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={product.images.length > 0}
                className="rounded-lg shadow-md bg-gray-50"
                dir="rtl"
              >
                {/* تصویر اصلی */}
                <SwiperSlide>
                  <Image
                    src={product.primary_image}
                    width={464}
                    height={309}
                    alt="تصویر اصلی محصول"
                    className="object-cover w-full rounded-lg"
                    placeholder="blur"
                    blurDataURL={getBlurDataURL()}
                    priority
                  />
                </SwiperSlide>
                {/* سایر تصاویر */}
                {product.images.map(img => (
                  <SwiperSlide key={img.id}>
                    <Image
                      src={img.image}
                      width={464}
                      height={309}
                      alt="تصویر محصول"
                      className="object-cover w-full rounded-lg"
                      placeholder="blur"
                      blurDataURL={getBlurDataURL()}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* محصولات تصادفی */}
      <section className="font-vazirmatn my-10 bg-gray-50/50 py-6" dir="rtl">
        <div className="container max-w-6xl mx-auto px-4">
          <h4 className="text-xl font-bold mb-4 text-gray-700">محصولات مشابه</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {randomProduct.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
