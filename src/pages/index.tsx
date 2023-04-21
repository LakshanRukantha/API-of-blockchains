import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import Image from "next/image";
import robots01 from "../../public/assets/images/robots-01.png";
import polygon01 from "../../public/assets/images/polygon-1.png";
import polygon02 from "../../public/assets/images/polygon-2.png";
import polygon03 from "../../public/assets/images/polygon-3.png";
import rect1 from "../../public/assets/images/rect1.png";
import rect2 from "../../public/assets/images/rect2.png";
import rect3 from "../../public/assets/images/rect3.png";
import rect4 from "../../public/assets/images/rect4.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col w-full h-full justify-center pt-32">
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
        <h2 className="text-center text-[#20E3A1] text-2xl font-bold pt-8 pb-2">
          Community-owned
        </h2>
        <h1 className="text-center text-slate-50 text-4xl font-bold">
          API of blockchains.
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
        <h2 className="text-2xl text-slate-50 font-bold text-center flex m-auto mt-12 max-w-xs">
          With AI algorithms running on the network
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-16 p-8 w-full place-items-center">
          <div className="relative">
            <Image src={rect1} alt="card1" width={250} height={200} />
            <div className="absolute flex flex-col justify-end w-full hover:backdrop-brightness-50 rounded-2xl h-full cursor-pointer bottom-0 p-2">
              <div className="bg-gray-950 bg-opacity-50 rounded-2xl">
                <h3 className="text-slate-50 h-fit  p-1">
                  Community- owned API of blockchains.
                </h3>
                <h4 className="text-slate-50 text-sm  p-1">
                  Another benefit of AI blockchains is their potential to enable
                  new applications and use cases.
                </h4>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={rect2} alt="card1" width={250} height={200} />
            <div className="absolute flex flex-col justify-end w-full hover:backdrop-brightness-50 rounded-2xl h-full cursor-pointer bottom-0 p-2">
              <div className="bg-gray-950 bg-opacity-50 rounded-2xl">
                <h3 className="text-slate-50 h-fit  p-1">
                  Community- owned API of blockchains.
                </h3>
                <h4 className="text-slate-50 text-sm  p-1">
                  Another benefit of AI blockchains is their potential to enable
                  new applications and use cases.
                </h4>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={rect3} alt="card1" width={250} height={200} />
            <div className="absolute flex flex-col justify-end w-full hover:backdrop-brightness-50 rounded-2xl h-full cursor-pointer bottom-0 p-2">
              <div className="bg-gray-950 bg-opacity-50 rounded-2xl">
                <h3 className="text-slate-50 h-fit  p-1">
                  Community- owned API of blockchains.
                </h3>
                <h4 className="text-slate-50 text-sm  p-1">
                  Another benefit of AI blockchains is their potential to enable
                  new applications and use cases.
                </h4>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl">
            <Image src={rect4} alt="card1" width={250} height={200} />
            <div className="absolute flex flex-col justify-end w-full hover:backdrop-brightness-50 rounded-2xl h-full cursor-pointer bottom-0 p-2">
              <div className="bg-gray-950 bg-opacity-50 rounded-2xl">
                <h3 className="text-slate-50 h-fit  p-1">
                  Community- owned API of blockchains.
                </h3>
                <h4 className="text-slate-50 text-sm  p-1">
                  Another benefit of AI blockchains is their potential to enable
                  new applications and use cases.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
