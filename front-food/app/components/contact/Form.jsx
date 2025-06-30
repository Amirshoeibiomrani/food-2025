"use client"

import { create } from '@/actions/contact'
import SubmitButton from "../SubmitButton"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function FormContact() {
  const [state, formAction] = useActionState(create, {})

  // نمایش پیام موفقیت/خطا بعد ارسال
  useEffect(() => {
    if (state?.message) {
      toast(state.message, { type: state.status }) // معمولاً status = 'success' یا 'error'
    }
  }, [state])

  return (
    <div className="w-full font-vazirmatn" dir="rtl">
      <form action={formAction} className="space-y-4">
        {/* نام */}
        <div>
          <input
            name="name"
            type="text"
            placeholder="نام و نام خانوادگی"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-right font-medium shadow-sm transition"
            required
          />
        </div>
        {/* ایمیل */}
        <div>
          <input
            name="email"
            type="email"
            placeholder="ایمیل"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-right font-medium shadow-sm transition"
            required
          />
        </div>
        {/* موضوع */}
        <div>
          <input
            name="subject"
            type="text"
            placeholder="موضوع پیام"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-right font-medium shadow-sm transition"
            required
          />
        </div>
        {/* متن پیام */}
        <div>
          <textarea
            name="text"
            rows={5}
            placeholder="متن پیام"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-right font-medium shadow-sm transition resize-y"
            required
          />
        </div>
        {/* دکمه ارسال */}
        <div className="flex justify-end pt-2 text-emerald-700 font-semibold">
          <SubmitButton title="ارسال پیام" />
        </div>
      </form>
    </div>
  )
}
