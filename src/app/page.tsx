import Link from "next/link";
import { HomeLayout } from "./HomeLayout";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import heroImage from "@/Assets/banner-img.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HomeLayout>
        <div className="w-40 md:w-96 h-40 md:h-96 bg-indigo-50 -z-10 absolute top-20 right-0 rounded-full blur-3xl"></div>
        <div className="w-40 md:w-96 h-40 md:h-96 bg-indigo-50 -z-10 absolute top-60 left-0 rounded-full blur-3xl"></div>
        <section className="pt-16 lg:pt-32 bg-center min-h-[calc(100vh-80px)] bg-cover">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="border border-primary p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
              <span className="font-inter text-xs font-medium text-gray-900 ml-3">
                Explore how to use for brands.
              </span>
              <Link
                href="/"
                className="w-8 h-8 rounded-full flex justify-center items-center bg-primary"
              >
                <IoArrowForwardOutline className="text-white" />
              </Link>
            </div>
            <h1 className="max-w-2xl !leading-tight mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl">
              We are the #1
              <span className="text-primary"> Software Development  </span> Company in Pakistan
            </h1>
            <p className="max-w-4xl mx-auto text-center text-base font-normal text-gray-500 mb-9">
              We have become the top-notch software development services provider primarily due to our years of experience, creative solutions, and dedication to quality. Our team of creative, offshore developers and designers turns concepts into reality.
            </p>
            <Link
              href="/"
              className="w-full md:w-auto md:mb-14 mb-6 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-primary shadow-xs hover:bg-indigo-700 transition-all duration-500"
            >
              Create an account
              <IoIosArrowForward className="text-xl ml-2" />
            </Link>
          </div>
        </section>

        <section className="max-w-7xl w-full mx-auto md:gap-20 gap-5 md:flex-row flex-col p-4 pt-8 flex items-center justify-center">
          <div className="md:max-w-[50%] w-full">
            <h2 className="md:text-5xl text-3xl font-bold">Why <span className="text-primeryColor">Choose Us?</span></h2>
            <h2 className="md:text-2xl md:mt-7 mt-5 text-xl font-medium">Reliable Solutions</h2>
            <p className="text-gray-500 mt-2">EZ Brand Builders understands that every business is unique. We serve them with innovative solutions that help them overcome business challenges.</p>
            <h2 className="md:text-2xl md:mt-7 mt-5 text-xl font-medium">Client-Centric Approach</h2>
            <p className="text-gray-500 mt-2">We always ensure our client’s mission and work accordingly to drive business growth.</p>
            <h2 className="md:text-2xl md:mt-7 mt-5 text-xl font-medium">Constant Support</h2>
            <p className="text-gray-500 mt-2">Our goal is to give businesses peace of mind and allow them to concentrate on their primary business operations by offering continuous support and maintenance.</p>
          </div>
          <div className="md:max-w-[50%] w-full">
            <Image src={heroImage} alt="hero image" />
          </div>
        </section>
      </HomeLayout>
    </div>
  );
}
