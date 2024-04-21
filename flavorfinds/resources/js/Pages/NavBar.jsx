import React from "react";
import { Link } from "@inertiajs/react";

const NavBar = () => {
    return (
        <div className="bg-brandDark text-white">
            <div className="container py-5">
                <div className="flex justify-between items-center">
                    {/* Logo section */}
                    <div data-aos="fade-down" data-aos-once="true">
                        <Link
                            href="/"
                            className="font-bold text-xl text-primary sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
                        >
                            FlavorFinds
                        </Link>
                    </div>

                    {/* Link section */}
                    <div
                        data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-delay="300"
                        className="flex justify-between items-center gap-2"
                    >
                        <Link href={route("register")}>
                            <button className="  hover:text-secondary duration-200 text-white py-2 px-6 font-semibold rounded-md">
                                Register
                            </button>
                        </Link>
                        <Link href={route("login")}>
                            <button className=" bg-white hover:scale-105 shadow shadow-secondary duration-200 text-brandDark py-2 px-6 font-semibold rounded-md">
                                Log in
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
