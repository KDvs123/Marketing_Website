import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#roadmap",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Get The App ",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Disease Detection & Treatment",
    text: "Optimize plant health with the Disease Detection and Treatment Plan feature. Advanced analytics assess symptoms, identify diseases, and recommend treatments to boost tea plant productivity.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Chatbot Assistant",
    text: "Elevate interaction through the Chatbot Assistant. Real-time support on tea varieties and brewing enriches user experience and fosters engagement.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Tea Description Page",
    text: "Dive into tea varieties with the Tea Description Page. Detailed insights on origin, flavors, and brewing guide users to informed selections.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Weather & Market Prices Widget",
    text: "Stay updated with the Weather and Market Price Widget. Track real-time weather and tea market prices for smarter purchasing and planning.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Enhance tea cultivation with disease detection, tea profiles, and real-time weather and market updates.",
    price: "0",
    features: [
      "Comprehensive disease detection and treatment options are available for tea plants, ensuring efficient health care with tailored plans.",
      "Diverse tea variants await exploration to satisfy varied taste preferences.",
      "Stay updated on weather conditions and market prices to inform tea purchases.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Streamline tea farming with disease insights, tea variant profiles, market trends, and chatbot support.",
    price: "5",
    features: [
     "Comprehensive disease detection and treatment options are available for tea plants, ensuring efficient health care with tailored plans.",
      "Diverse tea variants await exploration to satisfy varied taste preferences.",
      "Stay updated on weather conditions and market prices to inform tea purchases.",
      " Personalized chatbot assistance offers tailored guidance and solutions for enhanced experiences.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Boost tea farming with disease solutions, tea profiles, market data, chatbot help, and a 20-day free trial.",
    price: null,
    features: [
      "Comprehensive disease detection and treatment options are available for tea plants, ensuring efficient health care with tailored plans.",
      "Diverse tea variants await exploration to satisfy varied taste preferences.",
      "Stay updated on weather conditions and market prices to inform tea purchases.",
      " Personalized chatbot assistance offers tailored guidance and solutions for enhanced experiences.",
      "20 days free trial",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Disease Detection",
    text: "Instantly diagnose tea plant diseases with just a photo. Simplify disease management with our smart image recognition technology.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Chatbot Assistance",
    text: "Engage with our intelligent chatbot for real-time advice and support. Get expert help on tea plant care without the wait",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Market Price Widget",
    text: "Stay updated with real-time tea market prices. Make informed decisions with timely data right at your fingertips.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Weather Widget",
    text: "Access live weather updates crucial for tea farming. Plan your agricultural activities based on accurate, localized weather forecasts.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Tea Profile Explorer",
    text: "Discover and learn about various tea types. Dive into detailed descriptions, histories, and cultivation tips for each tea variety.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Multi Language Support",
    text: "The app utilizes natural language processing to understand user queries and offer accurate responses in multiple languages, enhancing the tea care experience..",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
