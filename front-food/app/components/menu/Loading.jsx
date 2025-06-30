export default function Loading() {
    return (
        <div className="flex justify-center items-center h-96">
            {/* 
                flex: فعال کردن فلکس برای قرار دادن آیتم‌ها کنار هم
                justify-center: وسط‌چین کردن افقی
                items-center: وسط‌چین کردن عمودی
                h-96: ارتفاع ۲۴rem (میتونی از h-screen یا هر ارتفاعی که بخواهی استفاده کنی)
            */}
            <span className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></span>
            {/* 
                یک لودینگ اسپینر بسیار سبک و زیبا با Tailwind:
                w-12 h-12: سایز دایره
                border-4: قطر حاشیه
                border-emerald-600: رنگ اصلی (سبز)
                border-t-transparent: قسمت بالا شفاف برای چرخش بهتر
                rounded-full: دایره کامل
                animate-spin: چرخش ممتد
            */}
        </div>
    )
}
