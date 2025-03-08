"use client";
import { ReactLenis } from "@/utils/Lenis";

interface LenisProviderProps {
    children: React.ReactNode
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }: { children: React.ReactNode }) => {
    return <ReactLenis root>{children}</ReactLenis>;
}

