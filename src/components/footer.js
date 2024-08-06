import { SiAparat } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";
import { RiCustomerService2Fill } from "react-icons/ri";
import React, { useEffect, useRef, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
function Footer() {
  // footer data for grid
  const footerGridData = [
    {
      id: 1,
      src: "/images/footer-images/digimag.svg",
    },
    {
      id: 2,
      src: "/images/footer-images/digipay.svg",
    },
    {
      id: 3,
      src: "/images/footer-images/digistyle.svg",
    },
    {
      id: 4,
      src: "/images/footer-images/digiplus.svg",
    },
    {
      id: 5,
      src: "/images/footer-images/digiclub.svg",
    },
    {
      id: 6,
      src: "/images/footer-images/jet.svg",
    },
    {
      id: 7,
      src: "/images/footer-images/digify.svg",
    },
    {
      id: 8,
      src: "/images/footer-images/magnet.svg",
    },
    {
      id: 9,
      src: "/images/footer-images/digiMehr.svg",
    },
    {
      id: 10,
      src: "/images/footer-images/diginext.svg",
    },
    {
      id: 11,
      src: "/images/footer-images/ganjeh.svg",
    },
    {
      id: 12,
      src: "/images/footer-images/digiexpress.svg",
    },
    {
      id: 13,
      src: "/images/footer-images/smartech.svg",
    },
    {
      id: 14,
      src: "/images/footer-images/digikala-service.svg",
    },
    {
      id: 15,
      src: "/images/footer-images/digikala-business.svg",
    },
  ];
  /////////
  ////function to scroll up
  const scrollToTop = () => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
  }
  //  states for footer in mobile
  const [dropDowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    readMore: false,
  });

  const [emailData, setEmailData] = useState({
    email: "",
    isValid: false,
    isFocused: false,
    isBlurred: false,
    isRegistered: false,
  });

  //////////////
  ///handling Email states and function
  const validateEmail = (input) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (input.includes("@") && input.includes(".com")) {
      return regex.test(input);
    } else {
      return false;
    }
  };
  const handleEmailInputChange = (event) => {
    const inputValue = event.target.value;
    const isValid = validateEmail(inputValue);
    setEmailData({
      ...emailData,
      email: inputValue,
      isValid: isValid,
      isFocused: true,
      isBlurred: false,
    });
  };
  // console.log(emailData);

  //////////
  ///rendering error for email address
  const renderEmailErrors = () => {
    if (emailData.isFocused && !emailData.isValid) {
      console.log(1);
      return (
        <p className="text-[13px] mt-3 text-digiRed">
          پست الکترونیک وارد شده درست نیست
        </p>
      );
    } else if (
      emailData.isBlurred &&
      emailData.email.length == 0 &&
      !emailData.isValid
    ) {
      console.log(3);
      return (
        <p className="text-[13px] mt-3 text-digiRed">اینجا را خالی نگذارید</p>
      );
    } else if (emailData.isBlurred && !emailData.isValid) {
      console.log(2);
      return (
        <p className="text-[13px] mt-3 text-digiRed">
          پست الکترونیک وارد شده درست نیست
        </p>
      );
    } else if (emailData.isRegistered) {
      return (
        <p className="text-[13px] mt-3 text-digiGreen">
          پست الکترونیک شما ثبت شد!
        </p>
      );
    }
  };

  ///////////////
  ///sending data by json server to db.json
  const onSubmitClick = (e) => {
    e.preventDefault();

    const posting = async () => {
      await axios
        .post("http://localhost:8000/allUsersEmail", {
          userEmail: `${emailData.email}`,
        })
        .then((res) => {
          console.log(res);
          setEmailData({ ...emailData, isRegistered: true });
          setTimeout(() => {
            setEmailData({
              ...emailData,
              email: "",
              isValid: false,
              isFocused: false,
              isBlurred: false,
              isRegistered: false,
            });
          }, 1000);
        });
    };
    posting();
  };






  ///////////
  ///JSX

  return (
    <div>
      {/* footer for mobile */}
      <div className="px-4 py-4 bg-blue-40 lg:hidden mb-[73px]">
        <div className="flex items-center justify-between border-b py-3 bg-red-30">
          <div className="flex items-center ">
            <div className="ml-3">
              <RiCustomerService2Fill size={30} className="text-gray-700" />
            </div>
            <div className="space-y-2">
              <p className=" text-[11px]">
                {digitsEnToFa("۷ روز هفته، ۲۴ ساعت")}
              </p>
              <p className="fontBold text-[15px]">تماس با پشتیبانی </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-3 text-[13px] border rounded-xl border-gray-700">
              تماس
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-b my- py-3 bg-red-30">
          <div className="flex items-center ">
            <div className="ml-3">
              <Image
                src={"/images/footer-images/footerlogo2.webp"}
                unoptimized
                alt="footerlogo2"
                height={35}
                width={35}
              ></Image>
            </div>
            <div className="space-y-2">
              <p className=" text-[11px]">تجربه خرید بهتر در</p>
              <p className="fontBold text-[15px]"> اپلیکیشن دیجی کالا </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-3 text-[13px] border rounded-xl bg-black text-white border-gray-700">
              دانلود
            </button>
          </div>
        </div>

        <div className="  ">
          <div className=" border-b">
            <div
              onClick={() => {
                setDropdowns({ ...dropDowns, dropdown1: !dropDowns.dropdown1 });
              }}
              className="fontBold   flex p-3 items-center  cursor-pointer justify-between"
            >
              <span className="text-[13px] select-none">با دیجی کالا</span>
              {dropDowns.dropdown1 ? (
                <BiChevronUp size={25} />
              ) : (
                <BiChevronDown size={25} />
              )}
            </div>
            <div
              className={`${
                dropDowns.dropdown1 ? "" : "hidden"
              } mt-3 text-sm leading-6 text-slate-600 bg-yellow-30`}
            >
              <ul className="*:my-2 *:text-[12px] *:px-3 *:select-none *:cursor-pointer *:py-[1px]">
                <li>اتاق خبر دیجی کالا</li>
                <li>فروش در دیجی کالا</li>
                <li>فرصت های شغلی </li>
                <li>گزارش تخلف در دیجی کالا </li>
                <li> تماس با دیجی کالا</li>
                <li>درباره دیجی کالا</li>
                <li>فروش در دیجی کالا</li>
              </ul>
            </div>
          </div>
          <div className=" border-b">
            <div
              onClick={() => {
                setDropdowns({ ...dropDowns, dropdown2: !dropDowns.dropdown2 });
              }}
              className="fontBold   flex p-3 items-center  cursor-pointer justify-between"
            >
              <span className="text-[13px]  select-none">خدمات مشتریان </span>
              {dropDowns.dropdown2 ? (
                <BiChevronUp size={25} />
              ) : (
                <BiChevronDown size={25} />
              )}
            </div>
            <div
              className={`${
                dropDowns.dropdown2 ? "" : "hidden"
              } mt-3 text-sm leading-6 text-slate-600 bg-yellow-30`}
            >
              <ul className="*:my-2 *:text-[12px] *:select-none *:cursor-pointer *:py-[1px] *:px-3">
                <li>پاسخ به پرسش های متداول </li>
                <li> رویه های بازگرداندن کالا </li>
                <li> شرایط استفاده </li>
                <li> حریم خصوصی </li>
                <li> گزارش باگ</li>
              </ul>
            </div>
          </div>
          <div className=" border-b">
            <div
              onClick={() => {
                setDropdowns({ ...dropDowns, dropdown3: !dropDowns.dropdown3 });
              }}
              className="fontBold   flex p-3 items-center  cursor-pointer justify-between"
            >
              <span className="text-[13px]  select-none">
                راهنمای خرید از دیجی کالا
              </span>
              {dropDowns.dropdown3 ? (
                <BiChevronUp size={25} />
              ) : (
                <BiChevronDown size={25} />
              )}
            </div>
            <div
              className={`${
                dropDowns.dropdown3 ? "" : "hidden"
              } mt-3 text-sm leading-6 text-slate-600 bg-yellow-30`}
            >
              <ul className="*:my-2 *:text-[12px] *:select-none *:cursor-pointer *:py-[1px] *:px-3">
                <li> نحوه ثبت سفارش </li>
                <li> رویه ارسال سفارش </li>
                <li> شیوه های پرداخت </li>
              </ul>
            </div>
          </div>
          <div className=" border-b">
            <div
              onClick={() => {
                setDropdowns({ ...dropDowns, dropdown4: !dropDowns.dropdown4 });
              }}
              className="fontBold   flex p-3 items-center  cursor-pointer justify-between"
            >
              <span className="text-[13px]  select-none"> شرکای تجاری</span>
              {dropDowns.dropdown4 ? (
                <BiChevronUp size={25} />
              ) : (
                <BiChevronDown size={25} />
              )}
            </div>
            <div
              className={`${
                dropDowns.dropdown4 ? "" : "hidden"
              } mt-3 text-sm leading-6 text-slate-600 bg-neutral-200/70 grid grid-cols-3 gap-[1px] `}
            >
              {footerGridData.map((item) => {
                return (
                  <div className="h-[80px] flex-center  bg-white" key={item.id}>
                    <Image
                      alt="digi services"
                      src={item.src}
                      width={100}
                      unoptimized
                      height={100}
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-2 mt-2">
            <div>
              <p className="text-[13px] fontBold tracking-tight">
                فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
              </p>
            </div>
            <div
              className={`mt-2 ${
                dropDowns.readMore
                  ? "h-full"
                  : "h-[40px] overflow-hidden before:bg-gradient-to-b before:from-transparent before:from-50% before:to-white before:h-[38px] before:absolute before:w-[100%] after:content-['']"
              }`}
            >
              <p className="text-[11px] leading-5 text-gray-500 text-balance ">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد. <br />
                یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌
                اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان
                می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
                کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار
                می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص
                خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده
                به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این
                فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از
                شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده
                است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز،
                دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی،
                ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی،
                ارسال با پست کدام محصولات در دیجی‌کالا قابل سفارش هستند؟
                <br /> تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای
                مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در
                تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای
                تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و
                محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های
                اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی
                می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال
                امروز برای آن ها وجود دارد.
                <br />
                کالای دیجیتال <br></br>انواع گوشی موبایل از برندهای مختلفی مثل
                آیفون، گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...،
                انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت
                سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از
                برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور،
                کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ...
                تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در
                دیجی‌کالا قرار دارند. <br />
                خودرو، ابزار و تجهیزات صنعتی <br />
                انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
                و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
                خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
                کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار
                می‌گیرند. <br /> مد و پوشاک <br />
                محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس
                راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال
                و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای
                مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی،
                دبنهامز، آلدو، درسا و... خریداری کنید. <br /> اسباب بازی کودک{" "}
                <br /> و نوزاد در این دسته از کالاهای دیجی‌کالا، انواع لوازم
                بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت،
                اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا
                خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری
                سریع و آسان تبدیل کند. <br /> کالاهای سوپر مارکتی <br /> هر چیزی
                از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا
                می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه،
                زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل
                نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما
                هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.{" "}
                <br />
                زیبایی و سلامت <br />
                انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت
                و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل
                انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو و...، انواع لوازم
                شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا
                و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی
                طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش
                برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند. <br />{" "}
                خانه و آشپزخانه <br /> یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش
                لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش
                صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن
                بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات
                مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه
                مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان
                فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل
                تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.{" "}
                <br />
                کتاب، لوازم تحریر و هنر <br /> بخش هنر، کتاب، رمان و لوازم تحریر
                دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی
                است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های
                مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام
                و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار
                دارند. <br />
                ورزش و سفر <br /> هر نوع وسیله و لباس ورزشی که فکرش را کنید،
                انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و... در این بخش
                قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس
                نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا
                پیدا کنید. <br />
                محصولات بومی و محلی <br />و در آخر دیجی‌کالا از طریق به فروش
                رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه،
                ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین
                راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله
                ظروف زیبای مخصوص به سفره هفت‌سین و پذیرایی از مهمانان در روزهای
                نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی
                در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار
                بالا انتخاب کنید. همچنین در صفحه برچسب ها، امکان مشاهده و خرید
                انواع محصولات با طرح های بومی وجود دارد. دیجی‌کالا همچنین برای
                اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع
                ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد
                بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های عید را برای
                شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و
                هوای تازه نهایت لذت را ببرید.
              </p>
            </div>
            <div
              className="mt-1 text-gray-400"
              onClick={() =>
                setDropdowns({ ...dropDowns, readMore: !dropDowns.readMore })
              }
            >
              {dropDowns.readMore ? (
                <div className="flex items-center text-[14px] fontBold z-30 cursor-pointer mt-5">
                  <span>بستن</span> <BiChevronLeft size={20} />
                </div>
              ) : (
                <div className="flex items-center text-[14px] fontBold z-30  cursor-pointer">
                  <span>مشاهده بیشتر</span> <BiChevronLeft size={20} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*end of  footer for mobile */}
      {/* footer for desktop */}
      <div className="max-lg:hidden p-4 2xl:w-[90%] 2xl:mx-auto">
        <div className=" flex items-center justify-between bg-blue-20">
          <div>
            <Image
              src={"images/footer-images/digi.svg"}
              unoptimized
              alt="digi svg"
              width={120}
              height={120}
            ></Image>
          </div>
          <div className="">
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 border text-[12px] fontBold py-2 px-3 rounded-md"
            >
              بازگشت به بالا <BiChevronUp size={25} className="mr-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center text-[12px]  text-gray-700 mt-3 bg-yellow-30">
          <div className=" border-black w-fit ">
            <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          </div>
          <div className="mx-2">|</div>
          <div className="mx-2">
            <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
          </div>
          <div className="mx-2">|</div>
          <div className=" border-black w-fit ">
            <p> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
        </div>
        <div className="grid grid-cols-5 mt-3 ">
          <div className="flex items-center flex-col">
            <Image
              alt="express delivery"
              width={60}
              unoptimized
              height={60}
              src={"/images/footer-images/express-delivery.svg"}
            />
            <p className="text-[11px] text-gray-500 mt-1">امکان تحویل اکسپرس</p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt="express delivery"
              width={60}
              unoptimized
              height={60}
              src={"/images/footer-images/cash-on-delivery.svg"}
            />
            <p className="text-[11px] text-gray-500 mt-1">
              امکان پرداخت در محل
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt="express delivery"
              width={60}
              unoptimized
              height={60}
              src={"/images/footer-images/support.svg"}
            />
            <p className="text-[11px] text-gray-500 mt-1">
              ۷ روز هفته، ۲۴ ساعته
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt="express delivery"
              width={60}
              unoptimized
              height={60}
              src={"/images/footer-images/days-return.svg"}
            />
            <p className="text-[11px] text-gray-500 mt-1">
              هفت روز ضمانت بازگشت کالا
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              alt="express delivery"
              width={60}
              unoptimized
              height={60}
              src={"/images/footer-images/original-products.svg"}
            />
            <p className="text-[11px] text-gray-500 mt-1">
              ضمانت اصل بودن کالا
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-8 bg-blue-20  2xl:mx-auto">
          <div className="">
            <div>
              <p className="fontBold text-gray-800 ">با دیجی کالا</p>
            </div>
            <ul className="*:my-3 *:text-[14px] text-gray-500 *:select-none *:cursor-pointer *:py-[1px]">
              <li>اتاق خبر دیجی کالا</li>
              <li>فروش در دیجی کالا</li>
              <li>فرصت های شغلی </li>
              <li>گزارش تخلف در دیجی کالا </li>
              <li> تماس با دیجی کالا</li>
              <li>درباره دیجی کالا</li>
              <li>فروش در دیجی کالا</li>
            </ul>
          </div>
          <div className="">
            <div>
              <p className="fontBold text-gray-800 ">خدمات مشتریان</p>
            </div>
            <ul className="*:my-3 *:text-[14px] text-gray-500 *:select-none *:cursor-pointer *:py-[1px]">
              <li>پاسخ به پرسش های متداول </li>
              <li> رویه های بازگرداندن کالا </li>
              <li> شرایط استفاده </li>
              <li> حریم خصوصی </li>
              <li> گزارش باگ</li>
            </ul>
          </div>
          <div className="">
            <div>
              <p className="fontBold text-gray-800 ">
                راهنمای خرید از دیجی‌کالا
              </p>
            </div>
            <ul className="*:my-3 *:text-[14px] text-gray-500 *:select-none *:cursor-pointer *:py-[1px]">
              <li> نحوه ثبت سفارش </li>
              <li> رویه ارسال سفارش </li>
              <li> شیوه های پرداخت </li>
            </ul>
          </div>
          <div className="">
            <div>
              <p className="fontBold text-gray-800 ">همراه ما باشید!</p>
            </div>
            <div className="grid grid-cols-4 text-gray-400 mt-4">
              <div>
                <AiOutlineInstagram size={40} className="cursor-pointer" />
              </div>
              <div>
                <AiOutlineTwitter size={35} className="cursor-pointer" />
              </div>
              <div>
                <BsLinkedin size={35} className="cursor-pointer" />
              </div>
              <div>
                <SiAparat size={35} className="cursor-pointer" />
              </div>
            </div>
            <div className="mt-8">
              <p className="fontBold text-gray-800 ">
                با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید
              </p>
            </div>

            <div>
              <div className="mt-5 flex items-center">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className={` ${
                    !emailData.isValid && emailData.isFocused
                      ? "outline outline-digiRed"
                      : ""
                  }  py-3 w-[200px] bg-gray-100 ps-3 outline-none rounded-md `}
                  value={emailData.email}
                  onChange={handleEmailInputChange}
                  aria-label="Email input"
                  aria-invalid={!emailData.isValid}
                  onBlur={() => {
                    setEmailData({
                      ...emailData,
                      isBlurred: true,
                      isFocused: false,
                    });
                  }}
                />

                <button
                  onClick={onSubmitClick}
                  className={`text-white  px-3 py-3 rounded-md mr-2 ${
                    emailData.isValid ? "bg-digiRed" : " bg-gray-200"
                  }`}
                  disabled={!emailData.isValid}
                >
                  {emailData.isRegistered ? (
                    <div className="">
                      <svg
                        className="animate-spin h-[24px] w-[24px]  text-white "
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="opacity-25 text-white"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentcolor "
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-100 text-white"
                          fill="white"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    "ثبت"
                  )}
                </button>
              </div>
              {renderEmailErrors()}
            </div>
          </div>
        </div>
        <div className="mt-4 bg-digiFooterColor   h-[80px]  w-full rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <Image
                src={"/images/footer-images/footerlogo2.webp"}
                alt="footer logo "
                height={50}
                width={50}
                unoptimized
              ></Image>
            </div>
            <p className="mr-4 text-white text-[20px] fontBold">
              دانلود اپلیکیشن دیجی کالا
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <div>
              <Image
                src={"/images/footer-images/coffe-bazzar.svg"}
                width={140}
                height={50}
                alt="caffe bazar logo"
                unoptimized
                className="cursor-pointer rounded-md"
              />
            </div>
            <div>
              <Image
                src={"/images/footer-images/myket.svg"}
                width={140}
                height={50}
                alt="myket logo"
                unoptimized
                className="cursor-pointer rounded-md"
              />
            </div>
            <div>
              <Image
                src={"/images/footer-images/sib-app.svg"}
                width={140}
                height={50}
                alt="sib-app logo"
                unoptimized
                className="cursor-pointer rounded-md"
              />
            </div>
            <div>
              <Image
                src={"/images/footer-images/more.svg"}
                width={40}
                height={50}
                alt="caffe bazar logo"
                unoptimized
                className="bg-white rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-300 h-[1px] w-full"></div>
        <div className="py-2 mt-2 flex bg-blue-40">
          <div>
            <div>
              <p className="text-[21px] fontBold text-gray-500 tracking-tight">
                فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین
              </p>
            </div>
            <div
              className={`mt-2 flex ${
                dropDowns.readMore
                  ? "h-full"
                  : "h-[60px] overflow-hidden before:bg-gradient-to-b before:from-transparent before:from-50% before:to-white before:h-[60px] before:absolute before:w-[62%] after:content-['']"
              }`}
            >
              <p className="text-[13px] leading-5 text-gray-400  w-[88%]">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد. یکی از
                مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی
                دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد.
                <br /> دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
                کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار
                می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص
                خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده
                به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این
                فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از
                شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده
                است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز،
                دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی،
                ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی،
                ارسال با پست <br />
                کدام محصولات در دیجی‌کالا قابل سفارش هستند؟ <br />
                تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان
                خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی
                روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف
                عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده
                زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و
                زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که
                در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن
                ها وجود دارد.
                <br /> کالای دیجیتال <br></br>
                انواع گوشی موبایل از برندهای مختلفی مثل آیفون، گوشی سامسونگ،
                گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4
                و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع
                هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل
                تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از
                برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی
                هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.
                <br />
                خودرو، ابزار و تجهیزات صنعتی <br />
                انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
                و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
                خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
                کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار
                می‌گیرند. <br /> مد و پوشاک <br />
                محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس
                راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال
                و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای
                مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی،
                دبنهامز، آلدو، درسا و... خریداری کنید. <br /> اسباب بازی کودک
                <br /> و نوزاد در این دسته از کالاهای دیجی‌کالا، انواع لوازم
                بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت،
                اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا
                خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری
                سریع و آسان تبدیل کند. <br /> کالاهای سوپر مارکتی <br /> هر چیزی
                از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا
                می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه،
                زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل
                نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما
                هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
                <br />
                زیبایی و سلامت <br />
                انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت
                و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل
                انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو و...، انواع لوازم
                شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا
                و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی
                طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش
                برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند. <br />
                خانه و آشپزخانه <br /> یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش
                لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش
                صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن
                بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات
                مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه
                مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان
                فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل
                تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.
                <br />
                کتاب، لوازم تحریر و هنر <br /> بخش هنر، کتاب، رمان و لوازم تحریر
                دیجی‌کالا نیز یکی از متنوع‌ترین بخش‌های این فروشگاه اینترنتی
                است. انواع کتاب و مجله، کتاب زبان، بازی، لوازم تحریر با طرح‌های
                مختلف مانند دختر کفشدوزکی، سازهایی مثل پیانو، سنتور، هنگ درام
                و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار
                دارند. <br />
                ورزش و سفر <br /> هر نوع وسیله و لباس ورزشی که فکرش را کنید،
                انواع وسایل کمپینگ و کوهنوردی، ساک و قمقمه ورزشی و... در این بخش
                قرار می‌گیرند. همچنین شما می‌توانید وسایل مد نظر خود را بر اساس
                نوع ورزش (آبی، هوازی، بدنسازی و...) در دسته‌بندی‌های دیجی‌کالا
                پیدا کنید. <br />
                محصولات بومی و محلی <br />و در آخر دیجی‌کالا از طریق به فروش
                رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه،
                ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین
                راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله
                ظروف زیبای مخصوص به سفره هفت‌سین و پذیرایی از مهمانان در روزهای
                نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی
                در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار
                بالا انتخاب کنید. همچنین در صفحه برچسب ها، امکان مشاهده و خرید
                انواع محصولات با طرح های بومی وجود دارد. دیجی‌کالا همچنین برای
                اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع
                ایده عکس پروفایل عید نوروز، آهنگ‌های عید نوروز و موزیک‌های شاد
                بهاری، وسایل مربوط به خانه‌تکانی و انواع لباس های عید را برای
                شما فراهم کرده است تا بتوانید در کنار خرید خود، از این حال و
                هوای تازه نهایت لذت را ببرید.
              </p>
            </div>

            <div
              className="mt-1 text-gray-400"
              onClick={() =>
                setDropdowns({ ...dropDowns, readMore: !dropDowns.readMore })
              }
            >
              {dropDowns.readMore ? (
                <div className="flex items-center -mt-3 text-[14px] fontBold   cursor-pointer ">
                  <span>بستن</span> <BiChevronLeft size={20} />
                </div>
              ) : (
                <div className="flex items-center text-[14px] fontBold  cursor-pointer">
                  <span>مشاهده بیشتر</span> <BiChevronLeft size={20} />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-1 bg-yellow-10  h-fit ">
            <div className="border rounded-xl mx-auto  h-[100px] w-[100px] flex-center">
              <Image
                src={"/images/footer-images/rezi.webp"}
                width={300}
                height={300}
                unoptimized
                alt="rezi logo"
                className=""
              />
            </div>

            <div className="border rounded-xl mx-auto h-[100px] w-[100px] flex-center">
              <Image
                src={"/images/footer-images/logo.png"}
                width={300}
                height={300}
                unoptimized
                alt=" logo"
                className="p-2"
              />
            </div>

            <div className="border rounded-xl mx-auto h-[100px] w-[100px] flex-center">
              <Image
                src={"/images/footer-images/kasbokar.webp"}
                width={300}
                height={300}
                unoptimized
                alt="rezi logo"
                className="p-5"
              />
            </div>
          </div>
        </div>
        <div
          className={` bg-gray-300 h-[1px] w-full ${
            dropDowns.readMore && "mt-14"
          }`}
        ></div>
        <div className="py-8 text-center ">
          <p className="text-gray-400 text-[11px]">
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.<br></br>اجرا از محمد بابایی
          </p>
        </div>
      </div>
      <div className="bg-neutral-100 max-lg:hidden">
        <div className="  2xl:w-[90%] 2xl:mx-auto flex  flex-wrap gap-[1px] items-start justify-end divide-y divide-x ">
          {footerGridData.map((item) => {
            return (
              <div
                key={item.id}
                className="h-[80px] px-[15px] w-[180px] grow flex-center cursor-pointer"
              >
                <Image
                  alt="item description"
                  width={110}
                  height={100}
                  unoptimized
                  src={item.src}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>

      {/* end of footer  for desktop */}
    </div>
  );
}

export default Footer;
