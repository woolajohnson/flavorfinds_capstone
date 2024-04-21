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
const PreSearch = ({ handleSelection }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 place-items-center mt-24">
            {ServicesData.map((service) => (
                <div
                    data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay="300"
                    onClick={() => handleSelection(service.name)}
                    key={service.id}
                    className={`rounded shadow-lg shadow-${service.bgColor} duration-high cursor-pointer group max-w-[300px] ${service.bgColor} py-2 px-10 my-2`}
                >
                    <div className="h-[1rem]">
                        <img
                            src={service.img}
                            alt=""
                            className="max-w-[5rem] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                        />
                    </div>
                    <h1 className="text-sm font-bold text-center">
                        {service.name}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default PreSearch;
