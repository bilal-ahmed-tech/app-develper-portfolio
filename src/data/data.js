import Invoxa from ".././assets/images/Invoxa.webp";
import AiCaptionForge from ".././assets/images/Ai-caption.webp";
import ExpenseTracker from ".././assets/images/Expense-Tracker.webp";
import LanguageTutor from ".././assets/images/Language-Learning-Tutor.webp";
import Docvera from ".././assets/images/Docvera-File-Viewer.webp";
import TasteLoom from ".././assets/images/TasteLoom.webp";
import FastBite from ".././assets/images/FastBite.webp";
import FootScoreo from ".././assets/images/FootScoreo.webp";
import Pixeliva from ".././assets/images/Pixeliva.webp";
import SmartChatbot from ".././assets/images/Smart-chatbot.webp";
import SmartQR from ".././assets/images/SmartQR-scanner.webp";
import FitRatio from ".././assets/images/FitRatio.webp";
// NavLinks
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Technologies" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// ── Technologies ──
export const skills = [
  {
    name: "Flutter",
    icon: "fa-brands fa-flutter",
    iconColor: "#54c5f8",
    percent: 95,
  },
  {
    name: "Android",
    icon: "fa-brands fa-android",
    iconColor: "#3ddc84",
    percent: 88,
  },
  {
    name: "Figma",
    icon: "fa-brands fa-figma",
    iconColor: "#f24e1e",
    percent: 85,
  },
  {
    name: "Swift",
    icon: "fa-brands fa-swift",
    iconColor: "#f05138",
    percent: 80,
  },
  {
    name: "Firebase",
    icon: "fa-solid fa-fire",
    iconColor: "#ffca28",
    percent: 85,
  },
  // { name: "Dart",         icon: "fa-solid fa-code",       iconColor: "#0175c2", percent: 90 },
  { name: "Kotlin", icon: "fa-solid fa-k", iconColor: "#7f52ff", percent: 82 },
  {
    name: "Mobile Apps",
    icon: "fa-solid fa-mobile",
    iconColor: "#22c55e",
    percent: 90,
  },
];

// ── Services ──
export const services = [
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Cross-Platform Development",
    desc: "Build once, run everywhere. Powerful apps for both Android and iOS using Flutter.",
    features: ["Flutter", "Android Development", "iOS Compatible"],
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Design for Mobile",
    desc: "Modern and intuitive mobile designs that enhance user engagement and usability.",
    features: ["Clean UI", "User-focused", "Consistent design"],
  },
  {
    icon: "fa-brands fa-google-play",
    title: "App Deployment",
    desc: "End-to-end deployment of your app to Google Play Store with all requirements handled.",
    features: ["Google Play Store", "App Store Setup", "Release Management"],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "App Optimization & Bug Fixing",
    desc: "Ongoing support and updates to keep your mobile apps running smoothly and efficiently.",
    features: ["Bug fixes", "Performance updates", "Crash Monitoring"],
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Client Communication & Support",
    desc: "Clear communication and long-term support to ensure your project succeeds beyond launch.",
    features: [
      "Long-term support",
      "Regular updates",
      "Dedicated communication",
    ],
  },
  {
    icon: "fa-brands fa-swift",
    title: "iOS Development",
    desc: "Native iOS apps built with Swift for a smooth and high-performance Apple experience.",
    features: ["Swift", "Native iOS", "App Store Ready"],
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "App Features & Integrations",
    desc: "Powerful integrations and features to make your app stand out in the market.",
    features: ["Payment Gateway", "Push Notifications", "AdMob Ads"],
  },
  {
    icon: "fa-solid fa-gears",
    title: "Background Services & Performance",
    desc: "Optimized background processes and performance tuning for a seamless user experience.",
    features: [
      "Background Services",
      "Memory Optimization",
      "Battery Efficiency",
    ],
  },
  {
    icon: "fa-solid fa-display",
    title: "Website Development",
    desc: "Custom websites designed for performance, scalability, and modern user experience.",
    features: ["Responsive design", "SEO optimized", "Fast loading"],
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Deployment & Hosting",
    desc: "Reliable deployment and hosting solutions for secure and fast applications.",
    features: ["Cloud hosting", "Domain setup", "SSL security"],
  },
  {
    icon: "fa-solid fa-code-branch",
    title: "Web Applications",
    desc: "Dynamic and scalable web apps with real-time functionality and API integrations.",
    features: ["Custom dashboards", "API integration", "Secure systems"],
  },
];

