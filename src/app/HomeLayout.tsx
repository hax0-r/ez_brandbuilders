import React from "react"

interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div>
            Navbar
            {children}
            Footer
        </div>
    )
}
