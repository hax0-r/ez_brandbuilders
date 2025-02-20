import { HomeLayout } from "./HomeLayout";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      <HomeLayout>
        <section className="pt-8 lg:pt-32 bg-center bg-cover">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <div className="border border-primary p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
              <span className="font-inter text-xs font-medium text-gray-900 ml-3">
                Explore how to use for brands.
              </span>
              <a
                href="javascript:;"
                className="w-8 h-8 rounded-full flex justify-center items-center bg-primary"
              >
                <IoArrowForwardOutline className="text-white" />
              </a>
            </div>
            <h1 className="max-w-2xl !leading-tight mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl">
              We are the #1
              <span className="text-primary"> Software Development  </span> Company in Pakistan
            </h1>
            <p className="max-w-4xl mx-auto text-center text-base font-normal text-gray-500 mb-9">
              We have become the top-notch software development services provider primarily due to our years of experience, creative solutions, and dedication to quality. Our team of creative, offshore developers and designers turns concepts into reality.
            </p>
            <a
              href="javascript:;"
              className="w-full md:w-auto md:mb-14 mb-6 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-primary shadow-xs hover:bg-indigo-700 transition-all duration-500"
            >
              Create an account
              <svg
                className="ml-2"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="flex justify-center">
              <img
                src="https://gossip-themes.com/knoragency/wp-content/uploads/2023/02/agency-banner-img.png"
                alt="Dashboard image"
                className="rounded-t-3xl h-auto object-cover"
              />
            </div>
          </div>
        </section>

      </HomeLayout>
    </div>
  );
}
