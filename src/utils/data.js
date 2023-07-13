import iphone from "../assets/iphone.jpeg";
import macbook from "../assets/macbook.jpg";
import watch from "../assets/watch.jpg";
import imac from "../assets/imac.jpg";
const tempDate = new Date();
// months are ZERO index based;
export const products = [
  {
    id: 1,
    productName: "MACBOOK PRO",
    productImage: macbook,
    desc: `The new Macbook pro with M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.`,
    buyLink: "https://www.apple.com/shop/buy-mac/macbook-air/15-inch-m2",
    discountedPrice: 4399,
    discountedsubPrice: 69,
    originalPrice: 6299,
    originalsubPrice: 99,
    tempYear: tempDate.getFullYear(),
    tempMonth: tempDate.getMonth(),
    tempDay: tempDate.getDate(),
    hours: 18,
    minutes: 40,
    seconds: 0,
  },
  {
    id: 2,
    productName: "IPHONE 14",
    productImage: iphone,
    desc: `The iPhone 14 5G Dual SIM comes with a 6.1 inch touchscreen with
            460PPI. It packs a 48-megapixel pro camera with main ultra wide
            system and a 12-megapixel selfie-camera with TrueDepth with
            autofocus. This is powered by the Apple A16 Bionic (4 nm) chipset
            and 6GB of RAM.`,
    buyLink: "https://www.apple.com/shop/buy-iphone/iphone-14",
    discountedPrice: 1299,
    discountedsubPrice: 99,
    originalPrice: 1799,
    originalsubPrice: 99,
    tempYear: tempDate.getFullYear(),
    tempMonth: tempDate.getMonth(),
    tempDay: tempDate.getDate() + 10,
    hours: 19,
    minutes: 39,
    seconds: 0,
  },
  {
    id: 3,
    productName: "APPLE WATCH SERIES 8",
    productImage: watch,
    desc: `The Apple Watch Series 8 gets a skin temperature reader, low power mode and crash detection to make the best smartwatch around a tick better. But the design and watchOS 9 are what really make Series 8 shine.`,
    buyLink: "https://www.apple.com/shop/buy-watch/apple-watch-ultra",
    discountedPrice: 3299,
    discountedsubPrice: 99,
    originalPrice: 4299,
    originalsubPrice: 99,
    tempYear: tempDate.getFullYear(),
    tempMonth: tempDate.getMonth(),
    tempDay: tempDate.getDate(),
    hours: 20,
    minutes: 59,
    seconds: 0,
  },
  // {
  //   id: 4,
  //   productName: "I-MAC",
  //   productImage: imac,
  //   desc: `The top iMac model used to be the iMac Pro. The Pro name was subsequently dropped, but the current 27" iMac is similar (see iMac Pro). In 2021, the first iMac with Apple's M1 processor debuted, and both Apple and Intel models are available.`,
  //buyLink:'https://www.apple.com/shop/buy-mac/imac'

  //   discountedPrice: 3299,
  //   discountedsubPrice: 99,
  //   originalPrice: 4299,
  //   originalsubPrice: 99,
  //   tempYear: tempDate.getFullYear(),
  //   tempMonth: tempDate.getMonth(),
  //   tempDay: tempDate.getDate(),
  //   hours: 16,
  //   minutes: 59,
  //   seconds: 0,
  // },
];

// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // British English uses day-month-year order and 24-hour time without AM/PM
// console.log(event.toLocaleString());
// console.log(event.toLocaleTimeString());
// console.log(event.toLocaleDateString());
