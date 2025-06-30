"use client"
// ⬆️ این عبارت را برای اطمینان از اجرای کلاینت اضافه می‌کنیم (هوک‌های روتینگ فقط سمت کلاینت کار می‌کنند).

import { usePathname, useRouter, useSearchParams } from "next/navigation";
// ⬆️ هوک‌های روتینگ جدید Next.js 13+ برای بررسی URL و مدیریت پارامترها بدون ریفرش.

export default function CategoriesList({ categories }) {
    // ⬇️ مسیر فعلی صفحه (بدون کوئری پارامتر).
    const pathname = usePathname();
    // ⬇️ شیء router برای ناوبری سمت کلاینت (جابه‌جایی URL).
    const router = useRouter();
    // ⬇️ آرگومان‌های کوئری (مانند ?category=2&page=1).
    const searchParams = useSearchParams();

    // ⬇️ تابع تغییر دسته‌بندی (مثلاً وقتی کاربر روی لیست کلیک می‌کند)
    function handleClick(id) {
        // یک شیء مدیریت پارامتر جدید می‌سازیم از روی مقادیر فعلی.
        const params = new URLSearchParams(searchParams);
        // مقدار category را با id جدید جایگزین می‌کنیم.
        params.set('category', id);
        // اگر وجود داشت پارامتر page را حذف کن (برای ریست کردن صفحه هنگام تغییر دسته).
        params.delete('page');

        // تغییر URL بدون رفرش (replace برای نگه‌داشتن سابقه مرورگر استفاده می‌شود).
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="filter-list">
            {/* عنوان لیست فیلتر */}
            <div className="form-label">
                دسته بندی
            </div>
            {/* لیست دسته‌بندی‌ها */}
            <ul>
                {categories.map(category => (
                 <li
  key={category.id}
  onClick={() => handleClick(category.id)}
  className={
    (searchParams.has('category') && searchParams.get('category') == category.id
      ? "bg-emerald-600 text-white font-bold"
      : "bg-gray-100 text-gray-800 hover:bg-emerald-50 cursor-pointer"
    )
    + " my-2 px-4 py-2 rounded-full transition"
  }
>
  {category.name}
</li>

                ))}
            </ul>
        </div>
    )
}
