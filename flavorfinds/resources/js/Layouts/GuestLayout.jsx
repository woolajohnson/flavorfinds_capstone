// import ApplicationLogo from "@/Components/ApplicationLogo";
// import { Link } from "@inertiajs/react";
import Pizza from "../../assets/login.mp4";

export default function Guest({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}
            <video
                src={Pizza}
                type="video/mp4"
                loop={true}
                controls={false}
                muted
                autoPlay
                className="absolute flex flex-col justify-center items-center inset-0 w-full h-full object-cover"
            />
            <div className="absolute flex flex-col justify-center items-center inset-0 bg-black/25"></div>
            <div className="absolute flex flex-col justify-center items-center sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
