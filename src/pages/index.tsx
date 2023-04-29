import NavBar from "@/components/NavBar";
import Head from "next/head";
import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../../public/assets/images/logo.png";
import robots01 from "../../public/assets/images/robots-01.png";
import polygon01 from "../../public/assets/images/polygon-1.png";
import polygon02 from "../../public/assets/images/polygon-2.png";
import polygon03 from "../../public/assets/images/polygon-3.png";
import rect1 from "../../public/assets/images/rect1.png";
import rect2 from "../../public/assets/images/rect2.png";
import rect3 from "../../public/assets/images/rect3.png";
import rect4 from "../../public/assets/images/rect4.png";
import robots02 from "../../public/assets/images/robots-02.png";
import person01 from "../../public/assets/images/person-01.png";
import person02 from "../../public/assets/images/person-02.png";
import person03 from "../../public/assets/images/person-03.png";
import { useEffect } from "react";

type CardItemsType = {
  image: StaticImageData;
  title: string;
  subTitle: string;
};

type TestimonialType = {
  image: StaticImageData;
  description: string;
  name: string;
};

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      //once: true
    });
  }, []);

  const cardItems: CardItemsType[] = [
    {
      image: rect1,
      title: "community- owned API of blockchains.",
      subTitle:
        "Another benefit of AI blockchains is their potential to enable new applications and use cases.",
    },
    {
      image: rect2,
      title: "community- owned API of blockchains.",
      subTitle:
        "Another benefit of AI blockchains is their potential to enable new applications and use cases.",
    },
    {
      image: rect3,
      title: "community- owned API of blockchains.",
      subTitle:
        "Another benefit of AI blockchains is their potential to enable new applications and use cases.",
    },
    {
      image: rect4,
      title: "community- owned API of blockchains.",
      subTitle:
        "Another benefit of AI blockchains is their potential to enable new applications and use cases.",
    },
  ];

  const testimonials: TestimonialType[] = [
    {
      image: person01,
      description:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quos, a quae voluptas voluptatum qui molestias quidem laborum eos labore reiciendis numquam aperiam animi molestiae."',
      name: '"Ethan Brown"',
    },
    {
      image: person02,
      description:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quos, a quae voluptas voluptatum qui molestias quidem laborum eos labore reiciendis numquam aperiam animi molestiae."',
      name: '"Sophia Garcia"',
    },
    {
      image: person03,
      description:
        '"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quos, a quae voluptas voluptatum qui molestias quidem laborum eos labore reiciendis numquam aperiam animi molestiae."',
      name: '"Benjamin Anderson"',
    },
  ];

  return (
    <>
      <Head>
        <title>API Of Blockchains</title>
      </Head>
      <NavBar />
      <div
        className="flex flex-col w-full h-full justify-center pt-32"
        data-aos="fade-in"
      >
        <Image
          className="absolute top-0 sm:top-16 -z-10"
          src={polygon02}
          alt="Logo"
          width={300}
          height={300}
        />
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-ml-16 mt-4 -z-10"
          src={polygon01}
          alt="Logo"
          width={600}
          height={600}
        />
        <Image
          className="absolute right-8 opacity-0 sm:opacity-100 -z-10"
          src={polygon03}
          alt="Logo"
          width={200}
          height={200}
        />
        <h2 className="text-center text-[#20E3A1] text-2xl pt-8 pb-2">
          Community - Owned
        </h2>
        <h1 className="text-center text-slate-50 text-4xl font-jaapokkiSubtract">
          API Of Blockchains.
        </h1>
        <Image
          className="m-auto py-8 pr-16"
          src={robots01}
          alt="Logo"
          width={800}
          height={800}
        />
      </div>
      <div>
        <h2 className="text-2xl text-slate-50 text-center flex m-auto mt-12 max-w-xs">
          With AI algorithms running on the network
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-16 p-8 w-full place-items-center">
          {cardItems.map((item, index: number) => (
            <div
              key={index}
              className="relative transition ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={200 * index}
            >
              <Image src={item.image} alt="card1" width={250} height={250} />
              <div className="absolute border-2 border-zinc-500 hover:border-[#20E3A1] flex flex-col justify-end w-full hover:backdrop-brightness-50 rounded-2xl h-full cursor-pointer bottom-0 p-2">
                <div className="bg-gray-950 bg-opacity-50 rounded-2xl">
                  <h3 className="text-slate-50 h-fit  p-1">{item.title}</h3>
                  <h4 className="text-slate-50 text-sm  p-1">
                    {item.subTitle}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container max-w-screen-xl flex flex-col mx-auto md:flex-row md:justify-center w-full place-items-center mt-20 p-8 bg-zinc-700 md:items-stretch rounded-md">
        <div
          className="flex flex-col align-middle justify-center md:w-1/3"
          data-aos="fade-up"
        >
          <h2 className="text-slate-50 text-3xl text-left my-2">
            Build A Stunning Social Network
          </h2>
          <p className="text-slate-50 mb-4">
            Another benefit of AI blockchains is their potential to enable new
            applications and use cases.
          </p>
          <button
            type="button"
            className="text-[#20E3A1] bg-[#0E1436] border-2 w-fit px-4 py-2 rounded-tr-lg border-[#20E3A1] mb-8 active:scale-95 hover:brightness-125 transition-all ease-in-out"
          >
            Read More
          </button>
        </div>
        <div className="relative -left-8 w-full  md:w-1/2" data-aos="fade-up">
          <Image
            src={robots02}
            alt="card1"
            width={650}
            height={250}
            className="h-full"
          />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-slate-50 text-center flex m-auto my-12 mb-20 max-w-xs">
          Testimonials from lovely previous buyers.
        </h2>
        <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 my-8">
          {testimonials.map((item, index: number) => (
            <div
              key={index}
              className="w-80 h-50 bg-black bg-opacity-20 my-10 rounded-md border border-[#20E3A1] hover:scale-105 transition-all ease-in-out cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={200 * index}
            >
              <div className="relative flex items-center justify-center -top-8 w-16 h-16 mx-auto rounded-full overflow-hidden border-4 border-x-transparent border-y-[#20E3A1]">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="person1"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <p className="relative text-gray-400 -top-4 p-4">
                {item.description}
                <span className="flex flex-col items-end mt-2 text-sm">
                  - {item.name} -
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up">
        <h2 className="text-2xl text-slate-50 text-center mt-16 mb-8">
          Want to get involved?
        </h2>
        <p className="text-gray-400 text-center max-w-xs flex mx-auto">
          Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh
          magna. Proin risus erat, fringilla vel purus.
        </p>
        <button
          type="button"
          className="flex mx-auto mt-8 text-[#20E3A1] bg-[#0E1436] border-2 w-fit px-4 py-2 rounded-tr-lg border-[#20E3A1] mb-8 active:scale-95 hover:brightness-125 transition-all ease-in-out"
        >
          Join Our Community
        </button>
      </div>
      <div className="w-full bg-black bg-opacity-20">
        <div className="flex items-start pt-8 justify-around rounded-md md:justify-between max-w-screen-xl text-slate-50 mx-auto p-4 mt-20 md:h-40">
          <div>
            <a href="#">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row gap-4">
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">Community</a>
              </li>
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">Technology</a>
              </li>
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">About us</a>
              </li>
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-[#20E3A1] transition-colors ease-in-out">
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full my-6 px-8">
        <h4 className="text-slate-50 text-xs">
          @ Copyright 2023, All Rights Reserved by{" "}
          <a
            className="text-[#20E3A1] underline"
            href="https://lakshanrukantha.github.io/"
          >
            Lakshan Rukantha
          </a>
        </h4>
        <div className="flex flex-row gap-4">
          <a href="#">
            <FaLinkedin className="w-6 h-6 text-slate-50" />
          </a>
          <a href="#">
            <FaFacebook className="w-6 h-6 text-slate-50" />
          </a>
          <a href="#">
            <FaTwitter className="w-6 h-6 text-slate-50" />
          </a>
        </div>
      </div>
    </>
  );
}
