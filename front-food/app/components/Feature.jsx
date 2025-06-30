import { BiPhone, BiTimeFive, BiMap } from "react-icons/bi";

export default function Feature() {
  // ترجیحاً محتوای کارت‌ها را در آرایه بذار (قابل توسعه و ترجمه)
  const cards = [
    {
      icon: <BiPhone className="text-white text-3xl mx-auto" />,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      icon: <BiTimeFive className="text-white text-3xl mx-auto" />,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      icon: <BiMap className="text-white text-3xl mx-auto" />,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 font-vazirmatn" dir="rtl">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4 gap-y-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full md:w-1/3 px-4 flex"
            >
              <div className="bg-white rounded-xl shadow-lg transition hover:shadow-2xl flex-1 flex flex-col items-center text-center p-7">
                <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-5 shadow-md">
                  {card.icon}
                </div>
                <p className="font-bold mb-2 text-lg text-gray-800">{card.title}</p>
                <p className="text-gray-600 text-sm leading-7">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
