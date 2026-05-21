import { FaChurch, FaUtensils } from "react-icons/fa";

export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};

export const programImgs=['/ekexeci.jpg','/restoran.jpg']
export const program = [
  {
    src: "/loc1.png",
    time: "12:00",
    title: "Փեսայի տուն",
    address: "Գուսան Շերամ 39",
  },
  {
    src: "/loc2.png",
    time: "13:00",
    title: "Հարսնացուի տուն",
    address: "Զավարյան 36",
  },
  {
    icon: <FaChurch />,
    time: "15:30",
    title: "Պսակադրություն",
    address: "Սուրբ Գրիգոր Լուսավորիչ եկեղեցի",
  },
  {
    icon: <FaUtensils />,
    time: "17:00",
    title: "Հարսանյաց հանդիսություն",
    address: "Աստաֆյան ռեստորանային համալիր",
  },
];
export const text={
  title:"Դուք հրավիրված եք \nՍարգսի և Մերիի \n հարսանիքին",
  firstwho:"Sargis & Meri",
  firstTxt:"Գեղեցիկ օր և մենք \n կդառնանք ամուսիններ",
  title1:"Սիրելի՛ ընկերներ և  բարեկամներ",
  descr1:"Սիրով հրավիրում ենք \n Ձեզ մեզ հետ միասին տոնելու մեր կյանքի ամենակարևոր և գեղեցիկ օրը ՝ մեր հարսանիքը",
  day:"25/07/2026",
  txtEnd:"Խնդրում ենք նախապես տեղեկացնել \n Ձեր մասնակցության մասին \n մինչև Հուլիսի 10-ը \n Սիրո՛վ սպասում ենք",
  child:'Սիրով խնդրում ենք ձեզ միջոցառմանը մասնակցել առանց փոքրիկների'
}

export const rsvp = 'https://script.google.com/macros/s/AKfycbyzzpNtyWUT2bE8WunQ2QnH_mO2FnbbE4am3GusFTPlbdblDI1C1BD1YTGtSvMeQhntNg/exec'