// ── Projects ──
export const projects = [
  {
    img: "https://play-lh.googleusercontent.com/cJyfE_QTCeJ5SaH5jujsuNd3fGl5L9voHPMYWtWzJfdoMjfvByk-FYf3nSwPAkNBFlc=w2560-h1440-rw",
    badge: "Android",
    title: "Profile Photo Maker - ProfilePic",
    tags: [
      { icon: "fa-brands fa-android", label: "Android" },
      { icon: "fa-brands fa-flutter", label: "Flutter" },
      { icon: null, label: "Photo Editor" },
    ],
    desc: "A professional profile photo maker app with advanced editing tools and filters.",
    category: ["android"],
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.kamyabjawan.picdip",
        label: "Play Store",
        icon: "fa-brands fa-google-play",
        variant: "primary",
      },
    ],
  },
  {
    img: "https://play-lh.googleusercontent.com/Mm2R2z88O-4UT9nySm8lZFgQnDzbotwiz_HNjmxAhAfWEOPLhy2QsI5Nn7bbDtmkfY7EaL-PbiXopAT7tQyCcQ=w2560-h1440-rw",
    badge: "Android",
    title: "Earn Win - Get UC Rewards",
    tags: [
      { icon: "fa-brands fa-android", label: "Android" },
      { icon: "fa-brands fa-flutter", label: "Flutter" },
      { icon: null, label: "Rewards" },
    ],
    desc: "An engaging rewards app where users can earn and win UC through fun challenges.",
    category: ["android"],
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.getuc.earn_ucwinuc",
        label: "Play Store",
        icon: "fa-brands fa-google-play",
        variant: "primary",
      },
    ],
  },
  {
    img: "https://play-lh.googleusercontent.com/ZBNOXrJs_uvOaLaGBl5bffCPBu8U0CK3BNDxz9jgziLW9yq5ePk3_j-7uOyZI1UFSBo=w2560-h1440-rw",
    badge: "Android",
    title: "Quran - Key To Belief",
    tags: [
      { icon: "fa-brands fa-android", label: "Android" },
      { icon: "fa-brands fa-flutter", label: "Flutter" },
      { icon: null, label: "Islamic App" },
    ],
    desc: "A beautifully designed Quran app with translations, audio recitation, and bookmarks.",
    category: ["android"],
    links: [
      {
        href: "https://play.google.com/store/apps/details?id=com.dartgenix.quran.keytobelief",
        label: "Play Store",
        icon: "fa-brands fa-google-play",
        variant: "primary",
      },
    ],
  },
  {
    img: Invoxa,
    badge: "iOS",
    title: "Invoxa - Invoice Maker",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-brands fa-swift", label: "Swift" },
      { icon: null, label: "Business" },
    ],
    desc: "A sleek invoice maker app for freelancers and businesses to create and send invoices instantly.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/invoxa-invoice-maker/id6760184050",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: AiCaptionForge,
    badge: "iOS",
    title: "AI CaptionForge",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-robot", label: "AI" },
      { icon: null, label: "Social Media" },
    ],
    desc: "AI-powered caption generator for social media posts with smart suggestions and tone control.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/ai-captionforge/id6759551073",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: ExpenseTracker,
    badge: "iOS",
    title: "ExpenseFlow Tracker",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-wallet", label: "Finance" },
      { icon: null, label: "Tracker" },
    ],
    desc: "A smart expense tracking app to manage budgets, monitor spending, and visualize finances.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/expenseflow-tracker/id6759646370",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: LanguageTutor,
    badge: "iOS",
    title: "Language Learning Tutor",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-language", label: "Education" },
      { icon: null, label: "AI Tutor" },
    ],
    desc: "An interactive language learning app with AI tutor, quizzes, and progress tracking.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/language-learning-tutor/id6759712361",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: Docvera,
    badge: "iOS",
    title: "Docvera File Viewer",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-file", label: "Utility" },
      { icon: null, label: "File Viewer" },
    ],
    desc: "A powerful file viewer app supporting PDFs, Word docs, Excel sheets, and more.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/docvera-file-viewer/id6759552844",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: TasteLoom,
    badge: "iOS",
    title: "TasteLoom: Cakes & Sweets",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-cake-candles", label: "Food" },
      { icon: null, label: "Recipes" },
    ],
    desc: "A delightful app for cake and sweets lovers with recipes, tutorials, and ordering features.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/tasteloom-cakes-sweets/id6757918890",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: FastBite,
    badge: "iOS",
    title: "FastBite Kitchen",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-utensils", label: "Food" },
      { icon: null, label: "Delivery" },
    ],
    desc: "A fast food kitchen app for quick meal ordering, menu browsing, and delivery tracking.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/fastbite-kitchen/id6757918726",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: FootScoreo,
    badge: "iOS",
    title: "FootScoreo - Match Updates",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-futbol", label: "Sports" },
      { icon: null, label: "Live Scores" },
    ],
    desc: "Real-time football match updates, live scores, fixtures, and standings at your fingertips.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/footscoreo-match-updates/id6756647357",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: Pixeliva,
    badge: "iOS",
    title: "Pixeliva Image Edit Studio",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-image", label: "Photo Editor" },
      { icon: null, label: "Creative" },
    ],
    desc: "A professional image editing studio with filters, effects, and creative tools for stunning photos.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/us/app/pixeliva-image-edit-studio/id6757185371",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: SmartChatbot,
    badge: "iOS",
    title: "Smart Chatbot",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-robot", label: "AI" },
      { icon: null, label: "Chatbot" },
    ],
    desc: "An AI-powered smart chatbot app for intelligent conversations, answers, and assistance.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/id/app/smart-chatbots/id6755147780",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: SmartQR,
    badge: "iOS",
    title: "SmartQR Scanner Pro",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-qrcode", label: "Utility" },
      { icon: null, label: "Scanner" },
    ],
    desc: "A fast and reliable QR code scanner with history, flashlight support, and link preview.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/id/app/smartqr-scanner-pro/id6755832250",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
  {
    img: FitRatio,
    badge: "iOS",
    title: "FitRatio - Smart BMI Tracker",
    tags: [
      { icon: "fa-brands fa-apple", label: "iOS" },
      { icon: "fa-solid fa-heart-pulse", label: "Health" },
      { icon: null, label: "Fitness" },
    ],
    desc: "A smart BMI tracker app with health insights, weight history, and personalized fitness tips.",
    category: ["ios"],
    links: [
      {
        href: "https://apps.apple.com/id/app/fitratio-smart-bmi-tracker/id6745028643",
        label: "App Store",
        icon: "fa-brands fa-apple",
        variant: "primary",
      },
    ],
  },
];

