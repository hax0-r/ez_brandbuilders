import { MdOutlineWebStories } from "react-icons/md";
import { IoIosDesktop } from "react-icons/io";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaFigma } from 'react-icons/fa'

export const SERVICES = [
    {
        id: 1,
        title: 'Web Application',
        description: 'From e-commerce platforms to sophisticated enterprise solutions, we ensure that our web app development services are robust, responsive, and aligned with your strategic objectives. With a focus on innovation and quality, StiffTech Solutions transforms your vision into a powerful web presence that stands out in the digital landscape.',
        icon: <IoIosDesktop size={26} className='text-primeryColor' />
    },
    {
        id: 2,
        title: 'Mobile Application',
        description: 'Whether you want to build a new website from scratch or redesign an old one, we customize our strategy to fit your particular requirements and objectives. We develop interactive websites by blending innovative designs with functionality. Our team ensures that every minor detail aligns with your brand and company. Elevate your online presence with our custom web design services.',
        icon: <MdOutlineWebStories size={26} className='text-primeryColor' />
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description: 'With our team of digital marketing experts, we combine innovative strategies through our marketing funnel to give your business a significant ROI. Transform your online presence from awareness to loyalty, engage, and build brand steadily with our digital marketing services.',
        icon: <SiGooglemarketingplatform size={26} className='text-primeryColor' />
    },
    {
        id: 4,
        title: 'UI/UX Design',
        description: 'We use the latest technologies to guarantee smooth and captivating user experiences for your business platforms. With our top-notch UI/UX design services, discover the ideal balance between simple and appealing platforms.',
        icon: <FaFigma size={26} className='text-primeryColor' />
    },
]