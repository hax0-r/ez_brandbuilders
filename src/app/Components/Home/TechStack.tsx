"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const TechStack = () => {

    interface TechStack {
        id: number;
        name: string;
        image: string;
    }

    const techStack: TechStack[] = [
        { id: 1, name: "Next.js", image: "/nextjs.png" },
        { id: 2, name: "React.js", image: "/react.png" },
        { id: 3, name: "React Native", image: "/react.png" },
        { id: 4, name: "Node.js", image: "/nodejs.png" },
        { id: 5, name: "Express.js", image: "/express.png" },
        { id: 6, name: "Python", image: "/python.png" },
        { id: 7, name: "Docker", image: "/docker.png" },
        { id: 8, name: "Git", image: "/git.png" },
        { id: 9, name: "MongoDB", image: "/mongodb.png" },
        { id: 10, name: "Firebase", image: "/firebase.png" },
        { id: 11, name: "SQL", image: "/sql.png" },
        { id: 12, name: "WordPress", image: "/wordpress.png" },
        { id: 13, name: "Shopify", image: "/shopify.png" },
    ];

    return (
        <div className="flex items-center justify-center flex-wrap gap-5">
            {techStack.map(({ id, name, image }, index) => (
                <motion.div
                    key={id}
                    className="border text-center max-w-40 flex items-center justify-center flex-col rounded-xl p-5 h-44 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }}
                >
                    <Image src={image} alt={name} width={100} height={100} />
                    <p className="font-medium text-gray-700 mt-3">{name}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default TechStack;
