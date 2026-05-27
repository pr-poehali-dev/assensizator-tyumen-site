import { useState } from "react";
import Icon from "@/components/ui/icon";

const TRUCK_IMG = "https://cdn.poehali.dev/projects/9a874782-8dd8-40c9-8c4b-fe8afe6c07cd/files/bffb8002-36b6-4ad7-a256-3dbecd08040a.jpg";

const services = [
  {
    icon: "Droplets",
    title: "Откачка септиков",
    desc: "Полная очистка септика любого объёма. Удаляем осадок, промываем камеры. Выезд в течение 2-4 часов. Работаем с любыми типами септиков — пластик, кирпич, бетон.",
    details: ["Объём от 1 до 50 м³", "Промывка стенок камер", "Дезинфекция по запросу", "Акт выполненных работ"],
  },
  {
    icon: "Container",
    title: "Откачка выгребных ям",
    desc: "Быстрая откачка выгребных ям на дачах, в частных домах и СНТ. Работаем в труднодоступных местах — длина шланга до 40 метров.",
    details: ["Длина шланга до 40 м", "Работа в любое время суток", "Без запаха и грязи", "Вывоз на сертифицированный полигон"],
  },
  {
    icon: "Waves",
    title: "Откачка канализации",
    desc: "Прочистка и откачка бытовой и промышленной канализации. Устраняем засоры, откачиваем отстойники, прочищаем трубы под давлением.",
    details: ["Промышленная гидропромывка", "Прочистка труб до Ø300 мм", "Видеодиагностика по запросу", "Работаем с юрлицами"],
  },
  {
    icon: "Trash2",
    title: "Откачка подвалов и луж",
    desc: "Экстренная откачка затопленных подвалов, погребов, котлованов. Также откачиваем крупные лужи на территории предприятий и дачных участков.",
    details: ["Экстренный выезд 24/7", "Грязная вода, ил, взвесь", "Мощность насоса до 10 000 л/час", "Сушка и дезинфекция по запросу"],
  },
  {
    icon: "Gauge",
    title: "Откачка колодцев",
    desc: "Чистка и откачка питьевых и дренажных колодцев. Полная выкачка, очистка от ила и грязи, дезинфекция питьевых колодцев.",
    details: ["Питьевые и дренажные", "Очистка стенок от биопленки", "Дезинфекция хлором", "Анализ воды по запросу"],
  },
  {
    icon: "Truck",
    title: "Илосос КО-507",
    desc: "Работаем на специализированной машине КО-507 объёмом 10 м³ с мощным вакуумным насосом. Имеются все необходимые разрешения и документы.",
    details: ["Объём цистерны 10 м³", "Вакуумный насос 2 000 об/мин", "Все разрешения и лицензии", "Договор с полигоном"],
  },
];

const prices = [
  { service: "Откачка септика до 5 м³", price: "1 500 ₽", note: "выезд включён" },
  { service: "Откачка септика 5–10 м³", price: "2 500 ₽", note: "за рейс" },
  { service: "Откачка выгребной ямы", price: "1 200 ₽", note: "до 4 м³" },
  { service: "Откачка подвала / лужи", price: "2 000 ₽", note: "до 5 м³" },
  { service: "Прочистка канализации", price: "от 1 800 ₽", note: "зависит от длины" },
  { service: "Чистка питьевого колодца", price: "3 500 ₽", note: "включая дезинфекцию" },
  { service: "Дополнительный м³", price: "300 ₽/м³", note: "сверх нормы" },
  { service: "Ночной выезд (22:00–06:00)", price: "+500 ₽", note: "к стоимости рейса" },
];

const reviews = [
  {
    name: "Александр К.",
    rating: 5,
    text: "Вызвал в субботу вечером — приехали через 3 часа. Откачали всё чисто, без запаха. Цена точно по прайсу, без лишних накруток. Рекомендую!",
    date: "15 мая 2025",
  },
  {
    name: "Светлана М.",
    rating: 5,
    text: "Затопило подвал после дождей. Позвонила утром — к обеду уже всё откачали. Ребята профессиональные, работали аккуратно. Спасибо огромное!",
    date: "3 апреля 2025",
  },
  {
    name: "Игорь В.",
    rating: 5,
    text: "Второй раз пользуюсь услугами. Стабильное качество — приезжают вовремя, делают аккуратно. Дача в 40 км от города — доехали без проблем.",
    date: "20 марта 2025",
  },
  {
    name: "Татьяна Р.",
    rating: 4,
    text: "Хорошая работа. Единственное — пришлось немного подождать (был занят другой объект), но предупредили сразу. В целом довольна.",
    date: "11 февраля 2025",
  },
];

