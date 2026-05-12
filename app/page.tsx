import Image from "next/image";

const whatsappPhone = "905386257134";
const callPhone1 = "905386226734";
const callPhone2 = "905386257134";

const displayWhatsapp = "0538 625 71 34";
const displayCall1 = "0538 622 67 34";
const displayCall2 = "0538 625 71 34";

const address =
  "Cumhuriyet Mahallesi Demokrasi Caddesi No: 25/27A Çekmeköy";

const whatsappOrder = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  "Merhaba, Kervan Döner için sipariş vermek istiyorum."
)}`;

const featuredProducts = [
  {
    name: "Zurna Döner",
    desc: "Bol döner, sıcak lavaş, doyurucu porsiyon.",
    tag: "En sevilen",
    image: "/ilk.jpg",
  },
  {
    name: "Kaşarlı Zurna Döner",
    desc: "Eriyen kaşar lezzetiyle daha yoğun döner keyfi.",
    tag: "Bol lezzet",
    image: "/gorsel2.jpg",
  },
  {
    name: "Pilav Üstü Döner",
    desc: "Sıcak pilav üzerinde bol porsiyon döner.",
    tag: "Tabak lezzeti",
    image: "/gorsel3.jpg",
  },
  {
    name: "Dönerli Patso",
    desc: "Patates, döner ve soslarla hızlı doyuran seçenek.",
    tag: "Sokak lezzeti",
    image: "/gorsel4.jpg",
  },
];

const menuGroups = [
  {
    title: "Döner Çeşitleri",
    items: [
      "Zurna Döner",
      "Kaşarlı Zurna Döner",
      "Yarım Döner",
      "Tombik Döner",
      "3 Çeyrek Döner",
      "Pilav Üstü Döner",
    ],
  },
  {
    title: "Patso & Sosisli",
    items: ["Patso", "Sosisli", "Sosisli Patso", "Dönerli Patso"],
  },
  {
    title: "Izgara & Sıcak Lezzetler",
    items: ["Köfte", "Sucuk", "Çorba"],
  },
  {
    title: "Yan Lezzetler",
    items: ["İçecekler"],
  },
];

const advantages = [
  "Sıcak servis",
  "Doyurucu porsiyon",
  "Hızlı sipariş",
  "Hafta sonu açığız",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff6e7] text-[#2b1200]">
      <section className="relative px-4 pb-16 pt-5 sm:px-8 lg:px-20">
        <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-yellow-300/60 blur-3xl" />
        <div className="absolute right-[-100px] top-40 h-96 w-96 rounded-full bg-red-300/50 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-[1.7rem] border border-orange-200 bg-white/85 px-4 py-4 shadow-xl shadow-orange-100 backdrop-blur-xl sm:rounded-full sm:px-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 sm:text-xs">
              Kervan Döner
            </p>
            <h1 className="text-base font-black sm:text-2xl">
              Çekmeköy Döner & Sıcak Lezzetler
            </h1>
          </div>

          <div className="hidden items-center gap-6 text-sm font-black text-[#6b3410] md:flex">
            <a href="#menu" className="hover:text-red-600">
              Menü
            </a>
            <a href="#lezzetler" className="hover:text-red-600">
              Lezzetler
            </a>
            <a href="#iletisim" className="hover:text-red-600">
              İletişim
            </a>
          </div>

          <a
            href={`tel:+${callPhone1}`}
            className="rounded-full bg-red-600 px-4 py-3 text-xs font-black text-white shadow-lg shadow-red-200 transition hover:scale-105 sm:px-6 sm:text-sm"
          >
            Ara
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-black text-red-700 sm:text-sm">
              Günlük sıcak döner • Patso • Köfte • Çorba • Hafta sonu açığız
            </p>

            <h2 className="max-w-3xl text-[2.55rem] font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Sıcak, bol porsiyon ve{" "}
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                doyuran
              </span>{" "}
              lezzetler
            </h2>

            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#6b3410] sm:text-lg">
              Kervan Döner’de zurna dönerden pilav üstüne, patso çeşitlerinden
              köfte ve çorbaya kadar hızlı, sıcak ve iştah açıcı seçenekler
              seni bekliyor. Hafta sonu da açık yapımızla sipariş ve servis için
              ulaşabilirsiniz.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href={whatsappOrder}
                target="_blank"
                className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-7 py-4 text-center font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1"
              >
                WhatsApp’tan Sipariş Ver
              </a>

              <a
                href="#menu"
                className="rounded-2xl border border-orange-300 bg-white px-7 py-4 text-center font-black text-red-700 shadow-md transition hover:bg-orange-50"
              >
                Menüyü İncele
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-orange-200 bg-white/80 p-4 text-center shadow-md shadow-orange-100"
                >
                  <p className="text-sm font-black text-[#4b2108]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-[3rem] bg-orange-300 blur-3xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-2xl shadow-orange-200 sm:rounded-[3rem]">
              <Image
                src="/ilk.jpg"
                alt="Kervan Döner sıcak servis"
                width={1000}
                height={750}
                priority
                className="h-[360px] w-full rounded-[1.8rem] object-cover sm:h-[520px] sm:rounded-[2.5rem]"
              />

              <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
                <p className="text-xs font-black text-red-600">
                  Bugünün öne çıkanı
                </p>
                <p className="text-lg font-black"> Zurna Döner</p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black text-red-600">
                  Hafta sonu da açığız
                </p>
                <h3 className="mt-1 text-2xl font-black">Kervan usulü döner</h3>
                <p className="mt-1 text-sm font-semibold text-[#7a3a10]">
                  Çıtır lavaş, doyurucu içerik ve hızlı sipariş kolaylığı.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-1 shadow-2xl shadow-orange-200">
          <div className="grid gap-4 rounded-[1.7rem] bg-white/90 p-5 sm:grid-cols-3 sm:p-7">
            <div>
              <p className="text-sm font-black text-red-600">Hızlı Sipariş</p>
              <h3 className="mt-1 text-2xl font-black">Acıktıysan bekleme</h3>
            </div>
            <p className="text-sm font-semibold leading-6 text-[#7a3a10] sm:col-span-2">
              Döner, patso, köfte, sucuk, çorba ve içecek seçenekleriyle
              pratik, sıcak ve doyurucu bir menü sunuyoruz. Hafta sonu da
              sipariş için ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section id="lezzetler" className="px-4 py-14 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-red-600">
                Öne Çıkanlar
              </p>
              <h3 className="mt-3 text-4xl font-black sm:text-5xl">
                Göze de mideye de hitap eden lezzetler
              </h3>
            </div>
            <p className="max-w-md text-sm font-semibold leading-6 text-[#7a3a10]">
             
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-orange-100 transition hover:-translate-y-2"
              >
                <div className="relative h-60">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-black text-red-600 shadow-lg">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-xl font-black">{item.name}</h4>
                  <p className="mt-2 min-h-[48px] text-sm font-semibold leading-6 text-[#7a3a10]">
                    {item.desc}
                  </p>
                  <a
                    href={whatsappOrder}
                    target="_blank"
                    className="mt-5 block rounded-2xl bg-orange-100 px-5 py-3 text-center text-sm font-black text-red-700 transition hover:bg-red-600 hover:text-white"
                  >
                    Sipariş Sor
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="px-4 py-14 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-5 shadow-2xl shadow-orange-100 sm:p-8 lg:p-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-600">
              Menü
            </p>
            <h3 className="mt-3 text-4xl font-black sm:text-5xl">
              Kervan Döner Menü
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-6 text-[#7a3a10]">
              Ana lezzetleri sade, okunabilir ve mobilde rahat seçilebilir
              kartlarla göster.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {menuGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[2rem] border border-orange-200 bg-[#fff9ef] p-5"
              >
                <h4 className="mb-4 text-xl font-black text-red-700">
                  {group.title}
                </h4>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <span className="font-black">{item}</span>
                      <span className="h-3 w-3 shrink-0 rounded-full bg-orange-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="px-4 py-14 pb-28 sm:px-8 lg:px-20 lg:pb-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.2rem] bg-gradient-to-br from-red-600 to-orange-500 p-6 text-white shadow-2xl shadow-orange-200 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-100">
              İletişim & Konum
            </p>
            <h3 className="mt-3 text-4xl font-black">Kervan Döner’e Ulaşın</h3>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-bold text-yellow-100">WhatsApp Sipariş</p>
                <a
                  href={whatsappOrder}
                  target="_blank"
                  className="mt-1 block text-2xl font-black"
                >
                  {displayWhatsapp}
                </a>
              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-bold text-yellow-100">Telefon</p>
                <div className="mt-2 space-y-2">
                  <a
                    href={`tel:+${callPhone1}`}
                    className="block text-2xl font-black"
                  >
                    {displayCall1}
                  </a>
                  <a
                    href={`tel:+${callPhone2}`}
                    className="block text-2xl font-black"
                  >
                    {displayCall2}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
  <p className="text-sm font-bold text-yellow-100">Çalışma Saatleri</p>

  <div className="mt-3 space-y-2">
    <div className="flex items-center justify-between border-b border-white/20 pb-2">
      <span className="font-semibold">Hafta İçi</span>
      <span className="font-black">09:00 - 22:00</span>
    </div>

    <div className="flex items-center justify-between border-b border-white/20 pb-2">
      <span className="font-semibold">Cumartesi</span>
      <span className="font-black">09:00 - 22:00</span>
    </div>

    <div className="flex items-center justify-between rounded-xl bg-yellow-300 px-4 py-3 text-[#7a1f00] shadow-lg">
      <span className="font-black">Pazar</span>
      <span className="font-black">AÇIĞIZ • 09:00 - 22:00</span>
    </div>
  </div>
</div>

              <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <p className="text-sm font-bold text-yellow-100">Adres</p>
                <p className="mt-1 text-lg font-bold leading-7">{address}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  className="rounded-2xl bg-white px-5 py-4 text-center font-black text-red-700 transition hover:scale-[1.02]"
                >
                  Konumu Aç
                </a>
                <a
                  href={whatsappOrder}
                  target="_blank"
                  className="rounded-2xl bg-[#23c55e] px-5 py-4 text-center font-black text-white transition hover:scale-[1.02]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.2rem] bg-white p-2 shadow-xl shadow-orange-100">
            <iframe
              title="Kervan Döner Konum"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              className="h-[430px] w-full rounded-[1.7rem] border-0 sm:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-orange-200 bg-white px-5 py-8 text-center text-sm font-semibold text-[#8a4518]">
        © 2026 Kervan Döner. Tüm hakları saklıdır.
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden">
        <a
          href={`tel:+${callPhone1}`}
          className="rounded-2xl bg-red-600 py-4 text-center text-sm font-black text-white"
        >
          Ara
        </a>
        <a
          href={whatsappOrder}
          target="_blank"
          className="rounded-2xl bg-green-500 py-4 text-center text-sm font-black text-white"
        >
          Sipariş Ver
        </a>
      </div>

      <a
        href={whatsappOrder}
        target="_blank"
        className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-black/30 transition hover:scale-105 lg:block"
      >
        WhatsApp Sipariş
      </a>
    </main>
  );
}