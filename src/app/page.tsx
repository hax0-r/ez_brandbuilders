import Link from "next/link";
import { HomeLayout } from "./HomeLayout";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      <div className="w-40 md:w-96 h-40 md:h-96 bg-indigo-50 -z-10 absolute top-20 right-0 rounded-full blur-3xl"></div>
      <div className="w-40 md:w-96 h-40 md:h-96 bg-indigo-50 -z-10 absolute top-60 left-0 rounded-full blur-3xl"></div>
      <HomeLayout>
        <section className="pt-16 lg:pt-32 bg-center bg-cover">
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
      </HomeLayout>
    </div>
  );
}
