const bookingUrl = "https://yandex.ru/maps/org/studiya_manikyura_galiny_poltevoy/13567197542/prices/?booking%5Bpage%5D=menu&booking%5Bpermalink%5D=13567197542&ll=37.555706%2C55.862040&tab=prices&z=15";
const mapUrl = "https://yandex.ru/maps/org/studiya_manikyura_galiny_poltevoy/13567197542/";
const reviewsUrl = "https://yandex.ru/maps/org/studiya_manikyura_galiny_poltevoy/13567197542/reviews/";

const gallery = [
  { src: "/assets/g1.webp", alt: "Работа Галины Полтевой — 1" },
  { src: "/assets/g2.webp", alt: "Работа Галины Полтевой — 2" },
  { src: "/assets/g3.webp", alt: "Работа Галины Полтевой — 3" },
  { src: "/assets/g4.webp", alt: "Работа Галины Полтевой — 4" },
  { src: "/assets/g5.webp", alt: "Работа Галины Полтевой — 5" },
  { src: "/assets/g6.webp", alt: "Работа Галины Полтевой — 6" },
];

export default {
  brand: { name: "Galina Nails", subtitle: "Студия маникюра", monogram: "G" },
  master: {
    name: "Галина Полтева",
    dative: "Галине",
    genitive: "Галины",
    monogram: "G",
    profession: "мастер маникюра",
    heroTitle: "Галина Полтева — мастер маникюра",
    heroCopy: "Маникюр, укрепление, наращивание и дизайн ногтей с онлайн-записью.",
    experienceYears: "",
    experienceAria: "Опыт мастера",
    aboutTitle: "Галина Полтева — мастер своей студии",
    aboutLead: "Галина Полтева — мастер маникюра и владелица собственной ногтевой студии.",
    aboutParagraphs: [
      "В актуальном прайсе — комбинированный маникюр, комплексы с укреплением, наращивание и дизайн ногтей.",
      "Записаться можно онлайн через Яндекс и YCLIENTS, а уточнить детали — в Telegram, WhatsApp или по телефону.",
    ],
    skills: ["Маникюр и укрепление", "Наращивание", "Дизайн ногтей"],
  },
  location: {
    city: "Москва",
    metro: "м. Селигерская",
    cityMetro: "Москва · м. Селигерская",
    address: "Москва, Селигерская улица, 2, этаж 1, офис 15",
    mapCardAddress: "Селигерская улица, 2",
    schedule: "ежедневно 10:00–22:00",
    scheduleCapitalized: "Ежедневно 10:00–22:00",
    latitude: 55.862040,
    longitude: 37.555706,
  },
  contacts: {
    phoneDisplay: "+7 993 615-23-69",
    phoneHref: "tel:+79936152369",
    personalTelegramUrl: "https://t.me/GaliBaliNails",
    channelTelegramUrl: "",
  },
  extraContacts: {
    whatsappUrl: "https://wa.me/79936152369",
    vkUrl: "",
  },
  links: {
    bookingUrl,
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl,
    mapUrl,
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.862040%2C37.555706&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.555706%2C55.862040&mode=search&oid=13567197542&ol=biz&z=16",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.555706%2C55.862040&z=16&l=map&pt=37.555706%2C55.862040%2Cpm2rdm",
    yandexMapHrefMatch: "yandex.ru/maps/org/studiya_manikyura_galiny_poltevoy",
  },
  reputation: { rating: "5,0", reviewCount: "50" },
  images: {
    portrait: "/assets/portrait.webp",
    about: "/assets/portrait.webp",
    favicon: "/favicon.svg",
    beforeAfter: gallery.slice(0, 2),
    gallery,
  },
  services: {
    manicure: [
      { name: "Комплекс NUDE", price: "3 000 ₽", time: "", description: "Снятие, комбинированный маникюр, укрепление гелем, ремонт или донаращивание при необходимости.", url: bookingUrl },
      { name: "Комплекс COLOR", price: "3 300 ₽", time: "", description: "Снятие, комбинированный маникюр, укрепление гелем и цветное покрытие.", url: bookingUrl },
      { name: "Френч", price: "500 ₽", time: "", description: "Дополнительный дизайн.", url: bookingUrl },
      { name: "Слайдер / страза / стемпинг", price: "50 ₽", time: "", description: "Стоимость за 1 элемент.", url: bookingUrl },
      { name: "Мужской маникюр", price: "1 600 ₽", time: "", description: "Гигиенический мужской маникюр.", url: bookingUrl },
      { name: "Комбинированный маникюр без покрытия", price: "1 500 ₽", time: "", description: "Комбинированная обработка без покрытия.", url: bookingUrl },
      { name: "Наращивание", price: "4 500 ₽", time: "", description: "Снятие, комбинированный маникюр и наращивание.", url: bookingUrl },
      { name: "Длина MAX", price: "500 ₽", time: "", description: "Доплата за максимальную длину.", url: bookingUrl },
      { name: "Втирка", price: "300 ₽", time: "", description: "Дополнительный дизайн.", url: bookingUrl },
      { name: "Полное снятие покрытия + маникюр комби", price: "1 700 ₽", time: "", description: "Полное снятие покрытия и комбинированный маникюр.", url: bookingUrl },
      { name: "Ремонт / наращивание 1 ногтя", price: "500 ₽", time: "", description: "Ремонт или наращивание одного ногтя.", url: bookingUrl },
    ],
    pedicure: [],
  },
  reviews: [
    { text: "Клиенты отмечают аккуратный маникюр и стойкое покрытие.", author: "По отзывам" },
    { text: "В отзывах хвалят сложные дизайны и большой выбор материалов.", author: "По отзывам" },
    { text: "Отдельно отмечают соблюдение дезинфекции и комфорт во время процедуры.", author: "По отзывам" },
  ],
  promotions: [],
  amenities: [
    { title: "Онлайн-запись", text: "Свободное время доступно через Яндекс и YCLIENTS" },
    { title: "Прямая связь", text: "Telegram, WhatsApp и телефон мастера" },
    { title: "Наращивание и дизайн", text: "Основные услуги собраны в одном прайсе" },
  ],
  seo: {
    title: "Галина Полтева | Студия маникюра в Москве",
    description: "Студия маникюра Галины Полтевой в Москве. Услуги, цены, работы, отзывы и онлайн-запись.",
    keywords: ["Галина Полтева маникюр", "маникюр Селигерская", "наращивание ногтей Селигерская", "студия маникюра Москва"],
    locale: "ru_RU",
  },
  analytics: { yandexMetrikaId: "0" },
};
