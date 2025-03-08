import Image from 'next/image'
import React from 'react'

const Team = () => {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className=" md:text-5xl text-4xl  font-semibold text-gray-900 ">
                            Our Team
                        </h2>
                        <p className='text-zinc-500 mt-4'>These people work on making our product best.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <div className="group  w-full">
                            <div className="relative mb-6">
                                <Image
                                    src="/talha.png"
                                    alt="Team image"
                                    width={1000}
                                    height={1000}
                                    className="w-full rounded-full mx-auto transition-all bg-blue-50 duration-500 object-cover border border-solid border-transparent group-hover:border-primeryColor"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primeryColor">
                                Muhammad Talha
                            </h4>
                            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                                Developer
                            </span>
                        </div>
                        <div className="group  w-full">
                            <div className="relative mb-6">
                                <Image
                                    src="/talha.png"
                                    alt="Team image"
                                    width={1000}
                                    height={1000}
                                    className="w-full rounded-full mx-auto transition-all bg-blue-50 duration-500 object-cover border border-solid border-transparent group-hover:border-primeryColor"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primeryColor">
                                Muhammad Ali
                            </h4>
                            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                                Marketer
                            </span>
                        </div>
                        <div className="group  w-full">
                            <div className="relative mb-6">
                                <Image
                                    src="/talha.png"
                                    alt="Team image"
                                    width={1000}
                                    height={1000}
                                    className="w-full rounded-full mx-auto transition-all bg-blue-50 duration-500 object-cover border border-solid border-transparent group-hover:border-primeryColor"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-primeryColor">
                                Unknown
                            </h4>
                            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                                ....
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team