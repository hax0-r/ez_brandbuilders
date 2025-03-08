import React from 'react'

interface Services {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode
}

interface CardProps {
    services: Services[]
}

const Card: React.FC<CardProps> = ({ services }) => {
    return (
        <>
            <section className="">
                <div className="flex justify-center items-start gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {
                        services.map(({ id, title, description, icon }) => (
                            <div key={id} className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 xl:p-7 xl:w-1/4 hover:bg-primeryColor">
                                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                                    {icon}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                                    {title}
                                </h4>
                                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                                    {description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Card