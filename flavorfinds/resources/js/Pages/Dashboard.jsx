import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeDetails from "@/Components/RecipeDetails";
import PreSearch from "./PreSearch";
import { router } from "@inertiajs/react";

export default function Dashboard({ auth, pins }) {
    const [recipe, setRecipe] = useState("ice cream");
    const [result, setResult] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState({});
    const [total, setTotal] = useState(0);

    const fetchData = async () => {
        const appId = "afa937a1";
        const apiKey = "991162f2a2805c4b30c1c64c35b85f6c";
        try {
            const res = await axios.get(
                `https://api.edamam.com/search?q=${recipe}&app_id=${appId}&app_key=${apiKey}&from=0&to=24&`
            );
            setResult(res.data.hits);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleModal = (details) => {
        setModalDetails(details);
        setOpen(true);
    };
    const handleSelection = (data) => {
        setRecipe(data);
        fetchData();
    };
    // Insert Data to DB
    const handleSave = (e, recipe) => {
        e.stopPropagation();

        router.post("save-pin", recipe);
    };
    useEffect(() => {
        setTotal(pins.length);
    }, [total]);
    useEffect(() => {
        fetchData();
    }, [recipe]);
    return (
        <AuthenticatedLayout
            total={total}
            user={auth.user}
            header={
                <>
                    <form
                        onSubmit={handleSubmit}
                        className="text-center my-5 w-full"
                    >
                        <div className="px-36 md:px-44 lg:px-60 w-full flex justify-center items-center">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search a recipe..."
                                className="placeholder-gray-400 p-2 indent-2 flex-grow shadow rounded-tl rounded-bl bg-white border border-gray-50 focus:border-blue-100 outline-none focus-within:shadow-sm"
                                onChange={(e) => setRecipe(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="h-[2.75rem] bg-primary rounded-tr rounded-br border-none text-white px-4 bg- flex-shrink duration-200 hover:bg-brandDark"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                    <PreSearch handleSelection={handleSelection} />
                </>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=" dark:bg-gray-800 overflow-hidden sm:rounded-lg">
                        {/* images here */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
                            {result.length ? (
                                result?.map((item, index) => {
                                    const recipe = item.recipe;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-customGreen shadow-md group relative cursor-pointer rounded-md overflow-hidden hover:scale-105 ease-out duration-300"
                                            onClick={() =>
                                                handleModal({
                                                    label: recipe.label,
                                                    image: recipe.image,
                                                    mealType: recipe.mealType,
                                                    calories: recipe.calories,
                                                    ingredientLines:
                                                        recipe.ingredientLines,
                                                    instructions: recipe.url,
                                                })
                                            }
                                            onClose={onClose}
                                        >
                                            <img
                                                src={recipe?.image}
                                                alt=""
                                                className="w-full shadow"
                                            />
                                            <h1 className="p-2 text-primary mt-1 font-bold">
                                                <i className="fa-solid fa-utensils mr-2 bg-brandDark rounded p-1.5 text-white"></i>
                                                {recipe?.label}
                                            </h1>
                                            <button
                                                onClick={(e) =>
                                                    handleSave(e, recipe)
                                                }
                                                className="py-1 px-2 hidden group-hover:block duration-150 hover:bg-brandDark bg-primary text-white font-semibold absolute top-3 right-3 rounded-md"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <h1 className="text-lg font-semibold text-gray-400">
                                    No results found...
                                </h1>
                            )}
                            <RecipeDetails
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