const faqs = [
  {
    q: "Как быстро вы приедете?",
    a: "Стандартное время выезда — 2–4 часа. В экстренных случаях (затопленный подвал, переполненный септик) стараемся приехать в течение 1–2 часов. Работаем 7 дней в неделю, без выходных и праздников.",
  },
  {
    q: "Как вы вывозите отходы?",
    a: "Все отходы вывозятся на лицензированные полигоны для приёма жидких бытовых отходов. У нас есть договор с полигоном и все необходимые разрешения. Мы не сливаем отходы в поле или канавы.",
  },
  {
    q: "Можно ли вызвать ночью?",
    a: "Да, мы работаем круглосуточно. Ночной выезд (с 22:00 до 06:00) стоит на 500 рублей больше стандартного тарифа.",
  },
  {
    q: "Откачиваете ли вы за городом?",
    a: "Да, выезжаем по Тюмени и Тюменской области. Стоимость выезда за город рассчитывается индивидуально — позвоните, уточним цену для вашего адреса.",
  },
  {
    q: "Нужно ли мне что-то подготовить?",
    a: "Обеспечьте свободный подъезд для машины (длина 8 метров, ширина 2.5 метра). Если крышка септика или люк засыпаны, раскопайте их заранее — это ускорит работу.",
  },
  {
    q: "Выдаёте ли документы для организаций?",
    a: "Да, работаем с юридическими лицами и ИП. Предоставляем договор, акт выполненных работ и накладную. Принимаем оплату на расчётный счёт.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= count ? "#FFD600" : "#3A3A3A" }}>★</span>
      ))}
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#0D0D0D", color: "#fff", minHeight: "100vh", fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* HEADER */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: "rgba(13,13,13,0.96)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #2E2E2E"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, backgroundColor: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="Truck" size={16} style={{ color: "#0D0D0D" }} />
              </div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: "0.05em" }}>
                АССЕНИЗАТОР <span style={{ color: "#FFD600" }}>ТЮМЕНЬ</span>
              </span>
            </div>
            <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden md:flex">
              {[["#services","Услуги"],["#prices","Цены"],["#reviews","Отзывы"],["#faq","Вопросы"],["#contacts","Контакты"]].map(([href, label]) => (
                <a key={href} href={href} style={{ color: "#888", textDecoration: "none", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", transition: "color 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#FFD600")}
                  onMouseOut={e => (e.currentTarget.style.color = "#888")}>
                  {label}
                </a>
              ))}
            </nav>
            <a href="tel:+73452000000" style={{
              backgroundColor: "#FFD600", color: "#0D0D0D",
              fontFamily: "'Oswald', sans-serif", fontWeight: 700,
              padding: "8px 20px", fontSize: 14, letterSpacing: "0.05em",
              textDecoration: "none", transition: "background 0.2s"
            }}>
              ПОЗВОНИТЬ
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 64 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={TRUCK_IMG} alt="Ассенизаторская машина" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0D0D0D 40%, rgba(13,13,13,0.7) 70%, rgba(13,13,13,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0D0D0D 0%, transparent 50%)" }} />
        </div>

        {/* Yellow accent line */}
        <div style={{ position: "absolute", top: 0, bottom: 0, right: "33%", width: 2, backgroundColor: "#FFD600", opacity: 0.4 }} />

        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <div style={{ maxWidth: 650 }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,214,0,0.3)", backgroundColor: "rgba(255,214,0,0.08)", padding: "8px 16px", marginBottom: 32 }}>
              <div style={{ width: 8, height: 8, backgroundColor: "#FFD600", borderRadius: "50%" }} />
              <span style={{ color: "#FFD600", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Тюмень и область
              </span>
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1.0, textTransform: "uppercase", margin: "0 0 24px" }}>
              Откачка<br />
              <span style={{ color: "#FFD600" }}>септиков</span><br />
              и выгребных ям<br />
              <span style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#ccc", fontWeight: 400 }}>в вашем районе</span>
            </h1>

            <p style={{ color: "#ccc", fontSize: 18, marginBottom: 8, fontWeight: 300, lineHeight: 1.6 }}>
              Откачка луж, колодцев, подвалов
            </p>
            <p style={{ color: "#777", fontSize: 15, marginBottom: 40, fontWeight: 300 }}>
              Быстрый выезд · Честные цены · Работаем без выходных
            </p>

            {/* CTA */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="tel:+73452000000" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "#FFD600", color: "#0D0D0D",
                fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18,
                padding: "16px 32px", textDecoration: "none", letterSpacing: "0.03em",
                boxShadow: "0 0 0 0 rgba(255,214,0,0.4)", animation: "pulse-btn 2s infinite"
              }}>
                <Icon name="Phone" size={20} style={{ color: "#0D0D0D" }} />
                ПОЗВОНИТЬ
              </a>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.25)", color: "#fff",
                fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 18,
                padding: "16px 32px", textDecoration: "none", letterSpacing: "0.03em",
                transition: "border-color 0.2s, color 0.2s"
              }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "#FFD600"; e.currentTarget.style.color = "#FFD600"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}>
                <Icon name="MessageCircle" size={20} />
                НАПИСАТЬ В МАКС
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, borderTop: "1px solid #2E2E2E", paddingTop: 32, flexWrap: "wrap" }}>
              {[["24/7", "Без выходных"], ["2–4ч", "Время выезда"], ["10+", "Лет на рынке"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 28, color: "#FFD600" }}>{num}</div>
                  <div style={{ color: "#666", fontSize: 13, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YELLOW STRIP */}
      <section style={{ backgroundColor: "#FFD600", padding: "14px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 32px" }}>
            {["✓ Лицензированный вывоз отходов", "✓ Шланг до 40 метров", "✓ Договор и документы", "✓ Работаем с юрлицами", "✓ Без скрытых доплат"].map(item => (
              <span key={item} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 14, color: "#0D0D0D", letterSpacing: "0.05em" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "96px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ height: 2, width: 48, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em" }}>Что мы делаем</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,5vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Наши <span style={{ color: "#FFD600" }}>услуги</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: 24,
                transition: "border-color 0.3s", cursor: "default"
              }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,214,0,0.4)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "#2E2E2E")}>
                <div style={{ width: 48, height: 48, backgroundColor: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon name={s.icon} size={22} style={{ color: "#FFD600" }} />
                </div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18, textTransform: "uppercase", marginBottom: 12, margin: "0 0 12px" }}>{s.title}</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.details.map((d, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#ccc" }}>
                      <div style={{ width: 6, height: 6, backgroundColor: "#FFD600", flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" style={{ padding: "96px 0", backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ height: 2, width: 48, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em" }}>Прозрачные тарифы</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,5vw,3rem)", textTransform: "uppercase", margin: "0 0 12px" }}>
              Цены на <span style={{ color: "#FFD600" }}>услуги</span>
            </h2>
            <p style={{ color: "#666", fontSize: 16, fontWeight: 300 }}>Точная цена рассчитывается при звонке — зависит от объёма и адреса</p>
          </div>

          <div style={{ border: "1px solid #2E2E2E", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
            {prices.map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "20px 24px", borderBottom: "1px solid #2E2E2E",
                borderRight: i % 2 === 0 ? "1px solid #2E2E2E" : "none",
                transition: "background 0.2s"
              }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1C1C1C")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{p.service}</div>
                  <div style={{ color: "#555", fontSize: 13, marginTop: 2 }}>{p.note}</div>
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20, color: "#FFD600", marginLeft: 16, whiteSpace: "nowrap" }}>{p.price}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, backgroundColor: "#1C1C1C", border: "1px solid rgba(255,214,0,0.2)", padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20, textTransform: "uppercase" }}>Не знаете точную цену?</div>
              <div style={{ color: "#666", fontSize: 14, marginTop: 4 }}>Позвоните — рассчитаем за 1 минуту</div>
            </div>
            <a href="tel:+73452000000" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#FFD600", color: "#0D0D0D",
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15,
              padding: "12px 24px", textDecoration: "none", whiteSpace: "nowrap"
            }}>
              <Icon name="Phone" size={18} style={{ color: "#0D0D0D" }} />
              УЗНАТЬ ЦЕНУ
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "96px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ height: 2, width: 48, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em" }}>Мнения клиентов</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: 16 }}>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,5vw,3rem)", textTransform: "uppercase", margin: 0 }}>
                Отзывы <span style={{ color: "#FFD600" }}>клиентов</span>
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <span key={i} style={{ color: "#FFD600", fontSize: 20 }}>★</span>)}</div>
                <span style={{ color: "#ccc", fontSize: 14 }}>4.9 из 5</span>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: 24, transition: "border-color 0.2s" }}
                onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,214,0,0.3)")}
                onMouseOut={e => (e.currentTarget.style.borderColor = "#2E2E2E")}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, backgroundColor: "rgba(255,214,0,0.15)", border: "1px solid rgba(255,214,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#FFD600", fontSize: 16 }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                      <div style={{ color: "#555", fontSize: 12, marginTop: 2 }}>{r.date}</div>
                    </div>
                  </div>
                  <StarRating count={r.rating} />
                </div>
                <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "96px 0", backgroundColor: "#0D0D0D" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ height: 2, width: 48, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em" }}>FAQ</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,5vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Частые <span style={{ color: "#FFD600" }}>вопросы</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: "1px solid #2E2E2E", overflow: "hidden" }}>
                <button
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "none", border: "none", color: "#fff", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1C1C1C")}
                  onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 500, fontSize: 15, paddingRight: 16 }}>{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} style={{ color: "#FFD600", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid #2E2E2E" }}>
                    <p style={{ color: "#888", lineHeight: 1.7, fontSize: 14, margin: "16px 0 0" }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "96px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
              <div style={{ height: 2, width: 48, backgroundColor: "#FFD600" }} />
              <span style={{ color: "#FFD600", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em" }}>Свяжитесь с нами</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "clamp(2rem,5vw,3rem)", textTransform: "uppercase", margin: 0 }}>
              Контакты
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { icon: "Phone", title: "Телефон", value: "+7 (3452) 00-00-00", sub: "Звонок бесплатный", href: "tel:+73452000000" },
                { icon: "MessageCircle", title: "WhatsApp / Telegram", value: "+7 (900) 000-00-00", sub: "Напишите — ответим быстро", href: "#" },
                { icon: "MapPin", title: "Зона работы", value: "Тюмень и область", sub: "Выезжаем в любой район" },
                { icon: "Clock", title: "Режим работы", value: "Круглосуточно, 7 дней", sub: "Без перерывов и выходных" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 48, height: 48, backgroundColor: "rgba(255,214,0,0.08)", border: "1px solid rgba(255,214,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={c.icon} size={22} style={{ color: "#FFD600" }} />
                  </div>
                  <div>
                    <div style={{ color: "#555", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 4 }}>{c.title}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseOver={e => (e.currentTarget.style.color = "#FFD600")}
                        onMouseOut={e => (e.currentTarget.style.color = "#fff")}>{c.value}</a>
                    ) : (
                      <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 20 }}>{c.value}</div>
                    )}
                    <div style={{ color: "#555", fontSize: 13, marginTop: 2 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: "#1C1C1C", border: "1px solid #2E2E2E", padding: 40, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", marginBottom: 16, lineHeight: 1.2 }}>
                  Нужна откачка <span style={{ color: "#FFD600" }}>прямо сейчас?</span>
                </h3>
                <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15, marginBottom: 32 }}>
                  Позвоните или напишите — приедем в течение 2–4 часов. Цену скажем сразу, без скрытых доплат.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:+73452000000" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  backgroundColor: "#FFD600", color: "#0D0D0D",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 18,
                  padding: "16px", textDecoration: "none"
                }}>
                  <Icon name="Phone" size={22} style={{ color: "#0D0D0D" }} />
                  ПОЗВОНИТЬ
                </a>
                <a href="#" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  backgroundColor: "transparent", border: "2px solid #3A3A3A", color: "#fff",
                  fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 18,
                  padding: "16px", textDecoration: "none", transition: "border-color 0.2s, color 0.2s"
                }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = "#FFD600"; e.currentTarget.style.color = "#FFD600"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = "#3A3A3A"; e.currentTarget.style.color = "#fff"; }}>
                  <Icon name="MessageCircle" size={22} />
                  НАПИСАТЬ В МАКС
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #1C1C1C", padding: "32px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, backgroundColor: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="Truck" size={14} style={{ color: "#0D0D0D" }} />
              </div>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.05em" }}>
                АССЕНИЗАТОР <span style={{ color: "#FFD600" }}>ТЮМЕНЬ</span>
              </span>
            </div>
            <div style={{ color: "#333", fontSize: 12, textAlign: "center" }}>
              © 2025 Ассенизатор Тюмень · Откачка септиков и выгребных ям
            </div>
            <a href="tel:+73452000000" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 14, color: "#FFD600", textDecoration: "none" }}>
              +7 (3452) 00-00-00
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON (mobile) */}
      <div style={{ position: "fixed", bottom: 24, right: 16, zIndex: 50 }} className="md:hidden">
        <a href="tel:+73452000000" style={{
          display: "flex", alignItems: "center", gap: 8,
          backgroundColor: "#FFD600", color: "#0D0D0D",
          fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15,
          padding: "12px 20px", textDecoration: "none",
          boxShadow: "0 4px 20px rgba(255,214,0,0.3)"
        }}>
          <Icon name="Phone" size={18} style={{ color: "#0D0D0D" }} />
          ПОЗВОНИТЬ
        </a>
      </div>

      <style>{`
        @keyframes pulse-btn {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,214,0,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(255,214,0,0); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}