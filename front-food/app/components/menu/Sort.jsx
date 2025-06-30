"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  { value: 'max', label: 'بیشترین قیمت' },
  { value: 'min', label: 'کمترین قیمت' },
  { value: 'bestseller', label: 'پرفروش‌ترین' },
  { value: 'sale', label: 'با تخفیف' },
];

export default function Sort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get('sortBy');

  function handleClick(type) {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', type);
    params.delete('page');
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <fieldset
      className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-4 mb-6 font-vazirmatn"
      dir="rtl"
    >
      <legend className="block mb-3 text-base font-bold text-gray-700">مرتب‌سازی</legend>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer text-gray-700 text-sm hover:bg-emerald-50 px-2 py-1 rounded"
          >
            <input
              type="radio"
              name="sortBy"
              value={opt.value}
              checked={selected === opt.value}
              onChange={() => handleClick(opt.value)}
              className="accent-emerald-500 w-4 h-4"
              aria-checked={selected === opt.value}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
