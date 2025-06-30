"use client"
import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import HeroSlider from "./HeroSlider"
import heroImage from "../public/images/hero-bg.jpg"
import Image from "next/image"

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? (
        // فقط در صفحه اصلی: تصویر + ناوبری + اسلایدر
        <div className="relative min-h-[360px] w-full">
          <Image
            src={heroImage}
            alt="hero-image"
            fill
            priority
            className="object-cover brightness-90 -z-10"
          />
          <Navbar />
          <div className="absolute left-0 right-0 top-20 z-10">
            <HeroSlider />
          </div>
        </div>
      ) : (
        // بقیه صفحات: فقط ناوبری
        <Navbar />
      )}
    </>
  )
}
