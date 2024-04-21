import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import SavedRecipeDetails from "@/Components/SavedRecipeDetails";
import Steak from "../../assets/dinner.png";
import { router } from "@inertiajs/react";

export default function Favorites({ auth, pins }) {
    const [open, setOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState({});
    const [total, setTotal] = useState(0);

    const onClose = () => {
        setOpen(false);
    };
    const handleModal = (details) => {
        setModalDetails(details);
        setOpen(true);
    };
    // Delete item
    const handleDelete = (e, id) => {
        e.stopPropagation();
        router.delete(`/favorites/${id}`);
    };
    useEffect(() => {
        setTotal(pins.length);
    }, [total]);
    return (
        <AuthenticatedLayout
            total={total}
            user={auth.user}
            header={
                <>
                    <div className="flex flex-col justify-center items-center">
                        <div data-aos="fade-down">
                            <img
                                src={Steak}
                                alt="biryani img"
                                className="w-[8rem] sm:scale-125 spin"
                            />
                        </div>

                        <h2 className="text-center text-2xl font-bold text-brandDark">
                            My Saved Recipes
                        </h2>
                    </div>
                </>
            }
        >
            <Head title="Favorites" />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" dark:bg-gray-800 overflow-hidden sm:rounded-lg">
                        {/* images here */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
                            {pins.length ? (
                                pins?.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="bg-customGreen shadow-md group relative cursor-pointer rounded-md overflow-hidden hover:scale-105 ease-out duration-300"
                                            onClick={() =>
                                                handleModal({
                                                    label: item.label,
                                                    image: item.image_url,
                                                    mealType: item.meal_type,
                                                    calories: item.calories,
                                                    ingredientLines:
                                                        item.ingredients,
                                                    instructions:
                                                        item.instructions_url,
                                                })
                                            }
                                            onClose={onClose}
                                        >
                                            <img
                                                src={item?.image_url}
                                                alt=""
                                                className="w-full shadow"
                                            />
                                            <h1 className="p-2 text-primary mt-1 font-bold">
                                                <i className="fa-solid fa-utensils mr-2 bg-brandDark rounded p-1.5 text-white"></i>
                                                {item.label}
                                            </h1>
                                            <button
                                                onClick={(e) =>
                                                    handleDelete(e, item.id)
                                                }
                                                className="py-1 px-2 hidden group-hover:block duration-150 hover:bg-red-600 bg-red-500 text-white font-semibold absolute top-3 right-3 rounded-md"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <h1 className="text-lg font-semibold text-gray-400">
                                    No results found...
                                </h1>
                            )}
                            <SavedRecipeDetails
                                open={open}
                                onClose={onClose}
                                modalDetails={modalDetails}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
