import React from "react";
import BreakFast from "../../assets/breakfast.png";
import Vegan from "../../assets/vegetable.png";
import Dessert from "../../assets/dessert.png";
import Coffee from "../../assets/coffee.png";
import Steak from "../../assets/dinner.png";
import Cake from "../../assets/cake.png";

const ServicesData = [
    {
        id: 1,
        img: BreakFast,
        name: "BreakFast",
        bgColor: "bg-customYellow",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Vegan,
        name: "Vegan",
        bgColor: "bg-customGreen",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Cake,
        name: "Cake",
        bgColor: "bg-customBrown",
        aosDelay: "500",
    },
    {
        id: 4,
        img: Dessert,
        name: "Dessert",
        bgColor: "bg-customRed",
        aosDelay: "500",
    },
    {
        id: 5,
        img: Steak,
        name: "Steak",
        bgColor: "bg-customYellow2",
        aosDelay: "100",
    },
    {
        id: 6,
        img: Coffee,
        name: "Coffee",
        bgColor: "bg-customRed2",
        aosDelay: "300",
    },
];
const Categories = () => {
    return (
        <div className="py-12">
            <div className="container">
                {/* Heading section  */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h1 className="text-4xl font-bold font-cursive2 text-brandDark">
                        Discover the Most Loved Recipes
                    </h1>
                </div>

                {/* Services Card section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-3 place-items-center">
                    {ServicesData.map((service) => (
                        <div
                            data-aos="fade-up"
                            key={service.id}
                            data-aos-delay={service.aosDelay}
                            className={`rounded shadow-xl shadow-${service.bgColor} duration-high cursor-pointer group max-w-[300px] ${service.bgColor} py-2 px-10 my-8`}
                        >
                            <div className="h-[122px]">
                                <img
                                    src={service.img}
                                    alt=""
                                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full "></div>
                                <h1 className="text-xl font-bold">
                                    {service.name}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
