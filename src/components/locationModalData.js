import React from "react";

function LocationModalData() {
  const iranProvincesAndCities = [
    {
      province: "تهران",
      cities: [
        "تهران",
        "کرج",
        "قدس",
        "ملارد",
        "ورامین",
        "پاکدشت",
        "دماوند",
        "فیروزکوه",
        " اسلامشهر",
        "بهارستان",
      ],
      id: 1,
    },
    {
      province: "اصفهان",
      cities: [
        "اصفهان",
        "کاشان",
        "نجف آباد",
        "گلپایگان",
        "نائین",
        "تیران",
        "اردستان",
        "فلاورجان",
        "لنجان",
        "مبارکه",
      ],
      id: 2,
    },
    {
      province: "مازندران",
      cities: [
        "ساری",
        "بابل",
        "آمل",
        "قائم شهر",
        "بهشهر",
        "چالوس",
        "نور",
        "نوشهر",
        "محمودآباد",
        "جویبار",
      ],
      id: 3,
    },
    {
      province: "آذربایجان شرقی",
      cities: [
        "تبریز",
        "مرند",
        "مراغه",
        "اهر",
        "میانه",
        "سراب",
        "بستان آباد",
        "هریس",
        "اهر",
        "ورزقان",
      ],
      id: 4,
    },
    {
      province: "آذربایجان غربی",
      cities: [
        "ارومیه",
        "خوی",
        "میاندوآب",
        "پیرانشهر",
        "مهاباد",
        "بوکان",
        "سلماس",
        "نقده",
        "شوط",
        "ماکو",
      ],
      id: 5,
    },
    {
      province: "خراسان رضوی",
      cities: [
        "مشهد",
        "نیشابور",
        "سبزوار",
        "گناباد",
        "تربت حیدریه",
        "کاشمر",
        "بردسکن",
        "خلیل آباد",
        "مه ولات",
        "رشتخوار",
      ],
      id: 6,
    },
    {
      province: "فارس",
      cities: [
        "شیراز",
        "مرودشت",
        "جهرم",
        "فسا",
        "لار",
        "داراب",
        "نیریز",
        "استهبان",
        "ارسنجان",
        "کازرون",
      ],
      id: 7,
    },
    {
      province: "کرمان",
      cities: [
        "کرمان",
        "سیرجان",
        "رفسنجان",
        "جیرفت",
        "بم",
        "زرند",
        "کهنوج",
        "انار",
        "راور",
        "شهربابک",
      ],
      id: 8,
    },
    {
      province: "هرمزگان",
      cities: [
        "بندر عباس",
        "میناب",
        "دهزول",
        "بندر لنگه",
        "بستک",
        "پارسیان",
        "رودان",
        "جاسک",
        "قشم",
        "ابوموسی",
      ],
      id: 9,
    },
    {
      province: "سیستان و بلوچستان",
      cities: [
        "زاهدان",
        "زابل",
        "ایرانشهر",
        "چابهار",
        "سراوان",
        "نیک شهر",
        "خاش",
        "میرجاوه",
        "هیرمند",
        "نصرت آباد",
      ],
      id: 10,
    },
    {
      province: "یزد",
      cities: [
        "یزد",
        "میبد",
        "اردکان",
        "بافق",
        "تفت",
        "میبد",
        "ابرکوه",
        "خاتم",
        "بهرمان",
        "اشکذر",
      ],
      id: 11,
    },
    {
      province: "قم",
      cities: [
        "قم",
        "قارچک",
        "جعفریه",
        "خالجستان",
        "کهک",
        "سلفچگان",
        "نجف آباد",
        "دستجرد",
        "جعفریه",
        "قنوات",
      ],
      id: 12,
    },
    {
      province: "سمنان",
      cities: [
        "سمنان",
        "دامغان",
        "شهمیرزاد",
        "مهدی شهر",
        "گرمسار",
        "ایوانکی",
        "سرخه",
        "مهدی شهر",
        "کلاته خیج",
        "بیارجمند",
      ],
      id: 13,
    },
    {
      province: "گلستان",
      cities: [
        "گرگان",
        "گنبد کاووس",
        "علی آباد کتول",
        "بندر ترکمن",
        "آق قلا",
        "مراوه تپه",
        "کلاله",
        "مینودشت",
        "گالیکش",
        "رامیان",
      ],
      id: 14,
    },
    {
      province: "شمالی خراسان",
      cities: [
        "بجنورد",
        "شیروان",
        "اسفراین",
        "جاجرم",
        "فاروج",
        "گرمه",
        "راز و جرگلان",
        "مانه و سملقان",
        "آشخانه",
        "زوجی",
      ],
      id: 15,
    },
    {
      province: "خراسان جنوبی",
      cities: [
        "بیرجند",
        "قائن",
        "فردوس",
        "طبس",
        "نهم",
        "سربیشه",
        "درمیان",
        "خوسف",
        "زیرکوه",
        "قائنات",
      ],
      id: 16,
    },
    {
      province: "چهارمحال و بختیاری",
      cities: [
        "شهرکرد",
        "بروجن",
        "لردگان",
        "فارسان",
        "کوهرنگ",
        "اردل",
        "لاران",
        "بلداجی",
        "بن",
        "گندمان",
      ],
      id: 17,
    },
    {
      province: "کهگیلویه و بویراحمد",
      cities: [
        "یاسوج",
        "دهدشت",
        "گچساران",
        "بشت",
        "لیکک",
        "چرام",
        "پاتاوه",
        "دنا",
        "مارگون",
        "بهمئی",
      ],
      id: 18,
    },
    {
      province: "بوشهر",
      cities: [
        "بوشهر",
        "دشتی",
        "تنگستان",
        "دیر",
        "جم",
        "کنگان",
        "عسلویه",
        "خورموج",
        "بندر گناوه",
        "بندر دیلم",
      ],
      id: 19,
    },
  ];

  return iranProvincesAndCities;
}

export default LocationModalData;