// ── Contact Items (UNCHANGED LINKS) ──
export const contactItems = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "husnainch4572@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=husnainch4572@gmail.com",
    colorClass: "email",
  },
  {
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    value: "+92 300-9005104",
    href: "https://wa.me/923009005104",
    colorClass: "whatsapp",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
    value: "linkedin.com/in/mrrhusnain1/",
    href: "https://www.linkedin.com/in/mrrhusnain1/",
    colorClass: "linkedin",
  },
  {
    icon: "fa-brands fa-github",
    label: "GitHub",
    value: "github.com/",
    href: "https://github.com",
    colorClass: "github",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "Location",
    value: "Rahim Yar Khan, Pakistan",
    href: null,
    colorClass: "default",
  },
];

// ── Social Links (UNCHANGED) ──
export const socialLinks = [
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/",
    label: "GitHub",
    hoverBg: "#333333",
    hoverColor: "#ffffff",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/mrrhusnain1/",
    label: "LinkedIn",
    hoverBg: "#0077B5",
    hoverColor: "#ffffff",
  },
  {
    icon: "fa-brands fa-facebook-f",
    href: "https://web.facebook.com/mrhussnaindev?_rdc=1&_rdr#",
    label: "Facebook",
    hoverBg: "#1877F2",
    hoverColor: "#ffffff",
  },
  {
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/923009005104",
    label: "WhatsApp",
    hoverBg: "#25D366",
    hoverColor: "#ffffff",
  },
  {
    icon: "fa-solid fa-envelope",
    href: "https://mail.google.com/mail/?view=cm&to=husnainch4572@gmail.com",
    label: "Email",
    hoverBg: "#0553B1",
    hoverColor: "#ffffff",
  },
];
