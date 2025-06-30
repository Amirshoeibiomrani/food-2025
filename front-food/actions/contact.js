"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";

/**
 * اکشن ثبت فرم تماس با ما (Next.js Form Actions)
 * @param {Object} state - وضعیت فعلی فرم
 * @param {FormData} formData - داده‌های ارسالی فرمساز
 */
async function create(state, formData) {
  // دریافت و پاک‌سازی مقادیر ورودی
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const subject = formData.get('subject')?.trim();
  const text = formData.get('text')?.trim();

  // اعتبارسنجی فیلدها
  if (!name || !email || !subject || !text) {
    return {
      status: "error",
      message: "تمام موارد فرم تماس با ما الزامی است."
    }
  }

  try {
    // ارسال اطلاعات به API
    const data = await postFetch('/contact-us', { name, email, subject, text });

    if (data.status === 'success') {
      return {
        status: data.status,
        message: "پیام شما با موفقیت ثبت شد",
      }
    } else {
      return {
        status: data.status,
        message: handleError(data.message),
      }
    }
  } catch (err) {
    // هندل خطاهای ارتباطی سرور/API
    return {
      status: "error",
      message: "خطا در ارسال اطلاعات. لطفا بعدا تلاش کنید."
    }
  }
}

export { create }
//  اگر عمل fetch دچار مشکل شود و catch نداشته باشید، سرور اکشن کرش می‌کند. بهتر است کد را در try/catch بگذارید:

