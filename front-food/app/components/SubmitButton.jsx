"use client"
// ⬆️ این خط به Next.js می‌گوید که این کامپوننت باید سمت کلاینت (Browser) اجرا شود

import { useFormStatus } from 'react-dom'
// ⬆️ ایمپورت هوک اختصاصی useFormStatus برای مدیریت وضعیت فرم‌های Server Actions در React/Next.js 13+
// با این هوک می‌توان فهمید درخواست فرم در حال ارسال است یا نه (pending)

export default function SubmitButton({ title, style }) {
    // ⬇️ کد وضعیت فرم را استخراج می‌کند (pending = اگر فرم در حال ارسال است، true می‌شود)
    const { pending } = useFormStatus();

    return (
        <button
            type='submit'         
            disabled={pending}   //⬅️ وقتی فرم در حال ارسال است، دکمه غیرفعال شود  
            className={style}    //⬅️ امکان ارسال کلاس دلخواه از props
        >
            {/* عنوان دکمه (مثلاً "ارسال") */}
            {title}

            {/* اگر فرم در حال ارسال است، یک spinner لودینگ کوچک کنار متن نمایش داده شود */}
            {pending && <div className="spinner-border spinner-border-sm ms-2"></div>}
            {/* 
                ➡️ spinner-border یک کلاس مربوط به Bootstrap است. 
                اگر از Tailwind استفاده می‌کنی، این را با یک spinner سفارشی یا کتابخانه‌ای دیگر جایگزین کن.
                ms-2: مارژین استارت (margin-left) کوچک برای فاصله بین اسپینر و متن
            */}
        </button>
    )
}
