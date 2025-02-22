"use client"

import React from "react"
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import { LenisProvider } from "./Components/Lenis/LenisProvider";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {

    return (
        <div>
            <LenisProvider>
                <Navbar />
                {children}
                <Footer />
            </LenisProvider>
        </div>
    )
}
