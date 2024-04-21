import { Link, Head } from "@inertiajs/react";
import HeroPng from "../../assets/pizza.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Categories from "./Categories";
import NavBar from "./NavBar";
import Description from "./Description";
import Footer from "./Footer";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 700,
            easing: "ease-in",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <Head title="Home" />
            <NavBar />
            <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1
                                data-aos="fade-up"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                Find your next{" "}
                                <span
                                    data-aos="zoom-out"
                                    data-aos-delay="300"
                                    className="text-primary font-cursive2 underline"
                                >
                                    favorite
                                </span>{" "}
                                recipes here.
                            </h1>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <Link href={route("login")}>
                                    <button className="mt-2 bg-white hover:scale-105 shadow shadow-secondary duration-200 text-brandDark py-2 px-4 font-semibold rounded-md">
                                        Search Recipes
                                        <i className="fa-solid fa-magnifying-glass ml-2"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* Image section */}
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
                        >
                            <img
                                data-aos-once="true"
                                src={HeroPng}
                                alt="biryani img"
                                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
                            />
                            <div
                                data-aos="fade-right"
                                data-aos-offset="0"
                                className="bg-white shadow shadow-secondary py-2 px-4 rounded-md absolute top-50 right-0"
                            >
                                <h1 className="text-brandDark font-semibold">
                                    <i className="fa-solid fa-utensils mr-2 bg-primary p-1.5 text-white rounded"></i>
                                    Time To Eat
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <Categories />
            <Description />
            <Footer />
        </>
    );
}
