/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    // همه دامین‌هایی که تصاویر ازشون لود میشن رو اینجا وارد کن
    domains: ["localhost"],
    // اگر روی پورت خاصه (مثل: 8000) اشکالی نداره فقط هام دامنه مهمه، پورت رو خودش قبول میکنه.
  },
};

export default nextConfig;
