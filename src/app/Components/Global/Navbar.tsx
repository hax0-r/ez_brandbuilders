import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="">
            <div className="max-w-7xl w-full mx-auto h-20 p-4 flex items-center justify-between">
                <Link href={"/"}>Logo</Link>
                <ul className="md:flex hidden items-center gap-10">
                    <li><Link className="transition-all duration-500 hover:text-primary" href={"/"}>Home</Link></li>
                    <li><Link className="transition-all duration-500 hover:text-primary" href={"/"}>About Us</Link></li>
                    <li><Link className="transition-all duration-500 hover:text-primary" href={"/"}>Services</Link></li>
                    <li><Link className="transition-all duration-500 hover:text-primary" href={"/"}>Contact Us</Link></li>
                </ul>
                <div className="md:flex hidden items-center gap-2">
                    <Button variant={"light"}>Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>


        </div>
    )
}

export default Navbar