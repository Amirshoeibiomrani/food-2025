import { getFetch } from "@/utils/fetch";
import Product from "../products/Product";
import Paginate from "./Paginate";

export default async function ProductsList({ params }) {
  // پارامترها شاید آبجکت باشد. اگر string نبود، stringify بکنید:
  // const query = typeof params === "string" ? params : new URLSearchParams(params).toString();
  const data = await getFetch(`/menu?${params}`);

  // اگر params آبجکت است (نه فقط string: مثلاً {page: 2, category: 4})، باید قبل از ارسال به url رشته‌اش کنید:
  // const query = typeof params === "string" ? params : new URLSearchParams(params).toString();
  // const data = await getFetch(`/menu?${query}`);
  return (
    <section className="max-w-7xl mx-auto py-10 px-4 font-vazirmatn" dir="rtl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Paginate links={data.meta.links} />
    </section>
  );
}
