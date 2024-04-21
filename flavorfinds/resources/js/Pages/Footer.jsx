import React from "react";

const Footer = () => {
    return (
        <div className="bg-brandDark text-white">
            <div className="min-h-[10rem] container text-center flex flex-col md:flex-row justify-center items-center gap-20 p-16">
                <div>
                    <h2 className="font-bold text-primary text-2xl sm:text-3xl tracking-wider font-cursive">
                        FlavorFinds
                    </h2>
                    <p className="text-md mt-2">
                        &copy; Edwardson Andrade Jr. {new Date().getFullYear()}
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold">Technology Stack</h2>
                    <ul className="flex flex-col lg:flex-row mt-2 gap-2">
                        <li className="py-2 px-2 bg-primary rounded">
                            React Js
                        </li>
                        <li className="py-2 px-2 bg-primary rounded">
                            Tailwind CSS
                        </li>
                        <li className="py-2 px-2 bg-primary rounded">
                            Laravel
                        </li>
                        <li className="py-2 px-2 bg-primary rounded">
                            Inertia Js
                        </li>
                        <li className="py-2 px-2 bg-primary rounded">Mysql</li>
                        <li className="py-2 px-2 bg-primary rounded">
                            Edamam API
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
