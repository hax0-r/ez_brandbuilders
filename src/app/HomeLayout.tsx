"use client"

import React from "react"
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
// import Lenis from 'lenis'

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    // Initialize Lenis
    // const lenis = new Lenis();

    // // Use requestAnimationFrame to continuously update the scroll
    // function raf(time:any) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
