import {
  AccessTime,
  Description,
  ForwardToInbox,
  Language,
  LocationOn,
  Phone,
  Public,
  SentimentSatisfiedAlt,
  Speed,
  SportsBasketball,
} from "@mui/icons-material";

export const navList = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "#about",
    title: "About",
  },
  {
    url: "#services",
    title: "Services",
  },
  {
    url: "#contact",
    title: "Contact us",
    bg: true,
  },
];

export const clientImg = [
  {
    id: 1,
    img: "/client1.png",
  },
  {
    id: 2,
    img: "/client2.png",
  },
  {
    id: 3,
    img: "/client3.png",
  },
  {
    id: 4,
    img: "/client4.png",
  },
  {
    id: 5,
    img: "/client5.png",
  },
  {
    id: 6,
    img: "/client6.png",
  },
];

export const aboutText = [
  {
    id: 1,
    main: "We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.",
    sub: [
      "We started with a simple idea: do what is best for the client.",
      "Our methodical and individual approach to each project delivers the finest possible results for your media.",
      "Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.",
    ],
  },
  {
    id: 2,
    main: "We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.",
    isButton: "Learn More",
  },
];

export const stat = [
  {
    number: 3835039,
    icon: <SentimentSatisfiedAlt className="icon" />,
    boldText: "Organic Reach",
    lightText: "(Global)",
  },
  {
    number: 85,
    icon: (
      <img
        src="/icon.png"
        className="object-contain"
        height={50}
        width={50}
        alt="icon"
      />
    ),
    boldText: "Organic Reach",
  },
  {
    number: 14081,
    icon: <AccessTime className="icon" />,
    boldText: "Watch Hours",
    lightText: "(Asia)",
  },
  {
    number: 17,
    icon: <Language className="icon" />,
    boldText: "Excellent CTR",
    lightText: "% (Asia)",
  },
];

export const serviceCard = [
  {
    icon: <SportsBasketball className="size-3/4" />,
    title: "Design",
    desc: "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
  },
  {
    icon: <Description className="size-3/4" />,
    title: "Development",
    desc: "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
  },
  {
    icon: <Public className="size-3/4" />,
    title: "Marketing",
    desc: "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
  },
  {
    icon: <Speed className="size-3/4" />,
    title: "Support",
    desc: "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
  },
];

export const processCard = [
  {
    id: 1,
    title: "Planning",
    desc: "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
  },
  {
    id: 2,
    title: "Design",
    desc: "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
  },
  {
    id: 3,
    title: "Development",
    desc: "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
  },
  {
    id: 4,
    title: "Marketing",
    desc: "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
  },
];

export const featuresCard = [
  {
    icon: <img src="/web.png" className="size-10 object-contain" alt="icon" />,
    title: "Web design",
  },
  {
    icon: <img src="/code.png" className="size-10 object-contain" alt="icon" />,
    title: "Development",
  },
  {
    icon: (
      <img src="/people.png" className="size-10 object-contain" alt="icon" />
    ),
    title: "Branding",
  },
  {
    icon: (
      <img src="/media.png" className="size-10 object-contain" alt="icon" />
    ),
    title: "Media buying",
  },
  {
    icon: (
      <img src="/search.png" className="size-10 object-contain" alt="icon" />
    ),
    title: "Search engine",
  },
  {
    icon: <img src="/note.png" className="size-10 object-contain" alt="icon" />,
    title: "Brand strategy",
  },
  {
    icon: <img src="/map.png" className="size-10 object-contain" alt="icon" />,
    title: "Local search marketing",
  },
  {
    icon: (
      <img src="/chart.png" className="size-10 object-contain" alt="icon" />
    ),
    title: "Lead Tracking & Management",
  },
  {
    icon: <img src="/book.png" className="size-10 object-contain" alt="icon" />,
    title: "Contact management",
  },
  {
    icon: <img src="/mp3.png" className="size-10 object-contain" alt="icon" />,
    title: "Media management",
  },
  {
    icon: <img src="/date.png" className="size-10 object-contain" alt="icon" />,
    title: "Social scheduling",
  },
  {
    icon: <img src="/ad.png" className="size- object-contain" alt="icon" />,
    title: "Ad retargeting",
  },
];

export const contactList = [
  {
    id: 1,
    icon: <LocationOn />,
    text: "26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004",
  },
  {
    id: 2,
    icon: <ForwardToInbox />,
    text: "info@akeshya.com",
  },
  {
    id: 3,
    icon: <Phone />,
    text: "+91 94942 40922",
  },
];
