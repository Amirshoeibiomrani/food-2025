"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Marker from "../../public/images/marker-icon.png";
export default function Map() {
  useEffect(() => {
    let mapInstance = null;

    import("leaflet").then((L) => {
      // پاکسازی در صورت وجود نقشه قبلی
      const el = document.getElementById("contact-map");
      if (!el) return;
      el.innerHTML = "";
      const mapDiv = document.createElement("div");
      mapDiv.id = "map";
      mapDiv.style.height = "340px";
      el.appendChild(mapDiv);

      // ساخت نقشه
      mapInstance = L.map("map").setView([35.700105, 51.400394], 14);

      // tile layer
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(mapInstance);

      // آیکون دلخواه مارکر
      const customIcon = L.icon({
        iconUrl: "/images/marker-icon.png", // مسیر تصویرت در public
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png", // سایه پیش‌فرض یا دلخواه
        iconSize: [44, 44], // سایز آیکون [عرض,ارتفاع] (بسته به PNG/SVG خودت تغییر بده)
        iconAnchor: [22, 44], // نقطه‌ی پین که روی مکان قرار گیرد [x, y]
        popupAnchor: [0, -35], // مکان باز شدن popup نسبت به آیکون
      });

      // مارکر با آیکون دلخواه و popup سفارشی
      L.marker([35.700105, 51.400394], {
        icon: customIcon,
      })
        .addTo(mapInstance)
        .bindPopup(
          `
          <div style="direction:rtl;text-align:right;min-width:150px">
            <strong>آژانس وب‌پروگ</strong>
            <div class="text-xs mt-2 text-gray-600">تهران، خیابان X، پلاک Y</div>
            <a href="tel:021123456" class="block text-green-700 hover:underline text-sm mt-2">تماس: ۰۲۱۱۲۳۴۵۶</a>
          </div>
        `
        )
        .openPopup();
    });

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  return (
    <div
      id="contact-map"
      className="w-full h-[340px] rounded-lg overflow-hidden"
    />
  );
}
