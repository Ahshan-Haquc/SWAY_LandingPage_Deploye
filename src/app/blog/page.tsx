import SectionFive from "../../components/SectionFive"
import ContactUs from "../contact/page";
const page = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen mt-44">
            <h1 className="text-center text-[#FF6464] text-xl lg:text-4xl" data-aos="zoom-in">COMMING SOON</h1>
            <h1 className="text-center text-gray-800 text-lg lg:text-2xl" data-aos="zoom-in">Join our newslater to be the first to hear our latest news.</h1>
            <div className="w-full max-w-7xl mx-auto">
            <SectionFive/>
            </div>
            <div className="w-full max-w-7xl mx-auto">
            <ContactUs/>
            </div>

        </div>
    )
}

export default page;