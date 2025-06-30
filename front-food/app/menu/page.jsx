import { getFetch } from "@/utils/fetch";
import CategoriesList from "../components/menu/CategoriesList";
import Loading from "../components/menu/Loading";
import ProductsList from "../components/menu/ProductsList";
import Search from "../components/menu/Search";
import Sort from "../components/menu/Sort";
import { Suspense } from "react";

export default async function MenuPage({ searchParams }) {
  // گرفتن دسته‌بندی‌ها (کالای ناهمزمان)
  const categories = await getFetch('/categories');

  // پاکسازی searchParams برای جلوگیری از خطای Symbol
  const safeSearchParams = Object.fromEntries(
    Object.entries(searchParams || {})
      .filter(([key, value]) =>
        typeof key === 'string' &&
        (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')
      )
  );

  // ساخت کوئری پارامترها
  const params = new URLSearchParams(safeSearchParams);

  return (
    <section 
      className="font-vazirmatn bg-white min-h-screen py-8" 
      dir="rtl"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ستون سایدبار دسته‌بندی، جستجو، سورت */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <Search />
            <hr className="border-gray-200" />
            <CategoriesList categories={categories} />
            <hr className="border-gray-200" />
            <Sort />
          </aside>

          {/* نمایش لیست محصولات */}
          <main className="w-full lg:w-3/4">
            <Suspense key={params.toString()} fallback={<Loading />}>
              <ProductsList params={params.toString()} />
            </Suspense>
          </main>
        </div>
      </div>
    </section>
  );
}
