import React from "react";
import Steak from "../../assets/dinner.png";

const Description = () => {
    return (
        <div className="bg-customGreen">
            <div className="min-h-[740px] flex justify-center items-center py-12 px-6 sm:py-0 ">
                <div className="container h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        {/* Image section */}
                        <div data-aos="zoom-in">
                            <img
                                src={Steak}
                                alt="biryani img"
                                className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                            />
                        </div>
                        {/* text content section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1
                                data-aos="fade-up"
                                className="text-3xl sm:text-4xl font-bold font-cursive"
                            >
                                Recipes, just a click away.
                            </h1>
                            <p
                                data-aos="fade-up"
                                className="text-md text-gray-500 tracking-wide leading-8 text-justify"
                            >
                                FlavorFinds is a social platform inspired by
                                Pinterest, focusing solely on recipe
                                exploration. Food enthusiasts can save and
                                explore a diverse array of mouthwatering recipes
                                and culinary inspirations. Similar to Pinterest,
                                users can browse through an extensive collection
                                of recipes and save their favorites.
                            </p>

                            <div className="grid grid-cols-1">
                                <div className="space-y-2">
                                    <div data-aos="fade-up">
                                        <i className="fa-solid fa-check mr-2 text-white bg-primary p-1 rounded"></i>
                                        <span className="font-semibold text-brandDark">
                                            Healthy Eating
                                        </span>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <i className="fa-solid fa-check mr-2 text-white bg-primary p-1 rounded"></i>
                                        <span className="font-semibold text-brandDark">
                                            Desserts
                                        </span>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <i className="fa-solid fa-check mr-2 text-white bg-primary p-1 rounded"></i>
                                        <span className="font-semibold text-brandDark">
                                            Vegan Options
                                        </span>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <i className="fa-solid fa-check mr-2 text-white bg-primary p-1 rounded"></i>
                                        <span className="font-semibold text-brandDark">
                                            And many more...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
