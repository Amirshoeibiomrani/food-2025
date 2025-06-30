"use client"
// ⬆️ این خط به Next.js می‌گوید که این کامپوننت باید فقط سمت کلاینت اجرا شود.
// react-tabs برای کارکرد، نیاز به تعاملات و state دارد، پس باید "use client" بگذاریم.

import Link from "next/link";     // ⬅️ لینک‌ داخلی با رندر سمت کلاینت و بدون رفرش صفحه
import Product from "./Product";  // ⬅️ کامپوننتی که قبلاً برای نمایش یک محصول نوشتی
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // ⬅️ مولفه‌های اصلی تب
import 'react-tabs/style/react-tabs.css'; // ⬅️ استایل پیش‌فرض کتابخانه‌ی react-tabs، اگر فقط Tailwind زدی این خط اختیاری است

// تعریف کامپوننت اصلی محصولات با تب‌بندی
export default function ProductsTab({ tabList, tabPanel }) {
    // ⚡ پارامترهای ورودی (propها): 
    // - tabList: آرایه‌ای از نام هر تب (مثلا ['پیتزا', 'سالاد', ...])
    // - tabPanel: آرایه‌ای از آرایه‌هاست، یعنی برای هر تب یک لیست محصولات (به همان ترتیب!)

    return (
        // سکشن والد با پس‌زمینه سفید، پدینگ بالا و پایین و فونت فارسی
        <section className="bg-white pb-20 pt-10 font-vazirmatn">
            {/* container سنتر شده، با حداکثر عرض و فاصله افقی */}
            <div className="max-w-7xl mx-auto px-4">
                {/* عنوان بالای تب‌ها */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
                        منو محصولات
                    </h2>
                </div>

                {/* کامپوننت تب‌ها با کتابخانه react-tabs */}
                <Tabs
                    // هر وقت یک تب انتخاب شود، این کلاس‌ها به خودش اضافه می‌کند
                    selectedTabClassName="!bg-emerald-600 !text-white"
                    // ! مخصوص Tailwind: یعنی این رنگ سبز و متن سفید "حتماً" اعمال شوند
                >
                    {/* لیست تب‌ها */}
                    <TabList>
                        {/* ul برای دکمه‌های تب، با flex و راست‌چین و gap جهت فاصله بین تب‌ها */}
                        <ul className="flex flex-row flex-wrap justify-center gap-2 rtl">
                            {tabList.map((list, index) => (
                                // هر تب (Tab) یک دکمه است
                                <Tab
                                    key={index} // کلید یونیک برای رندر کارآمد
                                    className="
                                        px-5 py-2 
                                        rounded-full      // حالت قرص‌وار برای ظاهر زیبا
                                        cursor-pointer     // نشانگر دست
                                        text-base 
                                        bg-gray-100        // خاکستری روشن پیش‌فرض
                                        hover:bg-emerald-50// هاور سبز ملایم
                                        text-gray-800 
                                        transition
                                    "
                                >
                                    {list}
                                    {/* اسم هر تب (از tabList) */}
                                </Tab>
                            ))}
                        </ul>
                    </TabList>

                    {/* محتویات هر تب */}
                    <div className="mt-8">
                        {tabPanel.map((panel, index) => (
                            <TabPanel key={index}>
                                {/* نمایش لیست محصولات مربوط به این تب */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                                    {/* تا موبایل یک ستون، تبلت دو ستون، دسکتاپ سه ستون */}
                                    {panel.map(product => (
                                        <Product key={product.id} product={product} />
                                        // نمایش هر محصول با کامپوننت Product (قبلاً ساختی)
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>

                {/* دکمه بزرگ پایین برای "مشاهده بیشتر" (مثلاً صفحه لیست کامل) */}
                <div className="flex justify-center mt-10">
                    <Link 
                        href="/menu"
                        // دکمه سبز با هاور سبز تیره، فونت بولد، گرد، سایز مناسب
                        className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-full text-white text-base font-bold transition"
                    >
                        مشاهده بیشتر
                    </Link>
                </div>

            </div>
        </section>
    )
}
